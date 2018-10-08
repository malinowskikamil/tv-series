import React, { Component } from "react";
class SeriesContainer extends Component {
  render() {
    const { seasons } = this.props;
    return (
      <div className="show-series">
        <h2>Episodes List</h2>
        <div>
          {seasons._embedded.episodes.map(item => (
            <span key={item.id}>{item.name}, </span>
          ))}
        </div>
      </div>
    );
  }
}

export default SeriesContainer;
