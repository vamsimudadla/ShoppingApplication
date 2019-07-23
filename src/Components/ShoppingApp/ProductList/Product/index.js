import React, { Component } from "react";
import "./styles.css";
class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product">
        {product.isFreeShipping ? (
          <span className="freeShippingText">Free Shipping</span>
        ) : (
          ""
        )}
        <img src={product.image} className="productImage" />
        <span className="productTitle">{product.title}</span>
        <span>{product.currencyFormat + product.price}</span>
        {product.installments !== 0 ? (
          <span className="installmentsTextColor">
            {"or" +
              " " +
              product.installments +
              " " +
              "x$" +
              (product.price / product.installments).toFixed(2)}
          </span>
        ) : (
          ""
        )}
        <button type="button" className="addToCartButtonStyle">
          Add to cart
        </button>
      </div>
    );
  }
}

export default Product;
