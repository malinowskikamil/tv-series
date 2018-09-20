import React, { Component } from "react";
import SeriesSearch from "./SeriesSearch";
import ActorsSearch from "./ActorsSearch";

class Search extends Component {
  state = {
    series: [],
    seriesName: "",
    actors: [],
    personName: "",
    isFetching: false
  };

  onSeriesInputChange = e => {
    this.setState({
      seriesName: e.target.value,
      isFetching: true
    });
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`).then(
      response =>
        response
          .json()
          .then(json => this.setState({ series: json, isFetching: false }))
    );
  };

  onActorInputChange = e => {
    this.setState({
      personName: e.target.value,
      isFetching: true
    });
    fetch(`https://api.tvmaze.com/search/people?q=${e.target.value}`).then(
      response =>
        response
          .json()
          .then(json => this.setState({ actors: json, isFetching: false }))
    );
  };
  render() {
    const { series, seriesName, actors, personName, isFetching } = this.state;
    return (
      <div>
        <SeriesSearch
          isFetching={isFetching}
          series={series}
          seriesName={seriesName}
          onChange={e => this.onSeriesInputChange}
        />
        <ActorsSearch
          isFetching={isFetching}
          actors={actors}
          personName={personName}
          onChange={e => this.onActorInputChange}
        />
      </div>
    );
  }
}

export default Search;
