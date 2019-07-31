import React, { Component } from "react";
import {
  Wrapper,
  Container,
  AuthenticationLink,
  LoginLinkText,
  Wrapper1,
  WarningText
} from "../styledComponent";
import LoadingButton from "../LoadingButton";
import InputTextBox from "../InputTextBox";
import Button from "../Button";
import { authenticationStore } from "../../instances";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class SignUp extends Component {
  @observable userName = "";
  @observable password = "";
  @observable isDetailsFilled = true;

  loginPage = () => {
    this.props.history.push("/login");
    authenticationStore.isSignedUp = false;
  };

  handleUserName = e => {
    this.userName = e.target.value;
    this.isDetailsFilled = true;
    authenticationStore.signUpStatus = 0;
  };

  handlePassword = e => {
    this.password = e.target.value;
    this.isDetailsFilled = true;
    authenticationStore.signUpStatus = 0;
  };

  createAccount = () => {
    authenticationStore.signUpStatus = 1;

    const userName = this.userName.trim();
    const password = this.password.trim();
    if (userName !== "" && password !== "")
      authenticationStore.createAccount(userName, password);
    else {
      this.isDetailsFilled = false;
      authenticationStore.signUpStatus = 0;
    }
  };

  render() {
    const { signUpStatus, statusText } = authenticationStore;
    return (
      <Container>
        {!authenticationStore.isSignedUp ? (
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
            {signUpStatus === 1 ? (
              <LoadingButton buttonType="Create Account" />
            ) : (
              <Button
                buttonType="Create Account"
                handleClick={this.createAccount}
              />
            )}
            <Wrapper1>
              <LoginLinkText>Already have an account,</LoginLinkText>
              <AuthenticationLink onClick={this.loginPage}>
                login
              </AuthenticationLink>
            </Wrapper1>

            {this.isDetailsFilled ? (
              ""
            ) : (
              <WarningText>
                Please fill the details to create account
              </WarningText>
            )}
            {signUpStatus === 2
              ? statusText || <WarningText>Username already exists</WarningText>
              : ""}
          </Wrapper>
        ) : (
          <Wrapper1>
            <LoginLinkText>Created account successfully,please</LoginLinkText>
            <AuthenticationLink onClick={this.loginPage}>
              login
            </AuthenticationLink>
          </Wrapper1>
        )}
      </Container>
    );
  }
}

export default SignUp;
