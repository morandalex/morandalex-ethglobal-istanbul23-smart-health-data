import {Container, Flex, Link, SimpleGrid, Text} from '@chakra-ui/react'

import NextLink from 'next/link'
import React, {useState} from 'react'

import {Head, MetaProps} from './Head'
import styles from './web3modal.module.css'

interface LayoutProps {
    children: React.ReactNode
    customMeta?: MetaProps
}

export const Layout = ({children, customMeta}: LayoutProps): JSX.Element => {
    const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
        useState(false);
    const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

    const closeAll = () => {
        setIsNetworkSwitchHighlighted(false);
        setIsConnectHighlighted(false);
    };
    return (
        <>
            <Head customMeta={customMeta}/>
            <header>
                <Container maxWidth="container.lg">
                    <SimpleGrid
                        borderRadius="xl"
                        columns={[1, 1, 1, 2]}
                        alignItems="center"
                        justifyContent="space-between"
                        my="2"
                        bg="#04093b"
                    >
                        <Flex
                            py={[2, null, null, 0]}
                        >
                            <NextLink href="/" passHref legacyBehavior>
                                <Text
                                    pl="16"
                                    //py="2"
                                    fontSize="2xl"
                                    color="white"

                                    fontWeight='bold'
                                >
                                    Smart Health Data
                                </Text>
                            </NextLink>
                            {/*<NextLink href="/nft" passHref legacyBehavior>*/}
                            {/*  <Link px="4" py="1">*/}
                            {/*    Mint NFT*/}
                            {/*  </Link>*/}
                            {/*</NextLink>*/}
                            {/*<NextLink href="/token-gated" passHref legacyBehavior>*/}
                            {/*  <Link px="4" py="1">*/}
                            {/*    Token Gated*/}
                            {/*  </Link>*/}
                            {/*</NextLink>*/}
                        </Flex>
                        <Flex
                            order={[-1, null, null, 2]}
                            alignItems={'center'}
                            justifyContent={['flex-start', null, null, 'flex-end']}

                        >
                            {/*<ConnectWallet*/}
                            {/*    theme={"dark"}*/}
                            {/*    modalSize={"wide"}*/}
                            {/*/>*/}
                            {/*<ConnectButton />*/}
                            <div className={styles.header}>
                                <div className={styles.buttons}>
                                    <div
                                        onClick={closeAll}
                                        className={`${styles.highlight} ${
                                            isNetworkSwitchHighlighted
                                                ? styles.highlightSelected
                                                : ``
                                        }`}
                                    >
                                        <w3m-network-button/>
                                    </div>
                                    <div
                                        onClick={closeAll}
                                        className={`${styles.highlight} ${
                                            isConnectHighlighted
                                                ? styles.highlightSelected
                                                : ``
                                        }`}
                                    >
                                        <w3m-button/>
                                    </div>
                                </div>
                            </div>
                        </Flex>
                    </SimpleGrid>
                </Container>
            </header>
            <main>
                <Container
                    pl="20"
                    maxWidth="container.lg"
                >{children}</Container>


            </main>
            <footer>
                <Container
                    mt="8"
                    py="10"


                    maxWidth="container.lg"
                >

                    <Text>
                        Project work built for EthGlobal Istanbul hackhathon in 2023 for a better world
                    </Text>
                    <Text>
                       Check the github repo  <Link href ="https://github.com/morandalex/morandalex-ethglobal-istanbul23-smart-health-data/tree/main">here</Link>
                    </Text>
                    <Text mb="4">
                        Built by{' '}
                        <Link href="https://www.abeatbeyond.com"><i>Alessandro Morandi & Giulia Barozzi</i></Link>
                    </Text>
                </Container>
            </footer>
        </>
    )
}
