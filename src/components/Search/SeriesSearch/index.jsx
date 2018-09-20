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
          />
        </div>
        <SeriesList list={series} />
      </div>
    );
  }
}

export default SeriesSearch;
