import React, { Component } from "react";
import Search from "../../components/Search";
import RandomSeries from "../../components/RandomSeries";
class Series extends Component {
  state = {
    randomList: []
  };

  getSeries = () => {
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    let randomList = this.state.randomList;
    fetch(`https://api.tvmaze.com/shows/${randomNumber}?embed=episodes`).then(
      response => {
        if (response.ok) {
          response.json().then(json => {
            randomList.push(json);
            this.setState({ randomList });
          });
        } else {
          this.getSeries();
        }
      }
    );
  };

  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      this.getSeries();
    }
  }
  render() {
    return (
      <div>
        <Search />
        <RandomSeries list={this.state.randomList} />
      </div>
    );
  }
}

export default Series;
