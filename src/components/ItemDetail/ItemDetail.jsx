import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded]= useState ('')
  const {addItem} = useContext(CartContext)
  
  const onAdd = (quantity) => {
    
    setQuantityAdded (quantity)
    addItem(product, quantity)
  };
  
  return (
    <div className='item-detail-box'>
      <h2 className='name-product'>Detalle de: {product.name}</h2>
      <img src={product.img} alt={product.name} className='img-product' />
      <p>{product.description}</p>
      <p>${product.price}</p>
     {!quantityAdded ?  <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
       : <Link to='/cart' className='btn-addtocart'>Ir al carrito</Link>}
    </div>
  );
};

export default ItemDetail;