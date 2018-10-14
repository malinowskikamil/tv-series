import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageContainer from "./components/imageContainer";
import SummaryContainer from "./components/summaryContainer";
import DescriptionContainer from "./components/descriptionContainer";
import SeriesContainer from "./components/seriesContainer";
import CastContainer from "./components/castContainer";
import CrewContainer from "./components/crewContainer";
import "./index.css";
import arrowBack from "../../assets/arrow-back.svg";

class ShowViev extends Component {
  render() {
    const { show, showCast, showCrew } = this.props;
    return (
      <div className="show-container">
        <div className="show-info">
          <ImageContainer show={show} />
          <DescriptionContainer show={show} />
        </div>
        <SummaryContainer show={show} />
        <SeriesContainer seasons={show} />
        {showCast.length > 0 && <CastContainer showCast={showCast} />}
        {showCrew.length > 0 && <CrewContainer showCrew={showCrew} />}
        <Link to="/" className="go-back">
          <img src={arrowBack} alt="" />
        </Link>
      </div>
    );
  }
}

export default ShowViev;
