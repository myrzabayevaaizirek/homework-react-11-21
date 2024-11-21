import React from "react";
import ProductList from "./components/ProductList";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>Список товаров</h1>
      <ProductList />
    </div>
  );
};

export default App;
