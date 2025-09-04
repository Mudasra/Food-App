import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import SwiggyRecipeInfo from "./swiggyRecipeInfo";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-[9%] p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty. Add items to Cart.</p>
      ) : (
        <>
          <div className="flex justify-end mb-6">
            <button
              onClick={handleClearCart}
              className="p-2 cursor-pointer text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>

          <SwiggyRecipeInfo
            menuItems={cartItems}
            showAddButton={false}
            showRemoveButton={true}
          />
        </>
      )}
    </div>
  );
};

export default Cart;
