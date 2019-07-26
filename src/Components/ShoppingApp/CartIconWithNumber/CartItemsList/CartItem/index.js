import React, { Component } from "react";
import {
  Container,
  CartImage,
  CartItemContainer,
  CartItemTitleWithCrossIcon,
  ProductTitle,
  CartCrossIcon,
  SizePriceContainer,
  ProductStyle,
  ProductPrice,
  ProductQuantity
} from "./styledComponent";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CartItem extends Component {
  @observable iSMouseHovered = false;

  @action.bound
  handleChange = () => {
    this.iSMouseHovered = !this.iSMouseHovered;
  };

  render() {
    const { product } = this.props;
    const {
      image,
      title,
      deleteCartItem,
      availableSizes,
      style,
      price,
      quantity
    } = product;
    return (
      <Container>
        <CartImage src={image} />
        <CartItemContainer>
          <CartItemTitleWithCrossIcon>
            <ProductTitle iSMouseHovered={this.iSMouseHovered}>
              {title}
            </ProductTitle>
            <CartCrossIcon
              onClick={deleteCartItem}
              onMouseOver={this.handleChange}
              onMouseLeave={this.handleChange}
            >
              X
            </CartCrossIcon>
          </CartItemTitleWithCrossIcon>
          <SizePriceContainer>
            <ProductStyle iSMouseHovered={this.iSMouseHovered}>
              {availableSizes[0] + " | " + style}
            </ProductStyle>
            <ProductPrice iSMouseHovered={this.iSMouseHovered}>
              {"$" + price}
            </ProductPrice>
          </SizePriceContainer>
          <ProductQuantity iSMouseHovered={this.iSMouseHovered}>
            {"Quantity: " + quantity}
          </ProductQuantity>
        </CartItemContainer>
      </Container>
    );
  }
}

export default CartItem;
