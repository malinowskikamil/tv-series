import React, { Component } from "react";

class HiddenContent extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="hidden-content">
        <p className="series-name">{item.name}</p>
        <p className="series-genre">
          {item.genres &&
            item.genres.map(genre => <span key={genre}>{genre}</span>)}
        </p>
        <p className="series-rate">
          {"Rating: "}
          {item.rating !== undefined && item.rating.average}
          {item.rating === null && "unknown"}
        </p>
        <p className="series-episodes">Episodes: {item.weight}</p>
      </div>
    );
  }
}

export default HiddenContent;
