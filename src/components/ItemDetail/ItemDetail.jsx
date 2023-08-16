import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded]= useState ('')
  const onAdd = (cantidad) => {
    
    setQuantityAdded (true)
  };
  console.log(quantityAdded);
  return (
    <div className='item-detail-box'>
      <h2 className='name-product'>{product.name}</h2>
      <img src={product.img} alt={product.name} className='img-product' />
      <p>{product.description}</p>
      <p>${product.price}</p>
     {!quantityAdded ?  <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
       : <Link to='/cart' className='btn-addtocart'>Ir al carrito</Link>}
    </div>
  );
};

export default ItemDetail;