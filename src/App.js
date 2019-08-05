import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FetchProductsData from "./Components/FetchProductsData";
import Login from "./Components/LoginPage";
import SignUp from "./Components/SignUpPage";
import { BrowserRouter as Router } from "react-router-dom";
import * as Cookies from "js-cookie";

function PrivateRoute({ component: Component }) {
  if (Cookies.get("token")) return <Route path="/" component={Component} />;
  return <Redirect to="/login" />;
}

function AuthLoginRoute({ component: Component }) {
  if (Cookies.get("token")) return <Redirect to="/" />;
  return <Route path="/login" component={Component} />;
}

function AuthSignUpRoute({ component: Component }) {
  if (Cookies.get("token")) return <Redirect to="/" />;
  return <Route path="/sign-up" component={Component} />;
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <AuthLoginRoute path="/login" component={Login} />
          <AuthSignUpRoute path="/sign-up" component={SignUp} />
          <PrivateRoute exact path="/" component={FetchProductsData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
