import { Flex, Stack, Text } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Flex
    h='15vh'
    minWidth="max-content"
    alignItems="center"
    justifyContent='center'
    py="2"
    px='2'
    boxShadow='dark-lg'
    bg='darkslateblue'
    >
      <Stack>
        <Text letterSpacing={2.5} as='b' color='whitesmoke'>Powered by: fabiCoseglia</Text>
      </Stack>
    </Flex>
  )
}
