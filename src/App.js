
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter , Routes, Route,Navigate} from 'react-router-dom'
import {FrontStore} from "./components/FrontStore/FrontStore"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Header } from './components/Header/Header';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { useState } from 'react';
import { Footer } from './components/Footer/Footer';


function App() {
  const [color] = useState("#f6f6f6");
  return (
   <CartProvider> 
    
      <BrowserRouter>
        <Header></Header>
        <div style={{background: color}}>
        <Routes>
        
          <Route path='/' element = {<FrontStore></FrontStore> }></Route>
          <Route path="/productos/:category" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path='*' element={<Navigate to="/"/>}></Route>

        
        </Routes>
        </div>
        
        </BrowserRouter>
        <Footer></Footer>
      </CartProvider>
  );
}

export default App;
