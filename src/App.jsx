import React, { useState } from "react";
import "./App.css";
import Header from "./Components/LAYOUT/Header";
import Meals from "./Components/MEALS/Meals";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";
import OrderMessagesCarousel from "./Components/UI/OrderMessagesCarousel";

function App() {
  const [CartIsShown, setCartShown] = useState(false);
  const [OrderPlaced, setOrderPlaced] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };
  const HideCartHandler = () => {
    setCartShown(false);
  };
  const onOrderHandler = () => {
    setOrderPlaced(true);
    setCartShown(false);
  };

  return (
    <CartContextProvider>
      {CartIsShown && (
        <Cart onHideCart={HideCartHandler} onOrder={onOrderHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        {!OrderPlaced && <Meals />}
        {OrderPlaced && <OrderMessagesCarousel />}
      </main>
    </CartContextProvider>
  );
}

export default App;
