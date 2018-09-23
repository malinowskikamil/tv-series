import React, { Component } from "react";
import SeriesList from "./SeriesList";

class SeriesSearch extends Component {
  state = {
    isOpen: false
  };
  onInputBlur = e => {
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 300);
  };
  onKeyUp = () => {
    this.setState({ isOpen: true });
  };
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
            onKeyUp={this.onKeyUp}
            onBlur={this.onInputBlur}
          />
        </div>
        {series.length !== 0 &&
          seriesName !== "" && (
            <SeriesList list={series} isOpen={this.state.isOpen} />
          )}
        {series.length === 0 &&
          seriesName !== "" && (
            <p className="error">No series found by that name</p>
          )}
      </div>
    );
  }
}

export default SeriesSearch;
