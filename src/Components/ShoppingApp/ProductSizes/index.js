import React, { Component } from "react";
import ProductSize from "./ProductSize";
import { Container, SizeText } from "./styledComponent";
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
      <Container>
        <SizeText>Sizes:</SizeText>
        <ProductSize
          sizes={sizes}
          updateSelectedSizes={this.updateSelectedSizes}
          selectedSizes={shoppingStore.selectedSizes}
        />
      </Container>
    );
  }
}

export default ProductSizes;
