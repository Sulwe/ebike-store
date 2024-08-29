import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Products from './Pages/Products';
import ShopCategory from './Pages/Shop';
import Cart from './Pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>}/>
        <Route path = '/mens' element = {<ShopCategory category = 'mens'/>}/>
        <Route path = '/womens' element = {<ShopCategory category = 'womens'/>}/>
        <Route path = '/kids' element = {<ShopCategory category = 'kids'/>}/>
        <Route path = '/products' element = {<Products/>}>
          <Route path = ':productId' element = {<Products/>}/>
        </Route>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
