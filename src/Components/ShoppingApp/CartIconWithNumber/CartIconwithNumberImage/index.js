import React, { Component } from "react";
import "./styles.css";
import { observer } from "mobx-react";
import CartIcon from "./CartIcon";

@observer
class CartIconWithNumberImage extends Component {
  openCartItemsCard = () => {
    this.props.openCartItemsCard();
  };

  render() {
    const { shoppingStore, isClicked } = this.props;
    const { numberOfItemsInCart } = shoppingStore;
    return (
      <div
        className={isClicked ? "moveCartIcon" : "CartIconWithNumber"}
        onClick={this.openCartItemsCard}
      >
        {isClicked ? (
          <span className="crossIcon">X</span>
        ) : (
          <CartIcon numberOfItemsInCart={numberOfItemsInCart} />
        )}
      </div>
    );
  }
}

export default CartIconWithNumberImage;
