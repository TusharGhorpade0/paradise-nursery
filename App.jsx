// src/App.jsx

import React, { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("plants")}>Plants</button>
          <button onClick={() => setPage("cart")}>Cart</button>
        </div>
      </nav>

      {page === "home" && (
        <div className="hero">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setPage("plants")}>Get Started</button>
          <AboutUs />
        </div>
      )}

      {page === "plants" && <ProductList />}
      {page === "cart" && <CartItem setPage={setPage} />}
    </div>
  );
}

export default App;