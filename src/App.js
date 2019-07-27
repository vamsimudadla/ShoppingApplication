import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FetchedData from "./Components/FetchData";
import Login from "./Components/LoginPage";
import SignUp from "./Components/SignUpPage";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/" component={FetchedData} />
      </Switch>
    </div>
  );
}

export default App;
