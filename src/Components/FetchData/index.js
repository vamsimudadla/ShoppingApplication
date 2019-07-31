import React, { Component } from "react";
import ShoppingApp from "../ShoppingApp";
import ShoppingStore from "../../Store/ShoppingStore";
import LoadingMsg from "./LoadingMsg";
import ErrorMsg from "./ErrorMsg";
import { observer } from "mobx-react";
const shoppingStore = new ShoppingStore();
@observer
class FetchData extends Component {
  componentDidMount() {
    shoppingStore.fetchData();
  }

  render() {
    const { fetchStatus } = shoppingStore;
    switch (fetchStatus) {
      case 0:
        return <LoadingMsg />;
      case 1:
        return <ErrorMsg />;
      case 2:
        return <ShoppingApp shoppingStore={shoppingStore} />;
      default:
        return <LoadingMsg />;
    }
  }
}

export default FetchData;
