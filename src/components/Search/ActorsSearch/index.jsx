import React, { Component } from "react";
import ActorsList from "./ActorsList";

class ActorsSearch extends Component {
  state = {
    isOpen: false
  };
  onInputBlur = e => {
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 300);
  };
  onKeyUp = () => {
    this.setState({ isOpen: true });
  };
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
            onKeyUp={this.onKeyUp}
            onBlur={this.onInputBlur}
          />
        </div>
        {actors.length !== 0 &&
          personName !== "" && (
            <ActorsList list={actors} isOpen={this.state.isOpen} />
          )}

        {actors.length === 0 &&
          personName !== "" && (
            <p className="error">No actors found by that name</p>
          )}
      </div>
    );
  }
}

export default ActorsSearch;
