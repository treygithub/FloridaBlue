import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';


export default class Navbar extends Component {
  render() {
    return (
      <nav style={{marginTop:"10px"}} className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
            <i style={{fontSize : "32px"}} className="fas fa-shopping-basket"></i>
        </Link>
        <ul className="navbar-nav align-items-center hide-me-trey">
          <li className="nav-item ml-5">
              <Link style={{color : "gray", fontSize:"1.5em", fontWeight:"bold"}} to="/" className="nav-link">
                Grocery Shopify Co
              </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Button className="btn-media-q">
            <span className="mr-2">
              <i className="fas fa-cart-plus"/>
            </span>
              My Cart
          </Button>
        </Link>
      </nav>
    )
  }
}