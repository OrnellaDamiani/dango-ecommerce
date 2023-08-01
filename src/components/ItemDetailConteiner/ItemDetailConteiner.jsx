import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../mock/data';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({}) => {
  const [product, setProduct] = useState({});
  const { id } = useParams ();
  console.log('el item es:', id);

  useEffect(() => {
    getItem(id)
    .then((res) => setProduct(res))
    .catch ((error) => console.log(error))
    
  }, []);

return (
  <div>
    <ItemDetail product={product} />
  </div>
);
};

export default ItemDetailContainer;




//.find((products) => products.id === id