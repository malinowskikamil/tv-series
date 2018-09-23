import React, { Component } from "react";
import ShowView from "../../components/ShowView";
class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`).then(response =>
      response.json().then(json => this.setState({ show: json }))
    );
  }
  render() {
    const { show } = this.state;
    console.log(show);
    return <div>{show !== null && <ShowView show={show} />}</div>;
  }
}

export default SingleSeries;
