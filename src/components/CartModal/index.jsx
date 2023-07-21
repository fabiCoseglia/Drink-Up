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
} from '@chakra-ui/react';
import { useModal } from '../../hooks/useModal';

export const CartModal = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 25.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100',
    },
    // Add more items as needed
  ]);
    const { isOpen,toggleModal} = useModal();

  if(isOpen){
    return (
        <Modal isOpen={isOpen} onClose={toggleModal} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Shopping Cart</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {cartItems.map((item) => (
                <HStack key={item.id} py={2} borderBottom='1px solid gray' spacing={4}>
                  <Image src={item.image} alt={item.name} boxSize={100} objectFit='cover' />
                  <VStack align='start' spacing={1} flexGrow={1}>
                    <Text fontSize='lg' fontWeight='bold'>
                      {item.name}
                    </Text>
                    <Text fontSize='md' color='gray.500'>
                      Price: ${item.price.toFixed(2)}
                    </Text>
                  </VStack>
                  <Spacer />
                  <HStack>
                    <Button size='sm' variant='ghost' onClick={() => handleDecrement(item.id)}>
                      -
                    </Button>
                    <Input w='3rem' value={5} textAlign='center'/>
                    <Button size='sm' variant='ghost' onClick={() => handleIncrement(item.id)}>
                      +
                    </Button>
                  </HStack>
                </HStack>
              ))}
            </ModalBody>
            <ModalFooter>
              <Box fontSize='lg' fontWeight='bold'>
                Total: $
              </Box>
              <Spacer />
              <Button colorScheme='yellow'>Checkout</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      );
  }
  
};
