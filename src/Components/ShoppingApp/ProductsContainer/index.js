import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Wrapper, Button } from "./styledComponent";
import ProductsList from "./ProductsList";
import ProductsHeader from "./ProductsHeader";
import { observer } from "mobx-react";
import * as Cookies from "js-cookie";

@observer
class ProductsContainer extends Component {
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
          LogOut
        </Button>
        <ProductsHeader
          selectedSizeProducts={selectedSizeProducts}
          handleChange={this.handleChange}
        />
        <ProductsList selectedSizeProducts={selectedSizeProducts} />
      </Wrapper>
    );
  }
}

export default withRouter(ProductsContainer);
