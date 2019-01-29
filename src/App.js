import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NeedToBuy from './components/NeedToBuy';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={NeedToBuy}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;