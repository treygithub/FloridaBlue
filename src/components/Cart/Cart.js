import React, { Component } from 'react';
import EmptyCart from './EmptyCart';
import CartList from './CartList';

export default class Cart extends Component {
  constructor(props){
    super(props)
  this.state={
    cart:[]
  }
}
  componentDidMount(){
    try{
      const json = localStorage.getItem('cart');
      const cart = JSON.parse(json);
      if(cart){
      this.setState(()=>({cart}))
      }
    } catch (e){
        console.log('error', e)
    }
  }
  
  componentDidUpdate(prevProps,prevState){
    if(prevState.cart.length !== this.state.cart.length){
      const json = JSON.stringify(this.state.cart);
      localStorage.setItem('cart',json);
    }
  }

  deleteItem = (id) =>{
    console.log('id', id)
    let tempProducts = [...this.state.cart];
    console.log('tempProducts', tempProducts)
    if (id > -1) {
      tempProducts.splice(id,1)
      this.setState(()=>{
        return {cart: tempProducts}
      })
      
    }
  }

  render() {
    return (
        <section>
           {this.state.cart.length >= 1 ? <CartList deleteItem={this.deleteItem} cart={this.state.cart}/> : <EmptyCart/>}
        </section>
    )
  }
}
