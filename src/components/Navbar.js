import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
            <i style={{fontSize : "32px"}} className="fas fa-shopping-basket"></i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              <Link style={{color : "gray"}} to="/" className="nav-link">
                Need To Buy
              </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Button>
            <span className="mr-2">
              <i className="fas fa-cart-plus"/>
            </span>
              In My Cart
          </Button>
        </Link>
      </nav>
    )
  }
}