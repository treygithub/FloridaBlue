import React, { Component } from 'react';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import {ProductConsumer} from '../../context';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
  render() {
    return (
        <section>
        <ProductConsumer>
          {(value)=>{
            const {cart} = value;
            if(cart.length > 0 ){
              return (
                <React.Fragment>
                  <CartList value={value}/>
                </React.Fragment>
              );
            }else{
                return (
                  <React.Fragment>
                    <EmptyCart/>
                  </React.Fragment>
                );
              }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
