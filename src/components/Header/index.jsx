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

export const Header = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });

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
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon boxSize={8} />}
          variant=''
          size="sm"
          p='2'
        />
        <MenuList fontSize={'25px'} >
          <MenuItem  >Sign Up</MenuItem>
          <MenuItem  >Log in</MenuItem>
        </MenuList>
      </Menu>
    ) : (
      //config button de desktop y tablet.
      <ButtonGroup gap="2" >
        <Button colorScheme="yellow">Sign Up</Button>
        <Button colorScheme="yellow">Log in</Button>
      </ButtonGroup>
    )}
  </Flex>
  )
}
