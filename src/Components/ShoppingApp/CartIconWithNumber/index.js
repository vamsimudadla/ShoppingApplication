import React, { Component } from "react";
import CartIconWithNumberImage from "./CartIconwithNumberImage";
import { observer } from "mobx-react";
@observer
class CartIConWithNumber extends Component {
  render() {
    return (
      <div>
        <CartIconWithNumberImage shoppingStore={this.props.shoppingStore} />
      </div>
    );
  }
}

export default CartIConWithNumber;
