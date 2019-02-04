import React, { Component } from "react";


class CartList extends Component {
  render() {
   
    let mycart = this.props.cart
      .map((e, i) => {
        return (
          
            <li index={i} key={i}>
            {e}
            <i style={{marginLeft:"10px", color:"red"}} 
            className="fas fa-trash cart-icon" 
            onClick={()=>this.props.deleteItem(i,e)}
            />
            </li>
        );
      });

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 center-block">
          ITEMS IN MY CART
            <ol>
              {mycart}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default CartList