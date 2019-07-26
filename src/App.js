import React from "react";
import FetchedData from "./Components/FetchData";
import ShoppingStore from "./Store/ShoppingStore";
const shoppingStore = new ShoppingStore();

function App() {
  return (
    <div>
      <FetchedData shoppingStore={shoppingStore} />
    </div>
  );
}

export default App;
