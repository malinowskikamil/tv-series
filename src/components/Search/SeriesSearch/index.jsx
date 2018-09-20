import React, { Component } from "react";
import SeriesList from "./SeriesList";

class SeriesSearch extends Component {
  render() {
    const { series, seriesName } = this.props;
    return (
      <div className="series-search">
        <div className="inp-group">
          <label htmlFor="seriesSearch">Search for Series</label>
          <input
            type="text"
            id="seriesSearch"
            value={seriesName}
            onChange={this.props.onChange()}
            onFocus={this.props.focus()}
            onBlur={this.props.blur()}
            onKeyUp={this.props.keyup()}
          />
        </div>
        {series.length !== 0 &&
          seriesName !== "" && <SeriesList list={series} />}
        {series.length === 0 &&
          seriesName !== "" && (
            <p className="error">No series found by that name</p>
          )}
      </div>
    );
  }
}

export default SeriesSearch;
