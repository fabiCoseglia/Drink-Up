import { Box } from '@chakra-ui/react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartModal } from '../components/CartModal';

export const Layout = () => {
  return (
    <Box>
      <Header />

      <Box h="auto" minH="70vh"  bg="#ececec" pt={5} pb={5}>
        <Outlet />
      </Box>
      <CartModal/>
      <Footer />
    </Box>
  );
}