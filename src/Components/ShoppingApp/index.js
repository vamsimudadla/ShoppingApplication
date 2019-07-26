import React, { Component } from "react";
import ProductSizes from "./ProductSizes";
import ProductList from "./ProductList";
import { Container } from "./styledComponent";
import { observer } from "mobx-react";
import CartIConWithNumber from "./CartIconWithNumber";

@observer
class ShoppingApp extends Component {
  render() {
    const { shoppingStore } = this.props;
    return (
      <Container>
        <ProductSizes shoppingStore={shoppingStore} />
        <ProductList shoppingStore={shoppingStore} />
        <CartIConWithNumber shoppingStore={shoppingStore} />
      </Container>
    );
  }
}

export default ShoppingApp;
