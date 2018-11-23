import React, { Component } from "react";

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
    const { seriesName } = this.props;

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
      </div>
    );
  }
}

export default SeriesSearch;
