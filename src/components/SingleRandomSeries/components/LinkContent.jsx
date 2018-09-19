import React, { Component } from "react";
import ImageContent from "./ImageContent";
import HiddenContent from "./HiddenContent";

class LinkContent extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <ImageContent item={item} />
        <HiddenContent item={item} />
      </div>
    );
  }
}

export default LinkContent;
