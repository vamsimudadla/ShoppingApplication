import React, { Component } from "react";
import InputTextBox from "../InputTextBox";
import Button from "../Button";
import { authenticationStore } from "../../instances";
import LoadingButton from "../LoadingButton";
import {
  Wrapper,
  Container,
  Wrapper1,
  LoginLinkText,
  AuthenticationLink,
  WarningText
} from "../styledComponent";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
class Login extends Component {
  @observable userName = "";
  @observable password = "";
  @observable isDetailsFilled = true;

  signUpPage = () => {
    this.props.history.push("/sign-up");
  };

  handleUserName = e => {
    this.userName = e.target.value;
    this.isDetailsFilled = true;
    authenticationStore.loginStatus = 0;
  };

  handlePassword = e => {
    this.password = e.target.value;
    this.isDetailsFilled = true;
    authenticationStore.loginStatus = 0;
  };

  loginAccount = () => {
    authenticationStore.loginStatus = 1;
    const userName = this.userName.trim();
    const password = this.password.trim();
    if (userName !== "" && password !== "") {
      authenticationStore.loginAccount(
        this.userName,
        this.password,
        this.props.history
      );
    } else {
      this.isDetailsFilled = false;
      authenticationStore.loginStatus = 0;
    }
  };

  render() {
    const { loginStatus, statusText } = authenticationStore;
    return (
      <Container>
        <Wrapper>
          <InputTextBox
            type="text"
            placeHolder="UserName"
            handleChange={this.handleUserName}
          />
          <InputTextBox
            type="password"
            placeHolder="password"
            handleChange={this.handlePassword}
          />
          {loginStatus === 1 ? (
            <LoadingButton buttonType="Login" />
          ) : (
            <Button buttonType="Login" handleClick={this.loginAccount} />
          )}
          <Wrapper1>
            <LoginLinkText>Don't have an account,</LoginLinkText>
            <AuthenticationLink onClick={this.signUpPage}>
              Sign Up
            </AuthenticationLink>
          </Wrapper1>

          {this.isDetailsFilled ? (
            ""
          ) : (
            <WarningText>Please fill the details to login</WarningText>
          )}

          {loginStatus === 2
            ? statusText || <WarningText>Invalid Credentials</WarningText>
            : ""}
        </Wrapper>
      </Container>
    );
  }
}

export default Login;
