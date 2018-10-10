import React, { Component } from "react";
import NewestsList from "./newestsList";
import "./index.css";
import Filters from "./filters";

class NewestContainer extends Component {
  render() {
    const { newestList } = this.props;
    return (
      <div className="newest-container">
        <h1>List of newests episodes</h1>
        <div className="content-wrapper">
          <Filters />
          <NewestsList newestList={newestList} />
        </div>
      </div>
    );
  }
}

export default NewestContainer;
