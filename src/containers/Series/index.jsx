import React, { Component } from "react";
import Search from "../../components/Search";
import RandomSeries from "../../components/RandomSeries";
import RandomActors from "../../components/RandomActors";

class Series extends Component {
  state = {
    randomSeries: [],
    randomActors: [],
    countActors: 0,
    countSeries: 0,
    isLoadedActors: false,
    isLoadedSeries: false
  };

  getSeries = () => {
    let randomNumber = Math.floor(Math.random() * 10000 + 1);

    let randomSeries = this.state.randomSeries;
    fetch(`https://api.tvmaze.com/shows/${randomNumber}?embed=episodes`).then(
      response => {
        let countSeries = this.state.countSeries;
        if (response.ok) {
          response.json().then(json => {
            if (json.image !== null) {
              randomSeries.push(json);
              countSeries++;
              this.setState({ randomSeries, countSeries });
              countSeries >= 9 && this.setState({ isLoadedSeries: true });
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
            countActors++;
            this.setState({ randomActors, countActors });
            countActors >= 10 && this.setState({ isLoadedActors: true });
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
