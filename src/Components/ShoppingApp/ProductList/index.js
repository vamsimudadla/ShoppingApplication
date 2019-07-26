import React, { Component } from "react";
import Product from "./Product";
import {
  Wrapper,
  ProductsListHeader,
  DropDownBlock,
  DropDown,
  ProductsList
} from "./styledComponent";
import { observer } from "mobx-react";

@observer
class ProductList extends Component {
  handleChange = e => {
    const { shoppingStore } = this.props;
    shoppingStore.changeOrderByPrice(e.target.value);
  };

  render() {
    const { shoppingStore } = this.props;
    const { selectedSizeProducts } = shoppingStore;
    return (
      <Wrapper>
        <ProductsListHeader>
          <span>{selectedSizeProducts.length + " " + "Product(s) found"}</span>
          <DropDownBlock>
            <span>Order by </span>
            <DropDown name="priceOrder" onChange={this.handleChange}>
              <option value="" disabled selected hidden>
                Select
              </option>
              <option value="LH">Lowest To Highest</option>
              <option value="HL">Highest To Lowest</option>
            </DropDown>
          </DropDownBlock>
        </ProductsListHeader>
        <ProductsList>
          {selectedSizeProducts.length === 0 ? (
            <span>No Products Available</span>
          ) : (
            selectedSizeProducts.map(product => <Product product={product} />)
          )}
        </ProductsList>
      </Wrapper>
    );
  }
}

export default ProductList;
