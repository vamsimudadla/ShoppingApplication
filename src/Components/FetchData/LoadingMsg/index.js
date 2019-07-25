import React, { Component } from "react";
import "./styles.css";
class LoadingMsg extends Component {
  render() {
    return (
      <div className="loadingMsg">
        <div className="loader" />
        <div className="loadText">Loading...</div>
      </div>
    );
  }
}

export default LoadingMsg;
