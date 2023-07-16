import {createContext, useEffect, useState} from 'react'
import { getCategoriesService } from '../services/categories.service';
import PropTypes from 'prop-types';

const CategoriesContext = createContext();

 const CategoriesProvider = ({children}) => {
    const [categories,setCategories] = useState([]);

    const getCategories = async () =>{
        try {
            const categoriesData = await getCategoriesService();
            setCategories(categoriesData);
        } catch (error) {
            console.log(error);
            throw new error('Categories Not Founds')
        }
    };

    useEffect(()=>{
        getCategories();
    },[]);

  return (
    <CategoriesContext.Provider value={{categories}}>
        { children }
    </CategoriesContext.Provider>
  )
};

//Validaciones de proptypes
CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

//exports
export { CategoriesProvider, CategoriesContext};
