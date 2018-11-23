import React, { Component } from "react";
import "./index.css";
import empty from "../../../assets/empty.png";

class SearchResult extends Component {
  render() {
    const { data } = this.props;
    return (
      <div
        className={`results-holder random-list ${
          data.length > 0 ? "open" : ""
        }`}
      >
        {data.map(({ show, person }) => {
          let array = null;
          if (show) {
            array = show;
            array.url = `series/${array.id}`
          } else if (person) {
            array = person;
            array.url = `people/${array.id}`
          }
          return (
            <a
              className="single-item"
              data-rating=""
              href={array.url}
              key={array.id}
            >
              <div className="image-holder">
                <img
                  src={
                    array.image && array.image.medium !== undefined
                      ? array.image.medium
                      : empty
                  }
                  alt=""
                />
              </div>
              <div className="hidden-content">
                <p className="series-name">{array.name}</p>
                <p className="series-genre">
                  {/* {
                          genres.map(genre => (
                              <span>{genre}</span>
                          ))
                      } */}
                </p>
                {array.rating && array.rating.average && (
                  <p className="series-rate">Rating: {array.rating.average}</p>
                )}
                <p className="series-episodes">Runtime: {array.runtime} min</p>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default SearchResult;
