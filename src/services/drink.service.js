import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const getRecipeService = async (drinkId) =>{
    try {
        const URL = `${apiURL}lookup.php?i=${drinkId}`;
        const {data} = await axios.get(URL);
        return data.drinks[0];
    } catch (error) {
        console.error(error);
        throw new Error('Drink not found')
    }
};

const filterDrinksSerive = async (category)=>{
    try {
        const URL = `${apiURL}filter.php?c=${category}`;
        const {data} = await axios.get(URL);
        return data.drinks;

    } catch (error) {
        console.error(error);
        throw new Error('Drink not found')
    }
}

export {getRecipeService,filterDrinksSerive};