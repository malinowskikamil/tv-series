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
          />
        </div>
        {<ActorsList list={actors} />}
      </div>
    );
  }
}

export default ActorsSearch;
