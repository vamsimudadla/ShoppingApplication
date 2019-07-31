import React, { Component } from "react";
import { ProductList } from "./styledComponent";
import Product from "./Product";
class ProductsList extends Component {
  render() {
    const { selectedSizeProducts } = this.props;
    return (
      <ProductList>
        {selectedSizeProducts.length === 0 ? (
          <span>No Products Available</span>
        ) : (
          selectedSizeProducts.map(product => (
            <Product product={product} key={Math.random()} />
          ))
        )}
      </ProductList>
    );
  }
}

export default ProductsList;
