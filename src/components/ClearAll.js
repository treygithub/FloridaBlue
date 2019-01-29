import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class ClearAll extends Component {
  render() {
    return (
      <div>
        <Button outline color="danger" onClick={()=>{this.props.handleReset()}}>Clear Shopping Cart</Button>
      </div>
    )
  }
}
