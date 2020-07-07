import React from 'react';

import Home from './Home/Home'
import Login from "./component/login/login"
import Signup from "./component/signup/signup"
import Header from "./component/Header/header"
import List from './component/Header/List'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './component/Header/footer'

function App() {
  return (<BrowserRouter>
    <Header/>
    <List/>
    <Footer/>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>

        </Switch>
        </BrowserRouter>
       
  );
}

export default App;
