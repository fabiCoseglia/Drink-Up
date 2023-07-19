import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import { AppRoutes } from "./routes/AppRoutes"
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <DrinksProvider>
        <CategoriesProvider>
          <AppRoutes />
        </CategoriesProvider>
      </DrinksProvider>
    </ChakraProvider>
  );
}

export default App
