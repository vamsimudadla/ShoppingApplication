import React, { Component } from "react";
import ProductSize from "./ProductSize";
import "./styles.css";
class ProductSizes extends Component {
  render() {
    const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
    return (
      <div className="buttonSizes">
        <span className="sizesText">Sizes:</span>
        <ProductSize sizes={sizes} />
      </div>
    );
  }
}

export default ProductSizes;
