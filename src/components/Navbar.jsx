import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/images/cart.png';
import { useCartStore } from '../store/cartStore';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems, removeFromCart } = useCartStore();

  const toggleCart = () => {
    setShowCart(prevState => !prevState);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
  };

  return (
    <nav className="navbar">
      <div className="logo">Furniro</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="cart-icon" onClick={toggleCart}>
        <img src={CartIcon} alt="Cart" />
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </div>
      {showCart && (
        <div className="cart-dropdown">
          <h3>Shopping Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{item.title}</p>
                    <p>{item.quantity} x ${item.totalPrice.toFixed(2)}</p>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                </li>
              ))}
            </ul>
          )}
          <div className="cart-subtotal">
            <span>Subtotal:</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <Link to="/cart" className="cart-btn">Cart</Link> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;