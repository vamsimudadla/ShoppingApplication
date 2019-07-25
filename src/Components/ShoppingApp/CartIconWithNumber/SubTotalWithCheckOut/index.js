import React, { Component } from "react";
import "./styles.css";
class SubTotalWithCheckOut extends Component {
  render() {
    const { shoppingStore } = this.props;
    const { subTotal, subTotalInstallments } = shoppingStore;
    return (
      <div className="subTotalWithCheckOut">
        <div className="subTotal">
          <span>SUBTOTAL</span>
          <span className="total"> {"$ " + subTotal}</span>
        </div>
        <span className="subTotalInstallments">
          {subTotalInstallments
            ? "OR UP TO " +
              subTotalInstallments +
              " x $" +
              (subTotal / subTotalInstallments).toFixed(2)
            : ""}
        </span>
        <button type="button" className="checkOutButtonStyle">
          CHECKOUT
        </button>
      </div>
    );
  }
}

export default SubTotalWithCheckOut;
