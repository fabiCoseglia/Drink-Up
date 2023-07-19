import { Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useCategories } from '../../hooks/useCategories';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDrinks } from '../../hooks/useDrinks';

export const SearchDrink = () => {
  const { categories } = useCategories();
  const { getDrinks } = useDrinks();

  const initialValues = {
    category: '',
  };

  const validationSchema = Yup.object({
    category: Yup.string().required('Category is required'),
  });

  const handleCategoryChange = async (event, setFieldValue) => {
    const { value } = event.target;
    setFieldValue('category', value);
    await getDrinks({ category: value });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, handleChange, setFieldValue }) => (
        <Flex justifyContent='center' marginBottom='1rem'>
          <FormControl maxW='15rem'>
            <FormLabel color='darkslateblue'>Search</FormLabel>
            <Select
              placeholder='Select Drink'
              border='1px solid darkslateblue'
              value={values.category}
              onChange={(event) => {
                handleChange(event);
                handleCategoryChange(event, setFieldValue);
              }}
            >
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
      )}
    </Formik>
  );
};
