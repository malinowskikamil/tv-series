import React, { Component } from "react";
import { Link } from "react-router-dom";
import SeriesSearch from "./SeriesSearch";
import ActorsSearch from "./ActorsSearch";
import arrownext from "../../assets/arrow-next.svg"
import "./index.css";
import SearchResult from "./SearchResult";
class Search extends Component {
  state = {
    results: [],
    seriesName: "",
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
          .then(json => this.setState({ results: json, isFetching: false }))
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
          .then(json => this.setState({ results: json, isFetching: false }))
    );
  };

  onInputFocus = e => {
    e.target.parentNode.classList.add("focused");
  };

  render() {
    const { results, seriesName, personName, isFetching } = this.state;
    return (
      <div className="search-container">
        <SeriesSearch
          isFetching={isFetching}
          seriesName={seriesName}
          onChange={e => this.onSeriesInputChange}
          focus={e => this.onInputFocus}
          keyup={e => this.onKeyUp}
        />
        <Link className="search-link" to="/newests">Go to Newest series List <img src={arrownext} alt=""/></Link>
        <ActorsSearch
          isFetching={isFetching}
          personName={personName}
          onChange={e => this.onActorInputChange}
          focus={e => this.onInputFocus}
          keyup={e => this.onKeyUp}
        />
        <SearchResult  data={results}/>
      </div>
    );
  }
}

export default Search;
