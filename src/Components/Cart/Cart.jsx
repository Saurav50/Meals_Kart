import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasItemsInCart = ctx.items.length > 0;

  const addItemHandler = (item) => {
    ctx.addItemToCart({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    ctx.removeItemFromCart(id);
  };

  const CartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {CartItems}
      <div>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{`$${ctx.totalAmount}`}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItemsInCart && (
            <button className={styles.button} onClick={props.onOrder}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
