import React from 'react';
import './HomePage.css';
import Banner from '../assets/images/banner.png';
import electronics from '../assets/images/electronics.jpg';
import jewelery from '../assets/images/jewelery.jpg';
import Menclothing from '../assets/images/menclothing.jpg';
import womenclothing from '../assets/images/womenclothing.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero">
        <img src={Banner} className="hero-image" alt="Banner" />
        <div className="hero-text">
          <h1>Home</h1>
          <p>Home &gt; categories</p>
        </div>
      </section>
      
      <section className="categories">
        <h2>Categories</h2>
        <div className="categories-list">
          <div className="category">
            <Link to="/shop/electronics" state={{ categoryName: 'Electronics' }}>
              <img src={electronics} alt="Electronics" />
              <p>Electronics</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/shop/jewelery" state={{ categoryName: 'Jewelery' }}>
              <img src={jewelery} alt="Jewelery" />
              <p>Jewelery</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/shop/men's clothing" state={{ categoryName: 'Men\'s Clothing' }}>
              <img src={Menclothing} alt="Men's Clothing" />
              <p>Men's Clothing</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/shop/women's clothing" state={{ categoryName: 'Women\'s Clothing' }}>
              <img src={womenclothing} alt="Women's Clothing" />
              <p>Women's Clothing</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;