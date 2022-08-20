import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Products from "./components/Products";

const getSearchedItems = (keyword, products) => {
  const search = keyword.toLowerCase();
  if (!keyword) {
    return products;
  }
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
  );
};

function App() {
  const [cart, setCart] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const searchedItems = getSearchedItems(keyword, products);

  return (
    <>
      <NavBar cart={cart} setCart={setCart} />
      <SearchBar setKeyword={setKeyword} />
      <Products searchedItems={searchedItems} cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
