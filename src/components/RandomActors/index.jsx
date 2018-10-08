import React, { Component } from "react";
import RandomActor from "./components/RandomActor";
import Spinner from "../Spinner";

class RandomActors extends Component {
  render() {
    const { list, isLoaded } = this.props;
    return (
      <div className="home-container">
        <h2 className="home-container--title">Random Actors List</h2>
        <Spinner isLoaded={isLoaded} />
        <div className={`random-list ${!isLoaded ? "hide" : ""}`}>
          {list.map(item => (
            <RandomActor item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomActors;
