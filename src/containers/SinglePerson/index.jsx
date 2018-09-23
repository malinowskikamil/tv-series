import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <div>
        {person === null && <p>No Information</p>}
        {person !== null && (
          <div>
            <p>{person.name}</p>
            {person.country !== null && <p>{person.country.name}</p>}
            {person.country === null && <p>no information</p>}
            {person.image !== null && <img src={person.image.medium} alt="" />}
            {person.image === null && <p>no image</p>}
            <Link to="/">Back</Link>
          </div>
        )}
      </div>
    );
  }
}

export default SinglePerson;
