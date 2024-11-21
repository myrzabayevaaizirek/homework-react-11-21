import React from 'react';

const ProductCard = ({ product }) => {
  const { image, title, category, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p className="product-category">{category}</p>
      <h3 className="product-title">{title}</h3>
      <div className="product-footer">
        <p className="product-price">${price.toFixed(2)}</p> {/* Цена слева */}
        <button className="add-to-cart">Add to Cart</button> {/* Кнопка справа */}
      </div>
    </div>
  );
};

export default ProductCard;
