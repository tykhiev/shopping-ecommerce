import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopContextProvider } from './context/context-shop';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
    <Router> 
      <Navbar />
      <Routes >
      <Route path="/" element={<Shop />}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" />

      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
