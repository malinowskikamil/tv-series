import React, { Component } from "react";
import Search from "../../components/Search";
import RandomSeries from "../../components/RandomSeries";
import RandomActors from "../../components/RandomActors";

class Series extends Component {
  state = {
    randomSeries: [],
    randomActors: [],
    isLoadedActors: false,
    isLoadedSeries: false
  };

  getSeries = () => {
    let randomNumber = Math.floor(Math.random() * 100000 + 1);

    let randomSeries = this.state.randomSeries;
    fetch(`https://api.tvmaze.com/shows/${randomNumber}?embed=episodes`).then(
      response => {
        let countSeries = this.state.countSeries;
        if (response.ok) {
          response.json().then(json => {
            if (json.image !== null) {
              randomSeries.push(json);
              this.setState({ randomSeries, countSeries });
              randomSeries.length === 10 &&
                this.setState({ isLoadedSeries: true });
            } else {
              this.getSeries();
            }
          });
        } else {
          this.getSeries();
        }
      }
    );
  };
  getActors = () => {
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    let randomActors = this.state.randomActors;
    fetch(`https://api.tvmaze.com/people/${randomNumber}`).then(response => {
      let countActors = this.state.countActors;
      if (response.ok) {
        response.json().then(json => {
          if (json.image !== null) {
            randomActors.push(json);
            this.setState({ randomActors, countActors });
            randomActors.length === 10 &&
              this.setState({ isLoadedActors: true });
          } else {
            this.getActors();
          }
        });
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
    const {
      isLoadedActors,
      isLoadedSeries,
      randomSeries,
      randomActors
    } = this.state;
    return (
      <div>
        <Search />
        <RandomSeries list={randomSeries} isLoaded={isLoadedSeries} />
        <RandomActors list={randomActors} isLoaded={isLoadedActors} />
      </div>
    );
  }
}

export default Series;
