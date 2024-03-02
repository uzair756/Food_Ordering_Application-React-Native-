import { ADD_TO_CART, REMOVE_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./constants";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
  const existingItem = state.find(item => item.name === action.data);

  if (existingItem) {
    // If the product is already in the cart, update its quantity
    const newState = state.map((item, index) =>
      index === existingItem
        ? { ...item, p_quantity: item.p_quantity + 1 }
        : item
    );
    return newState;
  } else {
    // If the product is not in the cart, add it separately with quantity 1
    return [...state, { ...action.data, p_quantity: 1 }];
  }



  case REMOVE_TO_CART:
    const itemToRemove = state.find(item => item.name === action.data);
  
    if (itemToRemove) {
      if (itemToRemove.p_quantity > 1) {
        // If the quantity is greater than 1, decrement the quantity by 1
        return state.map(item =>
          item.name === action.data
            ? { ...item, p_quantity: item.p_quantity - 1 }
            : item
        );
      } else {
        // If the quantity is 1, remove the item from the cart
        return state.filter(item => item.name !== action.data);
      }
    } else {
      return state;
    }
  

    case INCREMENT_QUANTITY:
        const existingItemIndex = state.findIndex(item => item.name === action.data.name);

        if (existingItemIndex !== -1) {
          // If the product is already in the cart, update its quantity
          return state.map((item, index) =>
            index === existingItemIndex
              ? { ...item, p_quantity: item.p_quantity + 1 }
              : item
          );
        } else {
          // If the product is not in the cart, add it separately with quantity 1
          return [...state, { ...action.data, p_quantity: 1 }];
        }
    default:
      return state;
  }
};
