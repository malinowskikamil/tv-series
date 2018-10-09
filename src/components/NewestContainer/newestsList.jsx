import React, { Component } from "react";
import { Link } from "react-router-dom";
class NewestsList extends Component {
  render() {
    const { newestList } = this.props;
    return (
      <div className="newests-list-container">
        {newestList.map(item => (
          <Link
            key={item.id}
            className="single-item"
            to={`/series/${item._embedded.show.id}`}
          >
            <img src={item._embedded.show.image.medium} alt="" />
            <span className="item-name">
              {item._embedded.show.name} - {item.name}
            </span>
          </Link>
        ))}
      </div>
    );
  }
}

export default NewestsList;
