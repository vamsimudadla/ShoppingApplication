import React, { Component } from "react";
import ProductSize from "./ProductSize";
import "./styles.css";
class ProductSizes extends Component {
  updateSelectedSizes = size => {
    this.props.shoppingStore.updateSelectedSizes(size);
  };
  render() {
    const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
    return (
      <div className="buttonSizes">
        <span className="sizesText">Sizes:</span>
        <ProductSize
          sizes={sizes}
          updateSelectedSizes={this.updateSelectedSizes}
        />
      </div>
    );
  }
}

export default ProductSizes;
