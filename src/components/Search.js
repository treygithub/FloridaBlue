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
          <li key={i}>{e}</li>
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
