import React, { Component } from "react";
import Product from "./Product";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  ProductsListHeader,
  DropDownBlock,
  DropDown,
  ProductsList,
  Button
} from "./styledComponent";
import { observer } from "mobx-react";
import * as Cookies from "js-cookie";

@observer
class ProductList extends Component {
  handleChange = e => {
    const { shoppingStore } = this.props;
    shoppingStore.changeOrderByPrice(e.target.value);
  };

  logOut = () => {
    Cookies.remove("token");
    this.props.history.push("/login");
  };

  render() {
    const { shoppingStore } = this.props;
    const { selectedSizeProducts } = shoppingStore;
    return (
      <Wrapper>
        <Button buttonType="logOut" onClick={this.logOut}>
          logOut
        </Button>
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

export default withRouter(ProductList);
