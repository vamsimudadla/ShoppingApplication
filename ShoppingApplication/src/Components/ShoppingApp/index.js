import React, { Component } from "react";
import ProductSizes from "./ProductSizes";
import ProductList from "./ProductList";

import "./styles.css";
class ShoppingApp extends Component {
  render() {
    return (
      <div className="shoppingApp">
        <ProductSizes />
        <ProductList />
      </div>
    );
  }
}

export default ShoppingApp;
