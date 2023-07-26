import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ products }) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
  };
  return (
    <div className='item-detail-box'>
      <h2 className='name-product'>{products.name}</h2>
      <img src={products.img} alt={products.name} className='img-product' />
      <p>{products.description}</p>
      <p>${products.price}</p>
      <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;