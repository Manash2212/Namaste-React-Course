import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/Redux/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleAllDelete = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Your Cart</h1>
      <div className="product w-6/12 m-auto my-5">
        {cartItems.length === 0 ? (
          "Oops...! The Cart is Empty Please add something to the cart."
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
      <div className="clearCart mt-2">
        <button
          className="py-1 px-2 bg-red-300 rounded-md font-semibold border-none"
          onClick={() => handleAllDelete()}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
