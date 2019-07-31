import React, { Component } from "react";
import { ProductsListHeader, DropDownBlock, DropDown } from "./styledComponent";
class ProductsHeader extends Component {
  render() {
    const { selectedSizeProducts } = this.props;
    return (
      <ProductsListHeader>
        <span>{selectedSizeProducts.length + " " + "Product(s) found"}</span>
        <DropDownBlock>
          <span>Order by </span>
          <DropDown name="priceOrder" onChange={this.props.handleChange}>
            <option value="" disabled selected hidden>
              Select
            </option>
            <option value="LH">Lowest To Highest</option>
            <option value="HL">Highest To Lowest</option>
          </DropDown>
        </DropDownBlock>
      </ProductsListHeader>
    );
  }
}

export default ProductsHeader;
