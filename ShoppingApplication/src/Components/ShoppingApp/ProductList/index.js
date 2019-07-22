import React, { Component } from "react";
import products from "../../../constants/Products";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return <Product product={products[0]} />;
  }
}

export default ProductList;
