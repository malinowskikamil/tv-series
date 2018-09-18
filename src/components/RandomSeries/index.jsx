import React, { Component } from "react";
import SingleRandomSeries from "../SingleRandomSeries";
import "./index.css";
class RandomSeries extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {console.log(list)}
        <p>Przykladowa lista seriali</p>
        <ul>
          <div className="random-series-container">
            {list.map(item => (
              <SingleRandomSeries item={item} key={item.id} />
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default RandomSeries;
