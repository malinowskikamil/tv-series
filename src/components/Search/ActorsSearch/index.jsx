import React, { Component } from "react";

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
    const { personName } = this.props;
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
      </div>
    );
  }
}

export default ActorsSearch;
