import React, { Component } from "react";
import Search from "../../components/Search";
import RandomSeries from "../../components/RandomSeries";

class Series extends Component {
  state = {
    series: [],
    isLoadedSeries: false
  };

  getSeries = () => {
    fetch('http://api.tvmaze.com/shows')
      .then(response => {
        response.json().then(responeItems => {
          const series = [...this.state.series];
          responeItems.map(item => {
           return item.image !== null && item.type !== 'Talk Show' && item.type !== 'Reality' && item.type !== 'Animation' && item.rating !== null && item.rating.average > 6 && item.language !== 'Japanese' && series.push(item);
          });
          return this.setState({series, isLoadedSeries: true })
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getSeries();
  }
  render() {
    const { isLoadedSeries, series } = this.state;
    return (
      <div className="main-container">
        <Search />
        <RandomSeries list={series} isLoaded={isLoadedSeries} />
      </div>
    );
  }
}

export default Series;
