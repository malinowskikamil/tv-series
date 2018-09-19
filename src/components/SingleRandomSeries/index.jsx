import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkContent from "./components/LinkContent";
import "./index.css";

class SingleRandomSeries extends Component {
  render() {
    const { item } = this.props;
    return (
      <Link
        to={`series/${item.id}`}
        target="_blank"
        className="single-item"
        data-rating=""
      >
        {item.status !== 404 && <LinkContent item={item} />}
      </Link>
    );
  }
}

export default SingleRandomSeries;
