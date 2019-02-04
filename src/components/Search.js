import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleInput = val => {
    this.setState({
      input: val.toLowerCase()
    });
  };

  render() {
    const { input } = this.state;
    let usersSearch = this.props.text
      .filter(e => {
        return (
          e.toLowerCase().includes(input)
        );
      })
      .map((e, i) => {
        return (
          
            <li index={i} key={i}>
            {e}
            <i style={{marginLeft:"10px", color:"red"}} 
            className="fas fa-trash cart-icon" 
            onClick={()=>this.props.deleteItem(i)}
            />
            <i style={{marginLeft:"10px", color:"green"}} 
            className="fas fa-cart-plus"
            onClick={()=>this.props.addToCart(e,i)}
            />
            </li>

        );
      });

    return (
      <React.Fragment>
        <input
          className="inputSearch"
          placeholder="Search for Item"
          onChange={event => this.handleInput(event.target.value)}
        />
        <ol>
           {usersSearch}
        </ol>
      </React.Fragment>
    );
  }
}
export default Search;
