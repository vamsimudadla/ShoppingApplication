import React from "react";
import "./App.css";
import ShoppingApp from "./Components/ShoppingApp";
import products from "./constants/Products";
import ShoppingStore from "./Store/ShoppingStore";
const shoppingStore = new ShoppingStore(products);

function App() {
  return (
    <div className="App">
      <div>
        <ShoppingApp shoppingStore={shoppingStore} />
      </div>
    </div>
  );
}

export default App;
