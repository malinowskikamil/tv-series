import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkContent from "./LinkContent";
class RandomActor extends Component {
  state = {};
  render() {
    const { item } = this.props;
    return (
      <Link
        to={`people/${item.id}`}
        target="_blank"
        className="single-item"
        data-rating=""
      >
        {item.status !== 404 && <LinkContent item={item} />}
      </Link>
    );
  }
}

export default RandomActor;
