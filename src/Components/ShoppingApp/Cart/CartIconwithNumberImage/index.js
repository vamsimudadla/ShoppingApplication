import React, { Component } from "react";
import { Container, CrossIcon } from "./styledComponent";
import { observer } from "mobx-react";
import CartIcon from "./CartIcon";

@observer
class CartIconWithNumberImage extends Component {
  openCartItemsCard = () => {
    this.props.openCartItemsCard();
  };

  render() {
    const { shoppingStore, isClicked } = this.props;
    const { numberOfItemsInCart } = shoppingStore;
    return (
      <Container isClicked={isClicked} onClick={this.openCartItemsCard}>
        {isClicked ? (
          <CrossIcon>X</CrossIcon>
        ) : (
          <CartIcon numberOfItemsInCart={numberOfItemsInCart} />
        )}
      </Container>
    );
  }
}

export default CartIconWithNumberImage;
