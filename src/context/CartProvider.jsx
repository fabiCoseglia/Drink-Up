import {createContext,useEffect,useReducer, useState} from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../actions/cart.actions';
import { cartInitialState, cartReducer } from '../reducers/cart.reducer';
import { getTotalPricesItem } from '../utils/cart.utils';

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [state,dispatch] = useReducer(cartReducer,cartInitialState);
    const [orderTotal,setOrderTotal] = useState(0);

    useEffect(()=>{
        if(state.cartItems.length >0){
            let total = getTotalPricesItem(state.cartItems).reduce((a,b)=> a + b , 0);
            setOrderTotal(total);
        }else if( state.cartItems.length === 0){
            setOrderTotal(0);
        };

    },[state]);

    //Dispatchs

    const addToCart = (drink)=>{
        dispatch({type: actionTypes.ADD_TO_CART, payload: drink});
    }

    const removeOneFromCart = (idDrink)=>{
        dispatch({type: actionTypes.REMOVE_ONE_FROM_CART, payload: {idDrink}});
    }


    const sendOrder=()=>{
        alert(JSON.stringify(state));
    }

    const cartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        sendOrder,
        orderTotal,
    }

    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )


}

    CartProvider.propTypes ={
        children: PropTypes.node.isRequired
    }
    
export {CartProvider,CartContext}