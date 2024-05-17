import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Signup from './Components/Signup';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
