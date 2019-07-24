import React, { Component } from "react";
import CartItem from "./CartItem";
class CartItemsList extends Component {
  render() {
    const cartProducts = this.props.cartProducts;
    return (
      <div
        className={
          cartProducts.length > 3
            ? "cartItemsBlock"
            : "cartItemsWithOutOverFlow"
        }
      >
        {cartProducts.length === 0 ? (
          <span className="cartEmptyMsg">add some items to Cart</span>
        ) : (
          cartProducts.map(cartProduct => <CartItem product={cartProduct} />)
        )}
      </div>
    );
  }
}

export default CartItemsList;
