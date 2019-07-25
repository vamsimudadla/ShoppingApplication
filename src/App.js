import React from "react";
import "./App.css";
import FetchedData from "./Components/FetchData";
import ShoppingStore from "./Store/ShoppingStore";
const shoppingStore = new ShoppingStore();

function App() {
  return (
    <div className="App">
      <div>
        <FetchedData shoppingStore={shoppingStore} />
      </div>
    </div>
  );
}

export default App;
