import React, { Component } from "react";
import { Link } from "react-router-dom";
import empty from "../../../../assets/empty.png";
class ActorsCast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personCast: this.props.personCast
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.forceUpdate();
    }, 1000);
  }
  render() {
    const { personCast } = this.props;
    return (
      <div className="cast-box">
        <h2 className="title">Cast</h2>
        <div className="box-list">
          {personCast.map(item => (
            <Link
              to={`/series/${item.show_info.id}`}
              key={item.id}
              className="character-item"
            >
              <div className="character-image">
                <img
                  src={item.image !== null ? item.image.medium : empty}
                  alt={item.name}
                />
                <div className="hovered-content">
                  <p>{item.show_info.name}</p>
                </div>
              </div>
              <h3 className="character-name">{item.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default ActorsCast;
