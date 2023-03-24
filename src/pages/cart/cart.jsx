import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/context-shop";
import CartItem from "./cart-items";
import "./cart.css";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cardItems">
      <h1>Your Cart Items</h1>
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product} />;
        }
      })}

      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => {navigate('/')
        }}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
