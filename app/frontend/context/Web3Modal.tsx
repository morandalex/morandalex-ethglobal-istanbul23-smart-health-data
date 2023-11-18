//@ts-nocheck
"use client";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import {
    localhost,
    scrollSepolia,

} from 'viem/chains'
import {useEffect, useState} from "react";


// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_CONNECT_PROJECT_ID || ''

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [
    scrollSepolia,
    localhost

]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

export function Web3Modal({ children }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);
    //@ts-ignore
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}