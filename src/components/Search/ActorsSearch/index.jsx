import React, { Component } from "react";
import ActorsList from "../components/ActorsList";
import Loader from "../../Loader";

class ActoresSearch extends Component {
  render() {
    const { personName, actors, isFetching } = this.props;
    return (
      <div className="actores-search">
        <div>
          <input
            type="text"
            value={personName}
            onChange={this.props.onChange()}
          />
        </div>
        {actors.length === 0 &&
          personName.trim() === "" && (
            <p>Please enter actors name into the input</p>
          )}
        {actors.length === 0 &&
          personName.trim() !== "" && (
            <p>No actors have been found with this name</p>
          )}
        {isFetching && actors.length !== 0 && <Loader />}
        {!isFetching && <ActorsList list={this.props.actors} />}
      </div>
    );
  }
}

export default ActoresSearch;
