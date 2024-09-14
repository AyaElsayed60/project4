import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './ShopPage.css';
import Banner from '../assets/images/banner.png';
import { useCartStore } from '../store/cartStore';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const { addToCart } = useCartStore();
  const { category } = useParams();
  const location = useLocation();
  
  const categoryName = location.state?.categoryName || "Shop";

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        if (category) {
          setProducts(data.filter(product => product.category === category));
        } else {
          setProducts(data);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="shop-page">
      <section className="hero">
        <img src={Banner} className="hero-image" alt="Banner" />
        <div className="hero-text">
          <h1>{categoryName}</h1>
          <p>Home &gt; Shop {category && `> ${categoryName}`}</p>
        </div>
      </section>
      <div className="shop-container">
        <div className="product-grid">
          {currentProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="overlay">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product, 1)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <Link to={`/product/${product.id}`} className="product-link">
                <h3>{product.title}</h3>
              </Link>
              <p className="category">{product.category}</p>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="pagination-container">
          <div className="pagination">
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
            {currentPage < Math.ceil(products.length / productsPerPage) && (
              <button onClick={() => paginate(currentPage + 1)} className="next-btn">
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;