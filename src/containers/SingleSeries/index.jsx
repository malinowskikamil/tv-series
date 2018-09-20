import React, { Component } from "react";
import { Link } from "react-router-dom";
class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`).then(response =>
      response.json().then(json => this.setState({ show: json }))
    );
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        {show === null && <p>No Information</p>}
        {show !== null && (
          <div>
            <p>{show.name}</p>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>Episodes - {show._embedded.episodes.length}</p>
            {show.summary}
            {show.image !== null && (
              <p>
                <img src={show.image.medium} alt="" />
              </p>
            )}
            <Link to="/">Back</Link>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
