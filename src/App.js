import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Pricing from './pages/Pricing';
import About from './pages/About';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/pricing" element={ <Pricing />} />
        <Route path="/about" element={ <About />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
