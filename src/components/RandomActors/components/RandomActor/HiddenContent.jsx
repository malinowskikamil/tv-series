import React, { Component } from "react";

class HiddenContent extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="hidden-content">
        <p className="series-name">{item.name}</p>
      </div>
    );
  }
}

export default HiddenContent;
