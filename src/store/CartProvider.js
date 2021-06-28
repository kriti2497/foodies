import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmt: 0
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedTotalAmt = state.totalAmt + action.item.price * action.item.amount;
    const updatedItems = state.items.concat(action.item); //similar to slice()
    
    return {
      items: updatedItems,
      totalAmt: updatedTotalAmt
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item})
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmt: cartState.totalAmt,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
