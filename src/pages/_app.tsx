import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>言雅 | Elegant TW</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tico88612" />
        <meta name="twitter:creator" content="@tico88612" />
        <meta property="og:url" content="https://elegant.tw" />
        <meta property="description" content="「言之隨機，雅之名篇。」簡稱《言雅》，主要提供給繁體中文的隨機一句話服務，網路時代裡會有幾句話觸動你的心，可以是動漫的台詞，也可以是文學中不經意的一句話，歡迎您來跟我們分享您喜歡的句子。" />
        <meta property="og:title" content="言雅 | Elegant TW" />
        <meta property="og:description" content="「言之隨機，雅之名篇。」簡稱《言雅》，主要提供給繁體中文的隨機一句話服務，網路時代裡會有幾句話觸動你的心，可以是動漫的台詞，也可以是文學中不經意的一句話，歡迎您來跟我們分享您喜歡的句子。" />
      </Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
