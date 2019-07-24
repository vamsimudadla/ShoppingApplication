import React, { Component } from "react";
import "./styles.css";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CartItem extends Component {
  @observable iSMouseHovered = false;

  @action.bound
  handleChange = () => {
    this.iSMouseHovered = !this.iSMouseHovered;
  };

  render() {
    const { product } = this.props;
    const {
      image,
      title,
      deleteCartItem,
      availableSizes,
      style,
      price,
      quantity
    } = product;
    return (
      <div className="cartItemDiv">
        <img src={image} className="cartImage" />
        <div className="cartTextsDiv">
          <div className="titleAndCrossIcon">
            {this.iSMouseHovered ? (
              <strike className="cartText cartProductTitle">{title}</strike>
            ) : (
              <span className="cartText cartProductTitle">{title}</span>
            )}
            <span
              className="cartCrossIcon"
              onClick={deleteCartItem}
              onMouseOver={this.handleChange}
              onMouseLeave={this.handleChange}
            >
              X
            </span>
          </div>
          <div className="sizeAndPrice">
            {this.iSMouseHovered ? (
              <>
                {" "}
                <strike className="cartText">
                  {availableSizes[0] + " | " + style}
                </strike>
                <strike className="cartText productPrice">{"$" + price}</strike>{" "}
              </>
            ) : (
              <>
                <span className="cartText">
                  {availableSizes[0] + " | " + style}
                </span>
                <span className="cartText productPrice">{"$" + price}</span>
              </>
            )}
          </div>
          {this.iSMouseHovered ? (
            <strike className="cartText">{"Quantity: " + quantity}</strike>
          ) : (
            <span className="cartText">{"Quantity: " + quantity}</span>
          )}
        </div>
      </div>
    );
  }
}

export default CartItem;
