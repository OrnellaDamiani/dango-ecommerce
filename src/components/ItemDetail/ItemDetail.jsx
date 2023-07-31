import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ product }) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
  };
  return (
    <div className='item-detail-box'>
      <h2 className='name-product'>{product.name}</h2>
      <img src={product.img} alt={product.name} className='img-product' />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;