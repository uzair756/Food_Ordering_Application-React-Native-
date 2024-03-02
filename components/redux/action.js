import { ADD_TO_CART,REMOVE_TO_CART,INCREMENT,DECREMENT, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./constants";

export function addToCart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}
export function removetocart(item){
    return{
        type:REMOVE_TO_CART,
        data:item
    }
}
export function incrementtocart(item){
    return{
        type:INCREMENT_QUANTITY,
        data:item
    }
}
export function decrementtocart(item){
    return{
        type:DECREMENT_QUANTITY,
        data:item
    }
}

// export function activeuser(item){
//     return{
//         type:USER,
//         data:item
//     }
// }