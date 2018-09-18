import React, { Component } from "react";
import { Link } from "react-router-dom";
class SingleRandomSeries extends Component {
  render() {
    const { item } = this.props;
    return (
      <Link to={`/series/${item.id}`} target="_blank" className="single-item">
        <p>{item.name}</p>
        <div className="image-holder">
          {item.image !== null && <img src={item.image.medium} alt="" />}
          {item.image === null && <p>no image</p>}
        </div>
      </Link>
    );
  }
}

export default SingleRandomSeries;
