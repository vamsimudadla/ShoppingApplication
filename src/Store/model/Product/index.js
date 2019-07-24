import { action } from "mobx";
import { observable } from "mobx";

class Product {
  availableSizes;
  currencyFormat;
  currencyId;
  description;
  id;
  installments;
  isFreeShipping;
  price;
  sku;
  style;
  title;
  image;
  @observable quantity;
  constructor(product) {
    this.availableSizes = product.availableSizes;
    this.currencyFormat = product.currencyFormat;
    this.currencyId = product.currencyId;
    this.description = product.description;
    this.id = product.id;
    this.installments = product.installments;
    this.isFreeShipping = product.isFreeShipping;
    this.price = product.price;
    this.sku = product.sku;
    this.style = product.style;
    this.title = product.title;
    this.image = product.image;
    this.quantity = 0;
  }

  @action.bound
  addItemToCart() {
    this.quantity = this.quantity + 1;
  }

  @action.bound
  deleteCartItem() {
    this.quantity = 0;
  }
}

export default Product;
