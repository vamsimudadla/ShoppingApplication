import React, { Component } from "react";
import ProductSize from "./ProductSize";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class ProductSizes extends Component {
  updateSelectedSizes = size => {
    const { shoppingStore } = this.props;
    shoppingStore.updateSelectedSizes(size);
  };

  render() {
    const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
    const { shoppingStore } = this.props;
    return (
      <div className="buttonSizes">
        <span className="sizesText">Sizes:</span>
        <ProductSize
          sizes={sizes}
          updateSelectedSizes={this.updateSelectedSizes}
          selectedSizes={shoppingStore.selectedSizes}
        />
      </div>
    );
  }
}

export default ProductSizes;
