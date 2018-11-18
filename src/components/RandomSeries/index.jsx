import React, { Component } from "react";
import SingleRandomSeries from "../SingleRandomSeries";
import "./index.css";
import Spinner from "../Spinner";
class RandomSeries extends Component {
  render() {
    const { list, isLoaded } = this.props;
    return (
      <div className="home-container">
        <h2 className="home-container--title">List of {list.length} serises</h2>
        <Spinner isLoaded={isLoaded} />
        <div className={`random-list ${!isLoaded ? "hide" : ""}`}>
          {list.map(item => (
            <SingleRandomSeries item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomSeries;
