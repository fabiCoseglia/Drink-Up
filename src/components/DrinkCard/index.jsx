import React from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useDrinks } from '../../hooks/useDrinks';
import PropTypes from 'prop-types';

export const DrinkCard = ({ drink }) => {
  const { handleModalClick, handleDrinkIdClick } = useDrinks();
  return (
    <Center>
      <Card maxW='lg' w='15rem'>
        <CardBody>
          <Image src={drink.strDrinkThumb} alt={`Image of ${drink.strDrink}`} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{drink.strDrink}</Heading>
            <Text color='green.600' fontSize='2xl' textAlign='center'>
            $ {drink.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider w='80%' m='0 auto' color='gray.500' />
        <CardFooter>
          <ButtonGroup spacing='2' m='0 auto'>
            <Button
              variant='solid'
              colorScheme='yellow'
              onClick={() => {
                handleDrinkIdClick(drink.idDrink); 
                handleModalClick(); 
              }}
            >
              Recipe
            </Button>
            <Button variant='solid' colorScheme='yellow'>
              Buy Now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Center>
  );
};

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    idDrink: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
