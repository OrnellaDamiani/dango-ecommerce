import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/data';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading]= useState ([])
  const {categoryId}= useParams()

  useEffect(() => {
    setLoading (true)
    getProducts()
      .then((res) => {
        if(categoryId){
          setProductsList(res.filter((item)=> item.category === categoryId))

        } else {
          setProductsList(res)
        }
      } )

      .catch((error) => console.log(error))
      .finally (()=> setLoading(false))
  },[categoryId])

  return (
   <div>
      {
        loading ? <p>Cargando....</p>
        : <div>
        <h2 className='item-list-container'>{greeting}<span>{categoryId && categoryId}</span></h2>
        <ItemList productsList={productsList} />
      </div>
      }
   </div>
  );
};

export default ItemListContainer;
