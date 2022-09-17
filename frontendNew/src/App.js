import './App.css';

import { useState } from 'react'

import { Routes, Route } from "react-router-dom";

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Forgot from './pages/Forgot'
import Resend from './pages/Resend'
import Reset from './pages/Reset'
import Input from './pages/Input'
import Cart from './pages/Cart'
import Product from './pages/Product'

function App() {

  const [alert, setAlert] = useState({
    isOpen: false,
    message: "",
  })

  return (
    <div>
      <Routes>
        <Route index path="/register" element={<Register alert={alert} setAlert={setAlert} />} />
        <Route index path="/" element={<Login alert={alert} setAlert={setAlert} />} />
        <Route index path="/home" element={<Home />} />
        <Route index path="/forgot" element={<Forgot />} />
        <Route index path="/api/forget?token={token}" element={<Reset />} />
        <Route index path="/resend" element={<Resend />} />
        <Route index path="/input" element={<Input />} />
        <Route index path="/cart" element={<Cart />} />
        <Route index path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
