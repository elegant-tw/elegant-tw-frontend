import AppHeader from '@/components/AppHeader'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
