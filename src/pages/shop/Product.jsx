import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "../../context/context-shop";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="productInfo">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b> ${price}</b>
        </p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
        </button>
      </div>
    </div>
  );
};

export default Product;
