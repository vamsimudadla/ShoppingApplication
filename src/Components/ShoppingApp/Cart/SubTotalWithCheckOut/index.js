import React, { Component } from "react";
import {
  CheckOutContainer,
  SubTotalWrapper,
  SubTotal,
  SubTotalInstallments,
  CheckOutButton
} from "./styledComponent";
class SubTotalWithCheckOut extends Component {
  render() {
    const { shoppingStore } = this.props;
    const { subTotal, subTotalInstallments } = shoppingStore;
    return (
      <CheckOutContainer>
        <SubTotalWrapper>
          <span>SUBTOTAL</span>
          <SubTotal> {"$ " + subTotal}</SubTotal>
        </SubTotalWrapper>
        <SubTotalInstallments>
          {subTotalInstallments
            ? "OR UP TO " +
              subTotalInstallments +
              " x $" +
              (subTotal / subTotalInstallments).toFixed(2)
            : ""}
        </SubTotalInstallments>
        <CheckOutButton>CHECKOUT</CheckOutButton>
      </CheckOutContainer>
    );
  }
}

export default SubTotalWithCheckOut;
