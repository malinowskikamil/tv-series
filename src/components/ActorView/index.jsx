import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/arrow-back.svg";
import "./index.css";
import ActorImage from "./components/ActorImage";
import ActorDescription from "./components/ActorDescription";
import ActorsCast from "./components/ActorsCast";
class ActorView extends Component {
  render() {
    const { person, personCast } = this.props;
    return (
      <div className="actor-container">
        <ActorImage person={person} />
        <ActorDescription person={person} />
        <ActorsCast personCast={personCast} />
        <Link to="/" className="go-back">
          <img src={arrowBack} alt="arrow-back" />
        </Link>
      </div>
    );
  }
}

export default ActorView;
