import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import { ModalProvider } from "./context/ModalProvider";
import { AppRoutes } from "./routes/AppRoutes"
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <ModalProvider>
        <CartProvider>
          <DrinksProvider>
            <CategoriesProvider>
              <AppRoutes />
            </CategoriesProvider>
          </DrinksProvider>
        </CartProvider>
      </ModalProvider>
    </ChakraProvider>
  );
}

export default App
