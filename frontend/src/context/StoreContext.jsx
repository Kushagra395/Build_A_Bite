import  { createContext, useEffect } from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null);
import { useState } from "react";

export const StoreContextProvider = (prop) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemid) => {
        if (!cartItems[itemid]) {
            setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    }
        else{
            setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] +1}))

        }
}

const removeFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid]-1}))
}

 const gettotalCartAmount = () => {
     let totalAmount = 0;
     for (const item in cartItems) {
         if (cartItems[item] > 0) {
             let itemInfo = food_list.find((food) => food._id === item);
             totalAmount += cartItems[item] * itemInfo.price;
         }
     }
     return totalAmount;

     
 }
    const ContextValue ={
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       gettotalCartAmount


     
    }
    return(
        <StoreContext.Provider value={ContextValue}>
            {prop.children}
        </StoreContext.Provider>
        
    )

    
}
export default StoreContextProvider;