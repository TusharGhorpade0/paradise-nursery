// src/components/ProductList.jsx

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      image: "https://via.placeholder.com/150",
      category: "Medicinal",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 12,
      image: "https://via.placeholder.com/150",
      category: "Indoor",
    },
    {
      id: 3,
      name: "Money Plant",
      price: 15,
      image: "https://via.placeholder.com/150",
      category: "Indoor",
    },
    {
      id: 4,
      name: "Rose",
      price: 20,
      image: "https://via.placeholder.com/150",
      category: "Flower",
    },
    {
      id: 5,
      name: "Tulsi",
      price: 8,
      image: "https://via.placeholder.com/150",
      category: "Medicinal",
    },
    {
      id: 6,
      name: "Sunflower",
      price: 18,
      image: "https://via.placeholder.com/150",
      category: "Flower",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Plants</h2>
      <div className="card-container">
        {plants.map((plant) => (
          <div className="card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addItem(plant))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;