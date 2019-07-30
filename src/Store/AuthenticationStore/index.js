import { observable } from "mobx";
import * as Cookies from "js-cookie";

class AuthenticationStore {
  @observable isSignedUp = false;

  createAccount(userName, password) {
    const newUser = {
      username: userName,
      password: password
    };
    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("https://user-shopping-cart.getsandbox.com/sign_up/v1/", options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        } else return response.json();
      })
      .then(signUpStatus => {
        this.isSignedUp = true;
      })
      .catch(error => console.log("UserName already exists"));
  }

  loginAccount(userName, password, history) {
    const user = {
      username: userName,
      password: password
    };
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("https://user-shopping-cart.getsandbox.com/login/v1/", options)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.status);
        } else return response.json();
      })
      .then(loginStatus => {
        Cookies.set("token", loginStatus.accessToken);
        history.push("/");
      })
      .catch(error => (this.authenticationStatus = "E"));
  }
}
export default AuthenticationStore;
