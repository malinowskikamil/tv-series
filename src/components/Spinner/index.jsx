import React, { Component } from "react";
import "./index.css";
class Spinner extends Component {
  render() {
    const { isLoaded } = this.props;

    return <div className={`lds-circle ${isLoaded ? "hide" : ""}`} />;
  }
}

export default Spinner;
