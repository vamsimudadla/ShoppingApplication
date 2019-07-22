import React, { Component } from "react";
import Product from "./Product";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class ProductList extends Component {
  render() {
    const shoppingStore = this.props.shoppingStore;
    return (
      <div className="productsList">
        {shoppingStore.getSelectedSizeProducts.length === 0 ? (
          <span>No Products Available</span>
        ) : (
          shoppingStore.getSelectedSizeProducts.map(product => (
            <Product product={product} />
          ))
        )}
      </div>
    );
  }
}

export default ProductList;
