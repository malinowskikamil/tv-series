import React from "react";
import { Link } from "react-router-dom";

const PeopleListItem = ({ people }) => (
  <li>
    <Link to={`people/${people.person.id}`}>{people.person.name}</Link>
  </li>
);

const PeopleList = props => {
  return (
    <div className="dropdown-list">
      <ul className="series-list">
        {props.list.map(people => (
          <PeopleListItem people={people} />
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
