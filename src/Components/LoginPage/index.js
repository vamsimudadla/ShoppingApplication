import React, { Component } from "react";
import InputTextBox from "../InputTextBox";
import Button from "../Button";
import { Wrapper } from "../styledComponent";
class Login extends Component {
  render() {
    return (
      <Wrapper>
        <InputTextBox type="text" placeHolder="UserName" />
        <InputTextBox type="password" placeHolder="password" />
        <Button buttonType="Login" />
      </Wrapper>
    );
  }
}

export default Login;
