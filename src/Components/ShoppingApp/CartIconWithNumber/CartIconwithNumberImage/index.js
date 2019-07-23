import React, { Component } from "react";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class CartIconWithNumberImage extends Component {
  getNumberOfItemsInCart = () => {
    const filteredProducts = this.props.shoppingStore.products.filter(
      product => product.quantity > 0
    );
    let sum = 0;
    for (let i = 0; i < filteredProducts.length; i++) {
      sum = sum + filteredProducts[i].quantity;
    }
    return sum;
  };
  render() {
    return (
      <div className="CartIconWithNumber">
        <img src="assets/cart-icon.png" className="cartIcon" />
        <div className="number">{this.getNumberOfItemsInCart()}</div>
      </div>
    );
  }
}

export default CartIconWithNumberImage;
