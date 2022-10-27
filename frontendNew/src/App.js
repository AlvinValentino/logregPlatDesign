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
import EditProfile from './pages/EditProfile';
import Profile from './pages/Profile'
import Seller from './pages/DevlaSeller'
import StartSelling from './pages/StartSelling';
import MyOrder from './pages/MyOrder';
import Purchase from './pages/Purchase';
import Detail from './pages/Detail'

function App() {

  const [alert, setAlert] = useState({
    isOpen: false,
    message: "",
  })

  return (
    <div>
      <Routes>
        <Route index path="/register" element={<Register alert={alert} setAlert={setAlert} />} /> {/*done, sistem*/}
        <Route index path="/" element={<Login alert={alert} setAlert={setAlert} />} /> {/*done, sistem*/}
        <Route index path="/home" element={<Home />} /> {/*done*/}
        <Route index path="/forgot" element={<Forgot />} /> {/*done*/}
        <Route index path="/api/forget?token={token}" element={<Reset />} />{/*done*/}
        <Route index path="/resend" element={<Resend />} /> {/*done*/}
        <Route index path="/input" element={<Input />} />
        <Route index path="/cart" element={<Cart />} />
        <Route index path="/product" element={<Product />} /> 
        <Route index path="/edit" element={<EditProfile alert={alert} setAlert={setAlert} />} /> {/*done, sistem*/}
        <Route index path="/profile" element={<Profile />} />
        <Route index path="/seller" element={<Seller />} /> {/*done*/}
        <Route index path="/start" element={<StartSelling />} /> {/*done, sistem*/}
        <Route index path="/myorder" element={<MyOrder />} /> {/*done*/}
        <Route index path="/purchase" element={<Purchase />} /> {/*done,*/}
        <Route index path="/detail" element={<Detail />} /> 

      </Routes>
    </div>
  );
}

export default App;
