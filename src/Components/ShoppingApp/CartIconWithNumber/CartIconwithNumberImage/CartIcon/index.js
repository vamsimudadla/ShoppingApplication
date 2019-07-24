import React, { Component } from "react";
import { observer } from "mobx-react";
import "./styles.css";
@observer
class CartIcon extends Component {
  render() {
    const { isClicked, numberOfItemsInCart } = this.props;
    return (
      <>
        <img
          src="assets/cart-icon.png"
          className={isClicked ? "cartIconImage" : "cartIcon"}
        />
        <div className={isClicked ? "numberInCart" : "number"}>
          {numberOfItemsInCart}
        </div>
      </>
    );
  }
}

export default CartIcon;
