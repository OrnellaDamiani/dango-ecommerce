import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productsList }) => {
  return (
    <div className='product-list'>
      {productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;