import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Spacer,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useModal } from '../../hooks/useModal';
import PropTypes from 'prop-types'
import { useCart } from '../../hooks/useCart';

export const CartModal = () => {
    const {removeOneFromCart,addToCart,cart,sendOrder,orderTotal} = useCart()
    const { isOpen,toggleModal} = useModal();
    console.log(cart);

  if(isOpen){
    return (
        <Modal isOpen={isOpen} onClose={toggleModal} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Shopping Cart</ModalHeader>
            <ModalCloseButton />

            {cart.cartItems.length === 0 && (
                  <>

                    <Heading as='h3' size='sm' textAlign='center' mt='1rem' mb='1rem'>No hay productos en el carrito</Heading>
                  </>
                )}

            <ModalBody>
              {cart.cartItems.map((item) => (
                <HStack key={item.idDrink} py={2} borderBottom='1px solid gray' spacing={4}>
                  <Image src={item.strDrinkThumb} alt={item.strDrink} boxSize={100} objectFit='cover' />
                  <VStack align='start' spacing={1} flexGrow={1}>
                    <Text fontSize='lg' fontWeight='bold'>
                      {item.name}
                    </Text>
                    <Text fontSize='md' color='gray.500'>
                      Price: ${item.price * item.quantity}
                    </Text>
                  </VStack>
                  <Spacer />
                  <HStack>
                    <Button size='sm' variant='ghost' onClick={() => removeOneFromCart(item.idDrink)}>
                      -
                    </Button>
                    <Input w='3rem' value={item.quantity} textAlign='center'/>
                    <Button size='sm' variant='ghost' onClick={() => addToCart(item)}>
                      +
                    </Button>
                  </HStack>
                </HStack>
              ))}
            </ModalBody>
            <ModalFooter>
              <Box fontSize='lg' fontWeight='bold'>
                Total: ${orderTotal}
              </Box>
              <Spacer />
              <Button colorScheme='yellow'>Checkout</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      );
  }
  
};
