//@ts-nocheck
import {
    Box,
    Button,
    Divider,
    Heading,
    Input,
    Link,
    ListItem,
    Text,
    UnorderedList,
    useToast,
} from '@chakra-ui/react'
import {usePrepareContractWrite, useContractWrite, useWaitForTransaction, useContractRead} from 'wagmi'
import {ethers, providers} from 'ethers'
import type {NextPage} from 'next'
import {Layout} from '@/components/layout/Layout'
import {useIsMounted} from '@/hooks/useIsMounted'
import {useEffect, useState} from "react";
import {CredentialType, IDKitWidget} from "@worldcoin/idkit";
import type {ISuccessResult} from "@worldcoin/idkit";
import type {VerifyReply} from "./api/verify";
import {YourContract as contractAddress} from '@/artifacts/contracts/contractAddress'
import {useAccount} from 'wagmi'
import lighthouse from '@lighthouse-web3/sdk';
import contractData from '@/artifacts/contracts/YourContract.sol/YourContract.json'

const Home: NextPage = () => {
    const {address, isConnecting, isDisconnected} = useAccount()
    const {isMounted} = useIsMounted()
    const [worldIdData, setworldIdData] = useState(null)
    const [allowTx, setTxAllowed] = useState(false)
    const [healthRecordInput, sethealthRecordInput] = useState("")

    const [value, setValue] = useState('')
    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }
    const { data : getHealthRecord } = useContractRead({
        address: contractAddress ?? '',
        abi: contractData.abi ?? [],
        functionName: 'userHealthRecords',
        args : ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"],
        watch: true,
        onError(error) {
            console.log('Error', error)
        },
    })
    const [ipfshash, setIpfsHash] = useState(getHealthRecord ??  "")


    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite(
        {
            address: contractAddress ?? '',
            abi: contractData.abi ?? [],
            functionName: 'modifyUserHealthRecord',
            args: ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8", "0", ipfshash ?? "nothing"]
        })
    //@ts-ignore
    const {data, error, isError, write} =
        useContractWrite(config)

    const {isLoading, isSuccess} = useWaitForTransaction({
        hash: data?.hash,
    })
    const executeWrite = async (hash : string) => {
        if (write) {

            try {
                // Running write as async here
                await setIpfsHash(hash)
                await write?.(  {args: ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8", "0", hash ?? "nothing"]});
                setTxAllowed(false);
            } catch (e) {
                console.error(e);
                setTxAllowed(false);
            }

        }
    };
    // useEffect(() => {
    //     console.log("trigger tx",allowTx, ipfshash)
    //
    //     executeWrite(ipfshash);
    //
    // }, [ipfshash]);
    if (!isMounted) {
        return null
    }
    const onSuccess = (result: ISuccessResult) => {
        //window.alert("Successfully verified with World ID! Your nullifier hash is: " + result.nullifier_hash);
        console.log("all was ok from world id")
    };


    const uploadText = async () => {
        try {
            // Set txAllowed to true to denote the start of the process


            // Push file to the lighthouse node
            const output = await lighthouse.uploadText(value, process.env.NEXT_PUBLIC_LIGHTHOUSE_STORAGE ?? "", "healthrecord");
            console.log(output);
            console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);

            // Since setState actions are asynchronous, perform additional logic
            // if needed with the new hash after you've set it.
            setIpfsHash(output?.data?.Hash);
        } catch (e) {
            console.error(e);

        }
    }
    const handleProof = async (result: ISuccessResult) => {
        console.log("Proof received from IDKit:\n", JSON.stringify(result)); // Log the proof from IDKit to the console for visibility
        const reqBody = {
            merkle_root: result.merkle_root,
            nullifier_hash: result.nullifier_hash,
            proof: result.proof,
            credential_type: result.credential_type,
            action: process.env.NEXT_PUBLIC_WLD_ACTION_NAME,
            signal: "",
        };
        console.log("Sending proof to backend for verification:\n", JSON.stringify(reqBody)) // Log the proof being sent to our backend for visibility
        const res: Response = await fetch("/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
        })
        const data: VerifyReply = await res.json()
        if (res.status == 200) {
            console.log("Successful response from backend:\n", data); // Log the response from our backend for visibility

            // create ipfs hash

            try {

                await uploadText();
                setTxAllowed(true)
            } catch (e) {
                console.log(e)

            }



        } else {

        }
    };


    return (
        <Layout>
            <Text mt = "4">
                Unicef district  address : {address}

            </Text>
            <Text>
                User Address : 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
            </Text>
            <Divider my = "2"/>
            <Text>
                User current health record:
            </Text>
            <a href={"https://gateway.lighthouse.storage/ipfs/" + ipfshash} target="_blank">{ipfshash}</a>
            <Divider my = "2"/>
            <Text>Set a new health record information   </Text>
            <Input
                my={ '1'}
                value={value}
                onChange={handleChange}
                placeholder='Write here the health record'

            />

            <IDKitWidget
                app_id={process.env.NEXT_PUBLIC_WLD_APP_ID ?? ""} // obtained from the Developer Portal
                action={process.env.NEXT_PUBLIC_WLD_ACTION_NAME ?? ""} // this is your action name from the Developer Portal
                onSuccess={onSuccess} // callback when the modal is closed
                handleVerify={handleProof} // optional callback when the proof is received
                credential_types={[CredentialType.Orb, CredentialType.Phone]}
                autoClose
            >
                {({open}) => <Button onClick={open}>Verify with World ID</Button>}
            </IDKitWidget>

            <Text my = "1" mt="8" fontSize="xl">
                {worldIdData && JSON.stringify(worldIdData, null, 2)}
            </Text>

            <Divider my = "2"/
            >
            { allowTx &&    <Button onClick={() => write?.()}>Register health record</Button>}


            {isSuccess && (
                <div>
                    <Text>Successfully health record registered</Text>

                    <a href={`https://sepolia.scrollscan.com/tx/${data?.hash}`} target="_blank">Tx : {data?.hash}</a>

                </div>
            )}
            <Text>  {isLoading ? 'Loading...' : ''}</Text>
            {(isPrepareError || isError) && (
                <Text>Error: {(prepareError || error)?.message}</Text>
            )}
        </Layout>
    )
}

export default Home
