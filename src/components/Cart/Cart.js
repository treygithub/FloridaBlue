import React, { Component } from 'react';
import EmptyCart from './EmptyCart';
import CartList from './CartList';

export default class Cart extends Component {
  state={
    cart:[]
  }
  render() {
    return (
        <section>
           {this.state.cart.length -1 > 0 ? <CartList/> : <EmptyCart/>}
        </section>
    )
  }
}
