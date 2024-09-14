import React from 'react';
import { useCartStore } from '../store/cartStore'; 
import './Cart.css'; 

const Cart = () => {
  const { cartItems, removeFromCart } = useCartStore();

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>1 x <span className="cart-item-price">Rs. {item.totalPrice.toFixed(2)}</span></p>
                  </div>
                  <button 
                    className="remove-btn" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    &times;
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <h3>total</h3>
            <p className="subtotal-amount">Rs. {calculateSubtotal()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

