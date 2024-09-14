import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <Link to="/shop">
        <button>Go to Shop</button>
      </Link>
    </div>
  );

  if (!product) return <p>No product found</p>;

  return (
    <div className="product-detail">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> &gt; 
        <Link to="/shop">Shop</Link> &gt;
        <span>{product.title}</span>
      </nav>

      <div className="product-detail-header">
        <div className="product-images">
          <img src={product.image} alt="Thumbnail" className="thumbnail" />
        </div>
        <div className="main-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <div className="rating">
            <div className="stars">★★★★☆</div>
            <div className="reviews">5 Customer Reviews</div>
          </div>

          <div className="add-to-cart">
            <div className="quantity-control">
              <button 
                className="quantity-button" 
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <input 
                type="text" 
                value={quantity} 
                readOnly 
                className="quantity-input"
              />
              <button 
                className="quantity-button" 
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add To Cart
            </button>
          </div>

          <div className="small-separator"></div>
          <div className="product-meta">
            <p>SKU: {product.id}</p>
            <p>Category: {product.category}</p>
            <div className="share-icons">
              <i className="fab fa-facebook" aria-label="Share on Facebook"></i>
              <i className="fab fa-instagram" aria-label="Share on Instagram"></i>
              <i className="fab fa-twitter" aria-label="Share on Twitter"></i>
              <i className="fab fa-linkedin" aria-label="Share on LinkedIn"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;