import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast.info("Produit ajouté au panier !", {
    autoClose: 1000,
  });

  return (
    <div className="App">
      <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage notify={notify}/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      </CartProvider>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}


export default App;
