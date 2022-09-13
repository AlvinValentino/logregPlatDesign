import './App.css';

import { useState,useEffect } from 'react'

import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home';
import Forgot from './pages/Forgot'
import Resend from './pages/Resend'
import Reset from './pages/Reset'
import StartSelling from './pages/StartSelling';

const users = JSON.parse(localStorage.getItem('token'));
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'));

function App() {
  const [alert, setAlert] = useState({
    isOpen: false,
    message: "",
  });

  return (
    <div>
      <Switch>
        <Route exact path="/register" render={() => <Register alert={alert} setAlert={setAlert}/>} />
        <Route exact path="/" render={() => <Login alert={alert} setAlert={setAlert}/>} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/api/forget?token={token}" component={Reset} />
        <Route exact path="/resend" component={Resend} />
        <Route path="/startselling" component={StartSelling}/>
      </Switch>
    </div>
  );
}

export default App;
