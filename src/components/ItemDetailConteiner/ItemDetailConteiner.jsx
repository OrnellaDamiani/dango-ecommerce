import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../mock/data';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = ({}) => {
  const [product, setProduct] = useState({});
  const { id } = useParams ();
  console.log('el item es:', id);

 useEffect (()=>{
  const collectionProd = collection(db, "products")
  const referenceDoc = doc(collectionProd, id)
  getDoc(referenceDoc)
  .then((res)=> setProduct({id:res.id, ...res.data()}))
  .catch((error)=> console.log(error))
 },[])

return (
  <div>
    <ItemDetail product={product} />
  </div>
);
};

export default ItemDetailContainer;




