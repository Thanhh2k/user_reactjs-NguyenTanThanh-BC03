import React, { Component } from "react";

class Search extends Component {
  handleSearchUser = () => {
    this.props.handleGetSearchUser();
  };
  render() {
    return (
      <input
        type="text"
        id="txtSearch"
        onKeyUp={this.handleSearchUser}
        className="form-control mb-3 w-50"
      />
    );
  }
}

export default Search;
