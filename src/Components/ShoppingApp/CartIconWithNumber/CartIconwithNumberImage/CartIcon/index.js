import React, { Component } from "react";
import { observer } from "mobx-react";
import "./styles.css";
@observer
class CartIcon extends Component {
  render() {
    return (
      <>
        <img
          src="assets/cart-icon.png"
          className={this.props.isClicked ? "cartIconImage" : "cartIcon"}
        />
        <div className={this.props.isClicked ? "numberInCart" : "number"}>
          {this.props.getNumberOfItemsInCart}
        </div>
      </>
    );
  }
}

export default CartIcon;
