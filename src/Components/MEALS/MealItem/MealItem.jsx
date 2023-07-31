import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/CartContext";
const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const FinalItemDataAdded = (quantity) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: quantity,
    };
    ctx.addItemToCart(item);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addAmount={FinalItemDataAdded} />
      </div>
    </li>
  );
};
export default MealItem;
