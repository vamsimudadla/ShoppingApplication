import React, { Component } from "react";
import CartIconWithNumberImage from "./CartIconwithNumberImage";
import { observer } from "mobx-react";
import { observable } from "mobx";
import "./styles.css";
import CartIcon from "./CartIconwithNumberImage/CartIcon";
import CartItem from "./CartItem";
@observer
class CartIConWithNumber extends Component {
  @observable isClicked = false;

  openCartItemsCard = () => {
    this.isClicked = !this.isClicked;
  };

  render() {
    const cartProducts = this.props.shoppingStore.getCartProducts;
    console.log(cartProducts);
    return (
      <div>
        <CartIconWithNumberImage
          shoppingStore={this.props.shoppingStore}
          openCartItemsCard={this.openCartItemsCard}
          closeCartItemsCard={this.closeCartItemsCard}
          isClicked={this.isClicked}
        />
        <div
          className={this.isClicked ? "cartItemsCard" : "cartItemsNotClicked"}
        >
          <div className="cartIconInCard">
            <CartIcon
              getNumberOfItemsInCart={
                this.props.shoppingStore.getNumberOfItemsInCart
              }
              isClicked={this.isClicked}
            />
            <span className="cartName">Cart</span>
          </div>
          <div>
            {cartProducts.map(cartProduct => (
              <CartItem product={cartProduct} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CartIConWithNumber;