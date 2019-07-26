import React, { Component } from "react";
import { Button, Wrapper } from "./styledComponent";
import { observer } from "mobx-react";
@observer
class ProductSize extends Component {
  productButtons = () => {
    const { sizes, selectedSizes } = this.props;

    return sizes.map(size => (
      <Button
        value={size}
        onClick={this.updateSelectedSizes}
        key={Math.random()}
        isActive={selectedSizes.indexOf(size) !== -1 ? true : false}
      >
        {size}
      </Button>
    ));
  };

  updateSelectedSizes = event => {
    const { updateSelectedSizes } = this.props;
    updateSelectedSizes(event.target.value);
  };

  render() {
    return <Wrapper>{this.productButtons()}</Wrapper>;
  }
}

export default ProductSize;
