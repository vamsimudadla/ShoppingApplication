import React, { Component } from "react";
import Product from "./Product";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class ProductList extends Component {
  handleChange = e => {
    this.props.shoppingStore.changeOrderByPrice(e.target.value);
  };

  render() {
    const shoppingStore = this.props.shoppingStore;
    return (
      <div className="HeaderWithProductList">
        <div className="shoppingStoreHeader">
          <span>
            {shoppingStore.getSelectedSizeProducts.length +
              " " +
              "Product(s) found"}
          </span>
          <div className="orderByDropDown">
            <span>Order by </span>
            <select
              name="priceOrder"
              className="dropDown"
              onChange={this.handleChange}
            >
              <option value="" disabled selected hidden>
                Select
              </option>
              <option value="LH">Lowest To Highest</option>
              <option value="HL">Highest To Lowest</option>
            </select>
          </div>
        </div>
        <div className="productsList">
          {shoppingStore.getSelectedSizeProducts.length === 0 ? (
            <span>No Products Available</span>
          ) : (
            shoppingStore.getSelectedSizeProducts.map(product => (
              <Product product={product} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default ProductList;
