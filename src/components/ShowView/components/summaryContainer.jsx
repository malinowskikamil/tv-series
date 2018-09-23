import React, { Component } from "react";
class SummaryContainer extends Component {
  render() {
    const { show } = this.props;

    return (
      <div
        className="show-summary"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
    );
  }
}

export default SummaryContainer;
