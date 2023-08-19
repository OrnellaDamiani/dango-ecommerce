import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const CartItem = ({ item }) => {
  const {deleteItem} = useContext(CartContext)
  return (
   
       

      <div className='item-contendor'>
     
        <img className='img-item' src={item.img} alt={item.name} />
        <p className='item-text'>{item.name}</p>
        <p className='item-text'>${item.price}</p>
        <p className='item-text'>{item.quantity}</p>
        <p className='item-text'>${item.quantity * item.price}</p>
        <button className='btn-delateitem'onClick={()=>deleteItem(item.id)}>X</button>
      </div>

    
      );
};

      export default CartItem;