import React, { Component } from "react";
import ShoppingApp from "../ShoppingApp";
import LoadingMsg from "./LoadingMsg";
import ErrorMsg from "./ErrorMsg";
import { observer } from "mobx-react";

@observer
class FetchData extends Component {
  componentDidMount() {
    const { shoppingStore } = this.props;
    shoppingStore.fetchData();
  }

  render() {
    const { shoppingStore } = this.props;
    const { fetchStatus } = shoppingStore;
    switch (fetchStatus) {
      case 0:
        return <LoadingMsg />;
      case 1:
        return <ErrorMsg />;
      case 2:
        return <ShoppingApp shoppingStore={shoppingStore} />;
    }
  }
}

export default FetchData;
