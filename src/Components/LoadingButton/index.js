import React, { Component } from "react";
import Button from "../Button";
import { Loader } from "./styledComponent";
class LoadingButton extends Component {
  render() {
    return (
      <>
        <Loader /> <Button buttonType={this.props.buttonType} />
      </>
    );
  }
}

export default LoadingButton;
