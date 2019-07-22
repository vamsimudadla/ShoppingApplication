import Product from "../model/Product";
import { observable, computed, get } from "mobx";
import { action } from "mobx";
class ShoppingStore {
  products = [];
  @observable selectedSizes = [];

  constructor(productsConstant) {
    this.products = productsConstant.map(
      product => (product = new Product(product))
    );
  }

  @action
  updateSelectedSizes(size) {
    const index = this.selectedSizes.indexOf(size);
    if (index === -1) this.selectedSizes.push(size);
    else this.selectedSizes.splice(index, 1);
  }

  @computed get getSelectedSizeProducts() {
    let availableProducts = [];
    if (this.selectedSizes.length === 0) return this.products;
    else {
      const selectedSizeProducts = this.selectedSizes.map(size =>
        this.products.filter(product => this.getProductAvailable(product, size))
      );
      for (let i = 0; i < selectedSizeProducts.length; i++)
        availableProducts = availableProducts.concat(selectedSizeProducts[i]);
      return availableProducts;
    }
  }

  getProductAvailable(product, size) {
    const index = product.availableSizes.indexOf(size);
    if (index === -1) return false;
    return true;
  }
}

export default ShoppingStore;
