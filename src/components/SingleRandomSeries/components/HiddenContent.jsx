import React, { Component } from "react";

class HiddenContent extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="hidden-content">
        <p className="series-name">{item.name}</p>
        <p className="series-genre">
          {item.genres.map(genre => (
            <span key={genre}>{genre}</span>
          ))}
        </p>
        <p className="series-rate">
          {"Rating: "}
          {item.rating.average !== null && item.rating.average}
          {item.rating.average === null && "unknown"}
        </p>
        <p className="series-seasons">
          Seasons:{" "}
          {item._embedded.episodes[item._embedded.episodes.length - 1].season}
        </p>
        <p className="series-episodes">
          Episodes: {item._embedded.episodes.length}
        </p>
      </div>
    );
  }
}

export default HiddenContent;