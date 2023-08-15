import React, { useState } from "react";
import "./App.css";
import Header from "./Components/LAYOUT/Header";
import Meals from "./Components/MEALS/Meals";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";

function App() {
  const [CartIsShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };
  const HideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartContextProvider>
      {CartIsShown && <Cart onHideCart={HideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
