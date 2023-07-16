import { Box } from "@chakra-ui/react"
import { DrinkList } from "../../components/DrinkList"
import { SearchDrink } from "../../components/SearchDrink"

export const Home = () => {
  return (
    <Box>
      <SearchDrink/>
      <DrinkList/>
    </Box>
    
  )
}
