import useSWR from "swr"
import { 
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

type Sentence = {
  id: number,
  sentence: string | undefined,
  category: number,
  cite: string | undefined,
  author: string | undefined
}

const fetcher = (url: string) => fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`).then((r) => r.json());

export default function Home() {
  const { data: sentence, error } = useSWR<Sentence>("/", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 10000
  })

  return (
    <>
      <AppHeader />
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={"/images/bg1.png"}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              「{sentence?.sentence}」
            </Text>
            <Text
              color={'white'}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
              —— {sentence?.author}〈{sentence?.cite}〉
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <AppFooter />
    </>
  )
}
