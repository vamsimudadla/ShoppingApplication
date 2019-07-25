import React, { Component } from "react";
import CartIconWithNumberImage from "./CartIconwithNumberImage";
import { observer } from "mobx-react";
import { observable } from "mobx";
import "./styles.css";
import CartIcon from "./CartIconwithNumberImage/CartIcon";
import SubTotalWithCheckOut from "./SubTotalWithCheckOut";
import CartItemsList from "./CartItemsList";
@observer
class CartIConWithNumber extends Component {
  @observable isClicked = false;

  openCartItemsCard = () => {
    this.isClicked = !this.isClicked;
  };

  render() {
    const { shoppingStore } = this.props;
    const { cartProducts } = shoppingStore;
    return (
      <div>
        <CartIconWithNumberImage
          shoppingStore={shoppingStore}
          openCartItemsCard={this.openCartItemsCard}
          isClicked={this.isClicked}
        />
        <div
          className={this.isClicked ? "cartItemsCard" : "cartItemsNotClicked"}
        >
          <div className="cartIconInCard">
            <CartIcon
              numberOfItemsInCart={shoppingStore.numberOfItemsInCart}
              isClicked={this.isClicked}
            />
            <span className="cartName">Cart</span>
          </div>
          <CartItemsList cartProducts={cartProducts} />
          {cartProducts.length > 0 ? (
            <SubTotalWithCheckOut shoppingStore={shoppingStore} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default CartIConWithNumber;
