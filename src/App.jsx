import './App.css'
import Navbar from'./components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import AboutUs from './components/AboutUs/AboutUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Cart from './components/Cart/Cart'
import React, { useEffect } from 'react'
import Checkout from './components/Checkout/Checkout'


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Dango"/>}/>
     <Route path='/category/:categoryId' element={<ItemListContainer greeting="Filtraste por:"/>}/>
     <Route path='/item/:id' element={<ItemDetailContainer/>}/>
     <Route path='/nosotros' element={<AboutUs/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
    </BrowserRouter>
    </CartProvider>
   )
}

export default App  
