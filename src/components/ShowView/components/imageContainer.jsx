import React, { Component } from "react";
import emptyImage from "../../../assets/empty.png";

class ImageContainer extends Component {
  render() {
    const { show } = this.props;

    return (
      <div className="show-image">
        <img
          src={show.image ? show.image.original : emptyImage}
          alt={show.name}
        />
      </div>
    );
  }
}

export default ImageContainer;
