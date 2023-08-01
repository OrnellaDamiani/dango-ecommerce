import './App.css'
import Navbar from'./components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Dango"/>}/>
     <Route path='/category/:categoryId' element={<ItemListContainer greeting="Filtraste por:"/>}/>
     <Route path='/item/:id' element={<ItemDetailContainer/>}/>
     </Routes>
    </BrowserRouter>
   )
}

export default App  
