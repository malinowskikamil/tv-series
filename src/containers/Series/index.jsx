import React, { Component } from "react";
import Search from "../../components/Search";
import RandomSeries from "../../components/RandomSeries";
import RandomActors from "../../components/RandomActors";
class Series extends Component {
  state = {
    randomSeries: [],
    randomActors: []
  };

  getSeries = () => {
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    let randomSeries = this.state.randomSeries;
    fetch(`https://api.tvmaze.com/shows/${randomNumber}?embed=episodes`).then(
      response => {
        if (response.ok) {
          response.json().then(json => {
            randomSeries.push(json);
            this.setState({ randomSeries });
          });
        } else {
          this.getSeries();
        }
      }
    );
  };
  getActors = () => {
    let randomNumber = Math.floor(Math.random() * 1000 + 1);
    let randomActors = this.state.randomActors;
    fetch(`https://api.tvmaze.com/people/${randomNumber}`).then(response => {
      if (response.ok) {
        response.json().then(json => {
          randomActors.push(json);
          this.setState({ randomActors });
        });
        console.log(randomActors);
      } else {
        this.getActors();
      }
    });
  };
  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      this.getSeries();
      this.getActors();
    }
  }
  render() {
    return (
      <div>
        <Search />
        <RandomSeries list={this.state.randomSeries} />
        <RandomActors list={this.state.randomActors} />
      </div>
    );
  }
}

export default Series;
