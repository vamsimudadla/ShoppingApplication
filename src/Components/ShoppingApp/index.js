import React, { Component } from "react";
import ProductSizes from "./ProductSizes";
import ProductsContainer from "./ProductsContainer";
import { Container } from "./styledComponent";
import { observer } from "mobx-react";
import Cart from "./Cart";

@observer
class ShoppingApp extends Component {
  render() {
    const { shoppingStore } = this.props;
    return (
      <Container>
        <ProductSizes shoppingStore={shoppingStore} />
        <ProductsContainer shoppingStore={shoppingStore} />
        <Cart shoppingStore={shoppingStore} />
      </Container>
    );
  }
}

export default ShoppingApp;
