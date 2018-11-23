import React, { Component } from "react";
import { Link } from "react-router-dom";
import empty from "../../../assets/empty.png";
class CrewContainer extends Component {
  render() {
    const { showCrew } = this.props;
    return (
      <div className="show-box">
        <h2 className="title">Crew</h2>
        <div className="box-list">
          {showCrew.map((item, index) => (
            <Link
              key={item.person.id + index}
              to={`/people/${item.person.id}`}
              className="box-item crew-box"
            >
              <div className="image">
{             console.log(index)
}
                <img
                  src={
                    item.person.image !== null
                      ? item.person.image.medium
                      : empty
                  }
                  alt=""
                />
              </div>
              <span className="crew-name">
                {item.person.name} - {item.type}
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default CrewContainer;
