import React, { Component } from "react";
import {
  Container,
  Button,
  ProductImage,
  ProductTitle,
  ProductInstallments,
  FreeShippingText
} from "./styledComponent";
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
      <Container>
        {isFreeShipping ? (
          <FreeShippingText>Free Shipping</FreeShippingText>
        ) : (
          ""
        )}
        <ProductImage src={image} />
        <ProductTitle>{title}</ProductTitle>
        <span>{currencyFormat + price}</span>
        {installments !== 0 ? (
          <ProductInstallments>
            {"or" +
              " " +
              installments +
              " " +
              "x$" +
              (price / installments).toFixed(2)}
          </ProductInstallments>
        ) : (
          ""
        )}
        <Button onClick={this.addItemToCart}>Add to cart</Button>
      </Container>
    );
  }
}

export default Product;
