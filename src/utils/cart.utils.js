export const getTotalPricesItem = (cartItems) =>{
    return  cartItems.map((item)=> item.quantity * item.price)
   };