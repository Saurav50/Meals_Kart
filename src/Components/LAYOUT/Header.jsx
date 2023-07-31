import React, { Fragment } from "react";
import mealImage from "../../Assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Meals Kart</h1>
        <HeaderButton onShowCart={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="A table full of food items" />
      </div>
    </Fragment>
  );
};
export default Header;
