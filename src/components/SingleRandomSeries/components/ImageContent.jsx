import React, { Component } from "react";

class ImageContent extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="image-holder">
        <img src={item.image.medium} alt="" />
      </div>
    );
  }
}

export default ImageContent;
