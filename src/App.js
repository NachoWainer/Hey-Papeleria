
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter , Routes, Route,Navigate} from 'react-router-dom'
import {FrontStore} from "./components/FrontStore/FrontStore"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Header } from './components/Header/Header';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
   <CartProvider> 
    
      <BrowserRouter>
        <Header></Header>
        <Routes>
        
          <Route path='/' element = {<FrontStore></FrontStore> }></Route>
          <Route path="/productos/:category" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path='*' element={<Navigate to="/"/>}></Route>

        
        </Routes>
          
        
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
