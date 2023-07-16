import {Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useCategories } from '../../hooks/useCategories';
import * as Yup from 'yup';
import { Formik } from 'formik';

export const SearchDrink = () => {

  const { categories } = useCategories();

  //Config form to Yup validations
  const initialValues = {
    category: '',
  };

  const validationSchema = Yup.object({
    category: Yup.string().required('Category is required'),
  });

  return (
    <Formik 
    initialValues = {initialValues}
    validationSchema = {validationSchema}
    >
      <Flex justifyContent='center' marginBottom='1rem'>
        <FormControl maxW='15rem'>
            <FormLabel color='darkslateblue'>Search</FormLabel>
            <Select placeholder='Select Drink'  border='1px solid darkslateblue'>
                {
                  categories.map(category =>(
                    <option
                    key={category.strCategory}
                    value={category.strCategory}
                    >
                      {category.strCategory}
                    </option>
                  ))
                }

                
            </Select>
        </FormControl>
      </Flex>
</Formik>
  )
}
