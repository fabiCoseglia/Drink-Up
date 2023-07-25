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
  useToast,
} from '@chakra-ui/react';
import { useDrinks } from '../../hooks/useDrinks';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/useCart';

export const DrinkCard = ({ drink }) => {
  const { handleModalClick, handleDrinkIdClick } = useDrinks();
  const { addToCart } = useCart();
  const toast = useToast();

  const handleToast = () => {
    toast({
      description: `${drink.strDrink} has been added to cart`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAddToCart = (drink) => {
    addToCart(drink);
    handleToast();
  };

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
                handleToast(); // Agregar los paréntesis aquí para llamar la función
              }}
            >
              Recipe
            </Button>
            <Button variant='solid' colorScheme='yellow' onClick={() => handleAddToCart(drink)}>
              Buy
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
