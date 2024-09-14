import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './components/ProductDetail';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage'; // استيراد صفحة العربة
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/:category?" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} /> {/* إضافة المسار إلى صفحة العربة */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;