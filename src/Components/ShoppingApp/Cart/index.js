import React, { Component } from "react";
import CartIconWithNumberImage from "./CartIconwithNumberImage";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { CartItemsCard, CartImage, CartName } from "./styledComponent";
import CartIcon from "./CartIconwithNumberImage/CartIcon";
import SubTotalWithCheckOut from "./SubTotalWithCheckOut";
import CartItemsList from "./CartItemsList";
@observer
class Cart extends Component {
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
        <CartItemsCard isClicked={this.isClicked}>
          <CartImage>
            <CartIcon
              numberOfItemsInCart={shoppingStore.numberOfItemsInCart}
              isClicked={this.isClicked}
            />
            <CartName>Cart</CartName>
          </CartImage>
          <CartItemsList
            cartProducts={cartProducts}
            shoppingStore={shoppingStore}
          />
          {cartProducts.length > 0 ? (
            <SubTotalWithCheckOut shoppingStore={shoppingStore} />
          ) : (
            ""
          )}
        </CartItemsCard>
      </div>
    );
  }
}

export default Cart;
