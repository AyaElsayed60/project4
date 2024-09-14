import React from 'react';
import { useCartStore } from '../store/cartStore'; 
import './CartPage.css';
import Banner from '../assets/images/banner.png';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCartStore();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.totalPrice * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page-container">
      {/* Hero Section */}
      <section className="hero">
        <img src={Banner} className="hero-image" alt="Banner" />
        <div className="hero-text">
          <h1>Cart</h1>
          <p>Home &gt; Cart</p>
        </div>
      </section>

      <div className="cart-content">
        <div className="cart-table">
          <table>
            <thead>
              <tr className='pro'>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td className="cart-product">
                    <img src={item.image} alt={item.title} className="cart-product-image" />
                    <span>{item.title}</span>
                  </td>
                  <td>${item.totalPrice.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.totalPrice * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-summary">
          <h3>Cart Totals</h3>
          <div className="cart-totals">
            <div className="totals-item total">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="checkout-btn">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

