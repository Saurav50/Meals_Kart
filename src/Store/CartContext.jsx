import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
});
export default CartContext;
