import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import PeopleList from "../../components/PeopleList";
import RandomSeries from "../../components/RandomSeries";
import Loader from "../../components/Loader";
class Series extends Component {
  state = {
    randomList: [],
    randomIds: [],
    series: [],
    seriesName: "",
    people: [],
    personName: "",
    isFetching: false
  };

  onSeriesInputChange = e => {
    this.setState({
      seriesName: e.target.value,
      isFetching: true
    });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`).then(
      response =>
        response
          .json()
          .then(json => this.setState({ series: json, isFetching: false }))
    );
  };

  onPeopleInputChange = e => {
    this.setState({
      personName: e.target.value,
      isFetching: true
    });
    fetch(`http://api.tvmaze.com/search/people?q=${e.target.value}`).then(
      response =>
        response
          .json()
          .then(json => this.setState({ people: json, isFetching: false }))
    );
    console.log(this.state.people);
  };
  componentDidMount() {
    let randomIds = this.state.randomIds;
    let randomList = this.state.randomList;
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 1000 + 1);
      randomIds.push(randomNumber);
    }
    this.setState({ randomIds });
    for (let i = 0; i < 10; i++) {
      fetch(`http://api.tvmaze.com/shows/${randomIds[i]}?embed=episodes`).then(
        response =>
          response.json().then(json => {
            randomList.push(json);
            this.setState({ randomList });
          })
      );
    }
  }
  render() {
    const { series, seriesName, people, personName, isFetching } = this.state;
    return (
      <div>
        <div className="movie-search">
          <div>
            <input
              type="text"
              value={seriesName}
              onChange={this.onSeriesInputChange}
            />
          </div>

          {series.length === 0 &&
            seriesName.trim() === "" && (
              <p>Please enter series name into the input</p>
            )}
          {series.length === 0 &&
            seriesName.trim() !== "" && (
              <p>No TV serieas have been found with this name</p>
            )}
          {isFetching && series.length !== 0 && <Loader />}
          {!isFetching && <SeriesList list={this.state.series} />}
        </div>
        <div className="people-search">
          <div>
            <input
              type="text"
              value={personName}
              onChange={this.onPeopleInputChange}
            />
          </div>
          {people.length === 0 &&
            personName.trim() === "" && (
              <p>Please enter actors name into the input</p>
            )}
          {people.length === 0 &&
            personName.trim() !== "" && (
              <p>No actors have been found with this name</p>
            )}
          {isFetching && people.length !== 0 && <Loader />}
          {!isFetching && <PeopleList list={this.state.people} />}
        </div>
        <RandomSeries list={this.state.randomList} />
      </div>
    );
  }
}

export default Series;
