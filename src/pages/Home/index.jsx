import { Box } from "@chakra-ui/react"
import { DrinkList } from "../../components/DrinkList"
import { SearchDrink } from "../../components/SearchDrink"
import { DetailModal } from "../../components/DetailModal"

export const Home = () => {
  return (
    <Box>
      <SearchDrink/>
      <DrinkList/>
      <DetailModal />
    </Box>
    
  )
}
