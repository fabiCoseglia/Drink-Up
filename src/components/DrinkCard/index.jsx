import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const DrinkCard = ({ drink }) => {

  return (
      <Center>
      <Card maxW='lg' w='15rem'>
        <CardBody>
          <Image
            src={drink.strDrinkThumb}
            alt={`Image of ${drink.strDrink}`}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{drink.strDrink}</Heading>
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
            <Button variant='solid' colorScheme='yellow'>
              More info
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      </Center>
  );
};
