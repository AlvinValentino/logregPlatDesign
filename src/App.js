import './App.css';

import { useState } from 'react'

import { Switch, Route } from "react-router-dom";

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Forgot from './pages/Forgot'
import Resend from './pages/Resend'
import Reset from './pages/Reset'
import Products from './pages/Products'
import MyOrder from './pages/MyOrder'
import Profil from './pages/Profil'
import Detail from './pages/Detail'
import Purchase from './pages/Purchase'
import StartSelling from './pages/StartSelling'
import DevlaSeller from './pages/DevlaSeller'

        


function App() {

  const [alert, setAlert] = useState({
    isOpen: false,
    message: "",
  })

  return (
    <div>
      <Switch>
        <Route exact path="/register" render={() => <Register alert={alert} setAlert={setAlert}/>} />
        <Route exact path="/" render={() => <Login alert={alert} setAlert={setAlert}/>} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/api/forget?token={token}" component={Reset} />
        <Route exact path="/resend" component={Resend} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/myorder" component={MyOrder} />
        <Route exact path="/profil" component={Profil} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/purchase" component={Purchase} />
        <Route exact path="/startselling" component={StartSelling}/>
        <Route exact path="/devlaseller" component={DevlaSeller}/>
        
      </Switch>
    </div>
  );
}

export default App;
