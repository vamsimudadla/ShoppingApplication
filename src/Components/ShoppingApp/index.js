import React, { Component } from "react";
import ProductSizes from "./ProductSizes";
import ProductList from "./ProductList";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class ShoppingApp extends Component {
  render() {
    const shoppingStore = this.props.shoppingStore;
    return (
      <div className="shoppingApp">
        <ProductSizes shoppingStore={shoppingStore} />
        <ProductList shoppingStore={shoppingStore} />
      </div>
    );
  }
}

export default ShoppingApp;