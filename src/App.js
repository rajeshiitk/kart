import "./style/colors.scss";
import './style/app.scss';
import './style/home.scss';
import './style/productCard.scss';
import { Toaster } from "react-hot-toast";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/cart" element={ <Cart />} />
    </Routes>
    <Toaster />
  </Router>

  );
}

export default App;
