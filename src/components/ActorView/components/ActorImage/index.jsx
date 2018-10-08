import React, { Component } from "react";

class ActorImage extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className="image-holder">
        {person.image !== null && (
          <img src={person.image.original} alt={person.name} />
        )}
      </div>
    );
  }
}

export default ActorImage;
