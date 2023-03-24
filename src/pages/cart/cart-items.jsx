import {React, useContext} from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/context-shop';

const CartItem = (props) => {
const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
const { id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
        <img src={productImage} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
            </div>
    </div>
  )
}

export default CartItem;
