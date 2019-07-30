import React, { Component } from "react";
import {
  Wrapper,
  Container,
  AuthenticationLink,
  LoginLinkText,
  Wrapper1,
  WarningText
} from "../styledComponent";
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
  };

  handlePassword = e => {
    this.password = e.target.value;
    this.isDetailsFilled = true;
  };

  createAccount = () => {
    const userName = this.userName.trim();
    const password = this.password.trim();
    if (userName !== "" && password !== "")
      authenticationStore.createAccount(userName, password);
    else this.isDetailsFilled = false;
  };

  render() {
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
            <Button
              buttonType="Create Account"
              handleClick={this.createAccount}
            />
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
