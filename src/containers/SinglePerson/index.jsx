import React, { Component } from "react";
import ActorView from "../../components/ActorView";
class SinglePerson extends Component {
  state = {
    person: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/people/${id}`).then(response =>
      response.json().then(json => this.setState({ person: json }))
    );
  }
  render() {
    const { person } = this.state;
    return (
      <div className="main-container">
        {person !== null && <ActorView person={person} />}
        {person === null && <p>No Information</p>}
      </div>
    );
  }
}

export default SinglePerson;
