import React, { Component } from "react";
import Search from "../../components/Search";
import RandomSeries from "../../components/RandomSeries";
class Series extends Component {
  state = {
    randomList: [],
    randomIds: []
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
      fetch(`https://api.tvmaze.com/shows/${randomIds[i]}?embed=episodes`).then(
        response =>
          response.json().then(json => {
            randomList.push(json);
            this.setState({ randomList });
          })
      );
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
