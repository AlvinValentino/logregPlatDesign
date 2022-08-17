import './App.css';

import { useState } from 'react'

import { Switch, Route } from "react-router-dom";

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Forgot from './pages/Forgot'

function App() {
  const [alert, setAlert] = useState({
    isOpen: false,
    message: ""
  })

  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/forgot" component={Forgot} />
      </Switch>
    </div>
  );
}

export default App;
