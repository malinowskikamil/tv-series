import React, { Component } from "react";
import RandomActor from "./components/RandomActor";
class RandomActors extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="home-container">
        <h2 className="home-container--title">Random Actors List</h2>
        <div className="random-list">
          {list.map(item => (
            <RandomActor item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomActors;
