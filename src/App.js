import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CropTypes from './components/CropTypes';
import OrderPage from './components/OrderPage';
import Cart from './components/Cart';
import Home from'./components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crops/:type" element={<CropTypes />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;