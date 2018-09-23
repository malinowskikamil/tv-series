import React, { Component } from "react";
import emptyImage from "../../../assets/empty.png";
class ImageContent extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="image-holder">
        <img src={`${item.image ? item.image.medium : emptyImage}`} alt="" />
      </div>
    );
  }
}

export default ImageContent;
