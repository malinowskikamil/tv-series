import React, { Component } from "react";
import SeriesSearch from "./SeriesSearch";
import ActorsSearch from "./ActorsSearch";
import "./index.css";
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

  onInputFocus = e => {
    e.target.parentNode.classList.add("focused");
  };

  onInputBlur = e => {
    e.target.parentNode.classList.remove("focused");
  };

  render() {
    const { series, seriesName, actors, personName, isFetching } = this.state;
    return (
      <div className="search-container">
        <SeriesSearch
          isFetching={isFetching}
          series={series}
          seriesName={seriesName}
          onChange={e => this.onSeriesInputChange}
          focus={e => this.onInputFocus}
          blur={e => this.onInputBlur}
        />
        <ActorsSearch
          isFetching={isFetching}
          actors={actors}
          personName={personName}
          onChange={e => this.onActorInputChange}
          focus={e => this.onInputFocus}
          blur={e => this.onInputBlur}
        />
      </div>
    );
  }
}

export default Search;
