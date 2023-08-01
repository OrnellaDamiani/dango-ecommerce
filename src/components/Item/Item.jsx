import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({ product }) => {
  const { id, img, name, description, price, stock } = product;

  return (
    <div
      className='product-box'
      >
      
      <img src={img} className='product-img' alt={name} />
      <div className='product-body'>
        <p className='product-text'>{name}</p>
        <p className='product-text'>{description}</p>
        <p className='product-text'>${price}</p>
        <p className='product-text'>stock: {stock}</p>
      </div>

      <Link to={`/item/${product.id}`} className='btn-vermas'>
        Ver más
      </Link>
    </div>
  );
};

export default Item;
