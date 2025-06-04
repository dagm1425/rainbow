import './App.css';
import Nav from './components/nav/Nav.jsx';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/common/Footer/Footer';
import { Routes, Route } from "react-router";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Nav/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
