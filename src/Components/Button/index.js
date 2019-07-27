import React, { Component } from "react";
import { AuthenticationButton } from "../styledComponent";
class Button extends Component {
  render() {
    const { buttonType } = this.props;
    return <AuthenticationButton>{buttonType}</AuthenticationButton>;
  }
}

export default Button;
