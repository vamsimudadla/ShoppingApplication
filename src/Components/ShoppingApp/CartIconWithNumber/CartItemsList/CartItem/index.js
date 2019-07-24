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
    const product = this.props.product;
    return (
      <div className="cartItemDiv">
        <img src={product.image} className="cartImage" />
        <div className="cartTextsDiv">
          <div className="titleAndCrossIcon">
            {this.iSMouseHovered ? (
              <strike className="cartText cartProductTitle">
                {product.title}
              </strike>
            ) : (
              <span className="cartText cartProductTitle">{product.title}</span>
            )}
            <span
              className="cartCrossIcon"
              onClick={this.props.product.deleteCartItem}
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
                  {product.availableSizes[0] + " | " + product.style}
                </strike>
                <strike className="cartText productPrice">
                  {"$" + product.price}
                </strike>{" "}
              </>
            ) : (
              <>
                <span className="cartText">
                  {product.availableSizes[0] + " | " + product.style}
                </span>
                <span className="cartText productPrice">
                  {"$" + product.price}
                </span>
              </>
            )}
          </div>
          {this.iSMouseHovered ? (
            <strike className="cartText">
              {"Quantity: " + product.quantity}
            </strike>
          ) : (
            <span className="cartText">{"Quantity: " + product.quantity}</span>
          )}
        </div>
      </div>
    );
  }
}

export default CartItem;
