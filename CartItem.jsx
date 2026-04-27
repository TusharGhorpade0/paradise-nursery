// src/components/CartItem.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ setPage }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(addItem(item))}>+</button>
          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, type: "decrease" }))
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>

          <hr />
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button onClick={() => setPage("plants")}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;