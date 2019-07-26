import React, { Component } from "react";
import { CartItemsContainer, CartEmptyMsg } from "./styledComponent";
import CartItem from "./CartItem";
class CartItemsList extends Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <CartItemsContainer length={cartProducts.length}>
        {cartProducts.length === 0 ? (
          <CartEmptyMsg>add some items to Cart</CartEmptyMsg>
        ) : (
          cartProducts.map(cartProduct => <CartItem product={cartProduct} />)
        )}
      </CartItemsContainer>
    );
  }
}

export default CartItemsList;
