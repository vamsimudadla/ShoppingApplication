import Product from "../model/Product";
import { observable, computed, get } from "mobx";
import { action } from "mobx";
class ShoppingStore {
  @observable products = [];
  @observable selectedSizes = [];
  @observable orderByPrice = "";
  @observable fetchStatus = 0;

  @action.bound
  addFetchedProducts(products) {
    this.products = products.map(product => (product = new Product(product)));
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

  @computed get numberOfItemsInCart() {
    const filteredProducts = this.products.filter(
      product => product.quantity > 0
    );
    let sum = 0;
    for (let i = 0; i < filteredProducts.length; i++) {
      sum = sum + filteredProducts[i].quantity;
    }
    return sum;
  }

  @computed get selectedSizeProducts() {
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

  @computed get cartProducts() {
    return this.products.filter(product => product.quantity > 0);
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

  @computed get subTotal() {
    let sum = 0;
    const cartProducts = this.cartProducts;
    cartProducts.forEach(product => {
      sum = sum + product.price * product.quantity;
    });
    return sum;
  }

  @computed get subTotalInstallments() {
    let installments = 0;
    const cartProducts = this.cartProducts;
    cartProducts.forEach(product => {
      installments = installments + product.installments;
    });
    return installments;
  }

  @action.bound
  fetchData() {
    fetch("https://demo8129378.mockable.io/products/all/v1")
      .then(products => {
        if (!products.ok) {
          throw new Error(products.status);
        } else return products.json();
      })
      .then(products => {
        this.fetchStatus = 2;
        this.addFetchedProducts(products.products);
      })
      .catch(err => (this.fetchStatus = 1));
  }
}

export default ShoppingStore;
