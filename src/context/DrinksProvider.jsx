import { useState, createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { filterDrinksSerive, getRecipeService } from "../services/drink.service";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkIdClick = (id) => {
    setDrinkId(id);
  };

  const getRecipe = async () => {
    if (!drinkId) return;

    try {
      setLoading(true);
      const recipeData = await getRecipeService(drinkId);
      setRecipe(recipeData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getDrinks = async (data) => {
    try {
      setLoading(true);
      const drinksData = await filterDrinksSerive(data.category);
      if(drinksData){
        const drinksWithPrice = drinksData.map((drink)=>{
          return {
              ...drink,
              price: Math.ceil(Math.random() * 25),
              quantity: 0,
          }
      })
        setDrinks(drinksWithPrice);
      };

      if(!drinksData){
        setDrinks(null)
        return drinks
      };
    
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [drinkId]);

  const contextValues = {
    drinks,
    modal,
    recipe,
    loading,
    handleDrinkIdClick,
    handleModalClick,
    getDrinks,
  };

  return (
    <DrinksContext.Provider value={contextValues}>
      {children}
    </DrinksContext.Provider>
  );
};

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DrinksContext, DrinksProvider };
