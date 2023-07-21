import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from '../../assets/img/logo-drinks.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../hooks/useModal";

export const Header = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  const {toggleModal} = useModal();


  return (
    //config header
    <Flex
    minWidth="max-content"
    alignItems="center"
    gap="2"
    px='2'
    boxShadow='md'
    h='15vh'
    bg='darkslateblue'
  >
    <Box p="2">
      <Image src={logo} w='12rem'></Image>
    </Box>
    <Spacer />
    {isMobile ? (
      //config vista mobile
      <Menu>
        <FontAwesomeIcon icon={faCartShopping} fontSize='1.5rem' color='#ecc94b' onClick={toggleModal} />
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon boxSize={8} color='#ecc94b' />}
          variant=''
          size="sm"
          p='2'
        />
        <MenuList fontSize='1.5rem' >
          <MenuItem  >Sign Up</MenuItem>
          <MenuItem  >Log in</MenuItem>
        </MenuList>
      </Menu>
    ) : (
      //config button de desktop y tablet.
      <ButtonGroup gap="2" alignItems='center' >
        <FontAwesomeIcon icon={faCartShopping} fontSize='1.5rem' color='#ecc94b' cursor='pointer'  onClick={toggleModal} />
        <Button colorScheme="yellow">Sign Up</Button>
        <Button colorScheme="yellow">Log in</Button>
      </ButtonGroup>
    )}
  </Flex>
  )
}
