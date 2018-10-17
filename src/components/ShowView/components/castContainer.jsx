import React, { Component } from "react";
import { Link } from "react-router-dom";
class CastContainer extends Component {
  render() {
    const { showCast } = this.props;
    return (
      <div className="show-box">
        <h2 className="title">Cast</h2>
        <div className="box-list">
          {showCast.map(item => (
          item.person.image !== null &&  <Link to={`/people/${item.person.id}`} className="box-item" key={item.person.id}>
              <div className="image">
                <img
                  src={
                    item.character.image !== null
                      ? item.character.image.medium
                      : item.person.image.medium
                  }
                  alt={item.character.name}
                />
                {item.person.image !== null && (
                  <img
                    className="hidden"
                    src={item.person.image.medium}
                    alt={item.person.name}
                  />
                )}
              </div>
              <span className="name">{item.character.name}</span>
              <span className="name-hidden">{item.person.name}</span>

            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default CastContainer;
