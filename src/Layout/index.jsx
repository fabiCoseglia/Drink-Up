import { Box } from '@chakra-ui/react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box>
      <Header />

      <Box h="auto" minH="70vh" maxW="1440" bg="#ececec" pt={5} pb={5}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
