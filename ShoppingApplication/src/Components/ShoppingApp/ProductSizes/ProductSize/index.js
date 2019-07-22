import React, { Component } from "react";
import "./styles.css";
class ProductSize extends Component {
  productButtons = () => {
    return this.props.sizes.map(size => (
      <button
        type="button"
        value={size}
        className="buttonStyle"
        onClick={this.updateSelectedSizes}
        key={Math.random()}
      >
        {size}
      </button>
    ));
  };

  updateSelectedSizes = event => {
    this.props.updateSelectedSizes(event.target.value);
  };

  render() {
    return <div className="productSizes">{this.productButtons()}</div>;
  }
}

export default ProductSize;
