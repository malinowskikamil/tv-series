import React, { Component } from "react";
class DescriptionContainer extends Component {
  render() {
    const { show } = this.props;

    return (
      <div className="show-description">
        <h1>"{show.name}"</h1>
        <p>
          <b>Premiered : </b> {show.premiered}
        </p>
        <p>
          <b>Genre : </b>
          {show.genres.map(genre => (
            <span key={genre}>{genre}, </span>
          ))}
        </p>
        <p>
          <b>Type : </b>
          {show.type}
        </p>
        <p>
          <b>Language : </b>
          {show.language}
        </p>
        <p>
          <b>Rating : </b>
          {show.rating.average}
        </p>
        <p>
          <b>Status : </b>
          {show.status}
        </p>
        <p>
          <b>Seasons: </b>
          {show._embedded.episodes.length !== 0 &&
            show._embedded.episodes[show._embedded.episodes.length - 1].season}
          {show._embedded.episodes.length === 0 && <span>no info</span>}
        </p>
        <p>
          <b>Episodes : </b>
          {show._embedded.episodes.length}
        </p>
      </div>
    );
  }
}

export default DescriptionContainer;
