import React, { Component } from "react";
import { observer } from "mobx-react";
import { CartIconImage, Number } from "./styledComponent";
@observer
class CartIcon extends Component {
  render() {
    const { isClicked, numberOfItemsInCart } = this.props;
    return (
      <>
        <CartIconImage src="assets/cart-icon.png" />
        <Number isClicked={isClicked}>{numberOfItemsInCart}</Number>
      </>
    );
  }
}

export default CartIcon;
