import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import { AppRoutes } from "./routes/AppRoutes"
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <AppRoutes />
        </DrinksProvider>
      </CategoriesProvider>
    </ChakraProvider>
  );
}

export default App
