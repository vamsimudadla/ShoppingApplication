import React, { Component } from "react";
import "./styles.css";
class Product extends Component {
  addItemToCart = e => {
    const { product } = this.props;
    product.addItemToCart();
  };

  render() {
    const { product } = this.props;
    const {
      isFreeShipping,
      image,
      title,
      currencyFormat,
      price,
      installments
    } = product;
    return (
      <div className="product">
        {isFreeShipping ? (
          <span className="freeShippingText">Free Shipping</span>
        ) : (
          ""
        )}
        <img src={image} className="productImage" />
        <span className="productTitle">{title}</span>
        <span>{currencyFormat + price}</span>
        {installments !== 0 ? (
          <span className="installmentsTextColor">
            {"or" +
              " " +
              installments +
              " " +
              "x$" +
              (price / installments).toFixed(2)}
          </span>
        ) : (
          ""
        )}
        <button
          type="button"
          className="addToCartButtonStyle"
          onClick={this.addItemToCart}
        >
          Add to cart
        </button>
      </div>
    );
  }
}

export default Product;
