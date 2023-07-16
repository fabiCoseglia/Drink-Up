import { CategoriesProvider } from "./context/CategoriesProvider"
import { AppRoutes } from "./routes/AppRoutes"
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <CategoriesProvider>
      <ChakraProvider>
        <AppRoutes/>
      </ChakraProvider>
    </CategoriesProvider>
  )
}

export default App
