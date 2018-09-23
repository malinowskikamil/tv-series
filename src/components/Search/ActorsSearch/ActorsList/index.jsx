import React from "react";
import { Link } from "react-router-dom";

const AcrtorListItem = ({ people }) => (
  <li>
    <Link to={`people/${people.person.id}`}>{people.person.name}</Link>
  </li>
);

const ActorsList = props => {
  return (
    <div className={`dropdown-list ${props.isOpen ? "open" : ""}`}>
      <ul className="series-list">
        {props.list.map(people => (
          <AcrtorListItem people={people} key={people.person.id} />
        ))}
      </ul>
    </div>
  );
};

export default ActorsList;
