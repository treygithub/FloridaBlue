import React, { Component } from 'react';
import EmptyCart from './EmptyCart';
import CartList from './CartList';

export default class Cart extends Component {
  constructor(props){
    super(props)
  this.state={
    cart:[],
    text:[]
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

    try{
      const json = localStorage.getItem('text');
      const text = JSON.parse(json);
      if(text){
      this.setState(()=>({text}))
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
    if(prevState.text.length !== this.state.text.length){
      const json = JSON.stringify(this.state.text);
      localStorage.setItem('text',json);
    }
  }

  handleOption=(e)=>{
    if(!e){
      return "Enter an Item first!"
    }else if (this.state.text.indexOf(e) > -1 ) {
        return 'This item already in list'
    }
      this.setState((prvState)=>{
        return {text: prvState.text.concat(e)}
      })
  }

  deleteItem = (id,e) =>{
    console.log('id', id)
    let tempProducts = [...this.state.cart];
    console.log('tempProducts', tempProducts)
    if (id > -1) {
      tempProducts.splice(id,1)
      this.setState(()=>{
        return {cart: tempProducts}
      })
      this.handleOption(e);
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
