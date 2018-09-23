import React, { Component } from "react";
import SingleRandomSeries from "../SingleRandomSeries";
import "./index.css";
class RandomSeries extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="random-series-container">
        <h2 className="random-series-list--title">Random Series List</h2>
        <div className="random-series-list">
          {list.map(item => (
            <SingleRandomSeries item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomSeries;
