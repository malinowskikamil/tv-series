import React, { Component } from "react";
import SingleRandomSeries from "../SingleRandomSeries";
import "./index.css";
class RandomSeries extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="home-container">
        <h2 className="home-container--title">Random Series List</h2>
        <div className="random-list">
          {list.map(item => (
            <SingleRandomSeries item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomSeries;
