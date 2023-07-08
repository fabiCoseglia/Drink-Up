import { Box } from '@chakra-ui/react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Header/>

      <Box>
        <Outlet/>
      </Box>
      
      <Footer/>
    </div>
  )
}
