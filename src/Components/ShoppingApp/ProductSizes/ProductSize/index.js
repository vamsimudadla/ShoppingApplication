import React, { Component } from "react";
import "./styles.css";
import { observer } from "mobx-react";
@observer
class ProductSize extends Component {
  productButtons = () => {
    const { sizes, selectedSizes } = this.props;

    return sizes.map(size => (
      <button
        type="button"
        value={size}
        className={
          selectedSizes.indexOf(size) === -1
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
    const { updateSelectedSizes } = this.props;
    updateSelectedSizes(event.target.value);
  };

  render() {
    return <div className="productSizes">{this.productButtons()}</div>;
  }
}

export default ProductSize;
