import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/data';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';


const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const productsCollection = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)):  collection(db, "products")
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data()
          }

        })
        setProductsList(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div>
      {
        loading ? <p className='loading-text'>Cargando....</p>
          : <div>
            <h2 className='item-list-container'>{greeting}<span>{categoryId && categoryId}</span></h2>
            <ItemList productsList={productsList} />
          </div>
      }
    </div>
  );
};

export default ItemListContainer;
