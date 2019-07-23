import React, { Component } from "react";
import "./styles.css";
class CartItem extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="cartItemDiv">
        <img src={product.image} className="cartImage" />
        <div className="cartTextsDiv">
          <span className="cartText cartProductTitle">{product.title}</span>
          <div className="sizeAndPrice">
            <span className="cartText">
              {product.availableSizes[0] + " | " + product.style}
            </span>
            <span className="cartText productPrice">{"$" + product.price}</span>
          </div>
          <span className="cartText">{"Quantity: " + product.quantity}</span>
        </div>
      </div>
    );
  }
}

export default CartItem;
