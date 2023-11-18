import {ChakraProvider} from '@chakra-ui/react'
import type {AppProps} from 'next/app'
import {Web3Modal} from "@/context/Web3Modal";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Web3Modal>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Web3Modal>
    )
}
