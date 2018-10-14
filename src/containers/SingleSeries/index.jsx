import React, { Component } from "react";
import ShowView from "../../components/ShowView";
class SingleSeries extends Component {
  state = {
    show: null,
    showCast: [],
    showCrew: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`).then(response =>
      response.json().then(show => this.setState({ show }))
    );
    fetch(`https://api.tvmaze.com/shows/${id}/crew`).then(response =>
      response.json().then(showCrew => this.setState({ showCrew }))
    );
    fetch(`https://api.tvmaze.com/shows/${id}/cast`).then(response =>
      response.json().then(showCast => this.setState({ showCast }))
    );
  }
  render() {
    const { show, showCast, showCrew } = this.state;

    return (
      <div>
        {show !== null && (
          <ShowView show={show} showCast={showCast} showCrew={showCrew} />
        )}
      </div>
    );
  }
}

export default SingleSeries;
