import React, { Component } from "react";
import { ErrorMessage } from "./styledComponent";
class ErrorMsg extends Component {
  render() {
    return (
      <ErrorMessage>
        <img src="assets/error-msg.png" />
      </ErrorMessage>
    );
  }
}

export default ErrorMsg;
