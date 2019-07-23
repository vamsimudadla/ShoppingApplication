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
    return (
      <div
        className={this.props.isClicked ? "moveCartIcon" : "CartIconWithNumber"}
        onClick={this.openCartItemsCard}
      >
        {this.props.isClicked ? (
          <span className="crossIcon">X</span>
        ) : (
          <CartIcon
            getNumberOfItemsInCart={
              this.props.shoppingStore.getNumberOfItemsInCart
            }
          />
        )}
      </div>
    );
  }
}

export default CartIconWithNumberImage;
