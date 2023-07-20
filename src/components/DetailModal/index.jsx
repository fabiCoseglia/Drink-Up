import React, { useEffect } from 'react';
import { useDrinks } from '../../hooks/useDrinks';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

export const DetailModal = () => {
  const { onClose } = useDisclosure();
  const { recipe, modal, handleModalClick } = useDrinks();

  const showIngredients = () => {
    let ingredients = [];
    for (let index = 1; index < 16; index++) {
      if (recipe[`strIngredient${index}`]) {
        ingredients.push(
          <li key={index}>
            {recipe[`strIngredient${index}`]} {recipe[`strMeasure${index}`]}
          </li>
        );
      }
    }
    return ingredients;

  };

  const handleCloseModal = () => {
    handleModalClick();
    onClose();
  };

  return (

      <>
        <Modal isOpen={modal} onClose={handleCloseModal} size='xs' >
          <ModalOverlay />
          <ModalContent p='0.5rem'>
            <ModalHeader>{recipe.strDrink}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ul>{showIngredients()}</ul>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='yellow' mr={3} onClick={handleCloseModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    
  );
};