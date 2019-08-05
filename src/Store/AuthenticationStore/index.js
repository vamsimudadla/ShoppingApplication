import { observable } from "mobx";
import * as Cookies from "js-cookie";
import { action } from "mobx";

class AuthenticationStore {
  @observable isSignedUp = false;
  @observable statusText;
  @observable loginStatus = 0;
  @observable signUpStatus = 0;

  @action.bound
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
    fetch("https://products-cart.getsandbox.com/sign_up/v1/", options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        } else return response.json();
      })
      .then(signUpObject => {
        this.signUpStatus = 0;
        this.isSignedUp = true;
      })
      .catch(error => {
        this.statusText = error.statusText;
        this.signUpStatus = 2;
      });
  }

  @action.bound
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
    fetch("https://products-cart.getsandbox.com/login/v1/", options)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else return response.json();
      })
      .then(loginObject => {
        this.loginStatus = 0;
        Cookies.set("token", loginObject.accessToken);
        history.push("/");
      })
      .catch(error => {
        this.statusText = error.statusText;
        this.loginStatus = 2;
      });
  }
}
export default AuthenticationStore;
