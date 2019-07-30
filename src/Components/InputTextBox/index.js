import React, { Component } from "react";
import { Input } from "../styledComponent";
export class InputTextBox extends Component {
  render() {
    const { type, placeHolder } = this.props;
    return (
      <div>
        <Input
          type={type}
          placeholder={placeHolder}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}

export default InputTextBox;
