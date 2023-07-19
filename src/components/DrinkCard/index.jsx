import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const DrinkCard = ({drink}) => {

  return (
        <SimpleGrid spacing={4} columns={[1, null, 4]} justifyItems="center">
        <Card maxW='lg' w='15rem'>
        <CardBody>
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text color='green.600' fontSize='2xl' textAlign='center'>
                $450
            </Text>
            </Stack>
        </CardBody>
        <Divider w='80%' m='0 auto' color='gray.500' />
        <CardFooter>
            <ButtonGroup spacing='2' m='0 auto'>
            <Button variant='solid' colorScheme='yellow'>
                Buy now
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
        </SimpleGrid> 

    
  )
}
