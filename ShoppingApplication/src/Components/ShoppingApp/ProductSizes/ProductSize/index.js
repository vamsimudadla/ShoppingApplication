import React, { Component } from "react";
import "./styles.css";
import { observer } from "mobx-react";
@observer
class ProductSize extends Component {
  productButtons = () => {
    return this.props.sizes.map(size => (
      <button
        type="button"
        value={size}
        className={
          this.props.selectedSizes.indexOf(size) === -1
            ? "buttonStyle"
            : "activeButtonStyle"
        }
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
