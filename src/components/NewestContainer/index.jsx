import React, { Component } from "react";
import NewestsList from "./newestsList";
import "./index.css";

class NewestContainer extends Component {
  render() {
    const { newestList } = this.props;
    return (
      <div className="newest-container">
        <h1>List of newests episodes</h1>
        <div className="content-wrapper">
          <div className="filters-panel">Filters</div>
          <NewestsList newestList={newestList} />
        </div>
      </div>
    );
  }
}

export default NewestContainer;
