import React, { Component } from "react";
class ActorDescription extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className="description-holder">
        <h1 className="title">{person.name}</h1>
        {person.country !== null && <p>Country: {person.country.name}</p>}
        {person.country === null && <p>Country: no information</p>}
        {person.birthday !== null && <p>Birthday: {person.birthday}</p>}
        {person.country === null && <p>Birthday: no information</p>}
        {person.url !== null && (
          <a target="_blank" href={person.url}>
            Read more
          </a>
        )}
      </div>
    );
  }
}

export default ActorDescription;
