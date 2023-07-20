import { DrinkCard } from '../DrinkCard'
import { useDrinks } from '../../hooks/useDrinks';
import { Center, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';

export const DrinkList = () => {
  const { drinks, loading } = useDrinks();
  if(drinks){
    if (drinks.length === 0) {
      return (
        <Center className='p-5 m-5'>
          <Heading  size='md'  className='text-center'>Please select a Drink to start</Heading>
        </Center>
      );
    }
  }else if(!drinks){
    return (
      <Center className='p-5 m-5'>
        <Heading size='md' className='text-center'>Please select a Drink</Heading>
      </Center>
    );
  }

  return (
    <>
    {
      loading && (
        <Center height='200px'>
          <Spinner size='xl' color='darkSlateBlue' />
        </Center>
      ) 
    }

<SimpleGrid columns={[1, null, 4]} spacing='40px' >
      {drinks.map((drink) => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}

  </SimpleGrid>

    </>
  );
}
