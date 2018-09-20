import React, { Component } from "react";
import SeriesList from "../components/SeriesList";
import Loader from "../../Loader";

class SeriesSearch extends Component {
  render() {
    const { series, seriesName, isFetching } = this.props;

    return (
      <div className="series-search">
        <div>
          <input
            type="text"
            value={seriesName}
            onChange={this.props.onChange()}
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
        {!isFetching && <SeriesList list={this.props.series} />}
      </div>
    );
  }
}

export default SeriesSearch;
