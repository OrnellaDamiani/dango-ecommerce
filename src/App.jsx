import './App.css'
import Navbar from'./components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import AboutUs from './components/AboutUs/AboutUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Cart from './components/Cart/Cart'
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
     </Routes>
    </BrowserRouter>
    </CartProvider>
   )
}

export default App  
