import Product from "../model/Product";
import { observable, computed, get } from "mobx";
import { action } from "mobx";
class ShoppingStore {
  products = [];
  @observable selectedSizes = [];
  @observable orderByPrice = "";

  constructor(productsConstant) {
    this.products = productsConstant.map(
      product => (product = new Product(product))
    );
  }

  @action.bound
  updateSelectedSizes(size) {
    const index = this.selectedSizes.indexOf(size);
    if (index === -1) this.selectedSizes.push(size);
    else this.selectedSizes.splice(index, 1);
  }

  @action.bound
  changeOrderByPrice(value) {
    this.orderByPrice = value;
  }

  @computed get getSelectedSizeProducts() {
    let availableProducts = [];
    if (this.selectedSizes.length === 0) {
      availableProducts = availableProducts.concat(this.products);
      return this.sortProductsOrderByPrice(availableProducts);
    } else {
      const selectedSizeProducts = this.selectedSizes.map(size =>
        this.products.filter(product => this.getProductAvailable(product, size))
      );
      for (let i = 0; i < selectedSizeProducts.length; i++)
        availableProducts = availableProducts.concat(selectedSizeProducts[i]);
      return this.sortProductsOrderByPrice(availableProducts);
    }
  }

  sortProductsOrderByPrice(availableProducts) {
    if (this.orderByPrice === "LH") {
      return availableProducts.sort(
        (product1, product2) => product1.price - product2.price
      );
    } else if (this.orderByPrice === "HL") {
      return availableProducts.sort(
        (product1, product2) => product2.price - product1.price
      );
    }
    return availableProducts;
  }

  getProductAvailable(product, size) {
    const index = product.availableSizes.indexOf(size);
    if (index === -1) return false;
    return true;
  }
}

export default ShoppingStore;
