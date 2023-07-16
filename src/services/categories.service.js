import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

export const getCategoriesService = async () => {
    try {
        const URL = `${apiURL}list.php?c=list`;
        const {data} = await axios.get(URL);
        return data.drinks || ['Server Error'];
    } catch (error) {
        console.log(error);
        throw new Error('fetching Error');
    }
}
