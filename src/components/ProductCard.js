import React from "react";

const ProductCard = ({ product }) => {
  const { image, title, category, price } = product;

  const handleAddToCart = () => {
    alert(`${title} добавлен в корзину!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-category">Категория: {category}</p>
        <p className="product-price">Цена: ${price}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
