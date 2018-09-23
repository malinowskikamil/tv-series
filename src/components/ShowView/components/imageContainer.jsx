import React, { Component } from "react";

class ImageContainer extends Component {
  render() {
    const { show } = this.props;

    return (
      <div className="show-image">
        <img src={show.image.original} alt={show.name} />
      </div>
    );
  }
}

export default ImageContainer;
