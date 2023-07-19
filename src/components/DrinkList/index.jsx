import React from 'react'
import { DrinkCard } from '../DrinkCard'
import { Center } from '@chakra-ui/react';
import { useDrinks } from '../../hooks/useDrinks';


export const DrinkList = () => {
  const {drinks} = useDrinks();

  if(drinks.length === 0){
    return (
      <Center className='p-5 m-5'>
        <h1 className='text-center'>No Results, please select a Drink</h1>
      </Center>
    )
  }
  return (    
    <DrinkCard/>  
  )
}
