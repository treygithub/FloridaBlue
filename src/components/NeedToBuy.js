import React, { Component } from 'react';
import Search from './Search'
import AddItem from './AddItem'
import ClearAll from './ClearAll'

class NeedToBuy extends Component {
  constructor(props){
    super(props);
     this.state = {
      text:[],
      cart:[]
  }
}

componentDidMount(){
  try{
    const json = localStorage.getItem('text');
    const text = JSON.parse(json);
    if(text){
    this.setState(()=>({text}))
    }
  } catch (e){
      console.log('error', e)
  }

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
  if(prevState.text.length !== this.state.text.length){
    const json = JSON.stringify(this.state.text);
    localStorage.setItem('text',json);
  }
  if(prevState.cart.length !== this.state.cart.length){
    const json = JSON.stringify(this.state.cart);
    localStorage.setItem('cart',json);
  }
}

handleRemoveOne=(e)=>{
  this.setState({[e.target.name]: e.target.value})
      let ho = this.state.text.filter((text)=>{return this.state.textField2 === text} )
    this.setState(()=>({  text: ho }))
}

handleOption=(e)=>{
    if(!e){
      return "Enter an Item first!"
    }else if (this.state.text.indexOf(e) > -1 ) {
        return 'This item already in list'
    }
      this.setState((bubbleGum)=>{
        return {text: bubbleGum.text.concat(e)}
      })
  }

handleReset=()=>{
  this.setState(()=>{return{text:[]}})
}

deleteItem = (id) =>{
  console.log('id', id)
  let tempProducts = [...this.state.text];

  if (id > -1) {
    tempProducts.splice(id,1)
    this.setState(()=>{
      return {text: tempProducts}
    })
  }
}

addToCart = (e) => {
  let tempProducts = [...this.state.cart]
  tempProducts = tempProducts.concat(e)
  this.setState((state)=>{
    return {cart: tempProducts}
  })
    console.log('this.state.cart', this.state.cart)
  }



render() {
  let {text} = this.state
  return (
    <div style={{marginTop:"50px"}} className="container">
      <div className="row">

      <div className="col-md-4 mx-auto add-item-container hide-me-trey">
      <h5>Welcome to you private shopping list </h5>
      <ul>
        <li>Shopping list are saved to local storage</li>
        <li>That Means We do-not collect any data!</li>
        <li>No sign-up or commitment</li>
      </ul>
      </div>
     
          <div className="col-md-4 mx-auto add-item-container">
            <div className="">
              <h3>Add new item</h3>
              <AddItem handleOption={this.handleOption}/>
            </div>
            <div style={{marginTop:"5%"}}>
              <h3>Clear Shopping List</h3>
              <ClearAll handleReset={this.handleReset}/>
            </div>
          </div>

          <div className=" col-md-4 mx-auto list-container">
            <div className="list-title-container">
              <h3 className="list-title">Need To Buy List</h3>
            </div>
            <div className="list-items">
              <Search addToCart={this.addToCart} deleteItem={this.deleteItem} text={text}/>
            </div>
          </div>

      </div>
    </div>
  );
}
}

export default NeedToBuy;