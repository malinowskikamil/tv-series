import React, { Component } from "react";
import ActorsList from "./ActorsList";

class ActorsSearch extends Component {
  render() {
    const { personName, actors } = this.props;
    return (
      <div className="actors-search">
        <div className="inp-group">
          <label htmlFor="actorsSearch">Search for actor</label>
          <input
            id="actorsSearch"
            type="text"
            value={personName}
            onChange={this.props.onChange()}
            onFocus={this.props.focus()}
            onBlur={this.props.blur()}
            onKeyUp={this.props.keyup()}
          />
        </div>
        {actors.length !== 0 &&
          personName !== "" && <ActorsList list={actors} />}
        {actors.length === 0 &&
          personName !== "" && (
            <p className="error">No actors found by that name</p>
          )}
      </div>
    );
  }
}

export default ActorsSearch;
