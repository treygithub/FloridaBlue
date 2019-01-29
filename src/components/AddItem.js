import React, { Component } from 'react';
import {Button} from 'reactstrap'

class AddItem extends Component {
  constructor(props){
    super(props);
    this.state={
      error: undefined
    }
  }

handleOption = (e) => {
  e.preventDefault()
  let userValue = e.target.elements.textField.value.trim()
  e.target.elements.textField.value = ""
  const error = this.props.handleOption(userValue)
  this.setState(()=>{
    return { error }
  })
}
  render(){
  return (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleOption}>
        <input type="text" name="textField"/>
        <Button type="submit" outline color="success">  
          <i className="far fa-plus-square"></i>
        </Button>
      </form>
    </div>
  )
}
}
export default AddItem
