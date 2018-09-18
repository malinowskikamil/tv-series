import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
class SinglePerson extends Component {
  state = {
    person: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/people/${id}`).then(response =>
      response.json().then(json => this.setState({ person: json }))
    );
  }
  render() {
    const { person } = this.state;
    console.log(person);
    return (
      <div>
        {person === null && <Loader />}
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
