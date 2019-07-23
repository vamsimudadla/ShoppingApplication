import React, { Component } from "react";
import "./styles.css";
export class CartIconWithNumberImage extends Component {
  render() {
    return (
      <div className="CartIconWithNumber">
        <img src="assets/cart-icon.png" className="cartIcon" />
        <div className="number">0</div>
      </div>
    );
  }
}

export default CartIconWithNumberImage;
