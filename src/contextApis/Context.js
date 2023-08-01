import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducer";

export const CartPage = createContext();

faker.seed(99);

function Context({children}){
    
    const productsArray = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        image : faker.image.urlPicsumPhotos(),
        inStock : faker.helpers.arrayElement([0, 3, 5, 6, 7]), 
        fastDelivery : faker.datatype.boolean(),
        ratings : faker.helpers.arrayElement([1,2,3,4,5]),
    }));

    console.log(productsArray);

    const [state, dispatch]= useReducer(cartReducer, {
        products: productsArray,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock : false,
        byFastDelivery : false,
        byRatings : 0,
        searchQuery : "",
    })

    return <CartPage.Provider value={{state, dispatch, productState, productDispatch}}>
        {children}
    </CartPage.Provider>
}


export const CartState = () => {
    return useContext(CartPage)
}

export default Context;