import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewestsList from "./newestsList";
import Select from "react-select";
import arrowBack from "../../assets/arrow-back.svg";

import "./index.css";

class NewestContainer extends Component {
  render() {
    const { newestList } = this.props;
    const optionsRating = [
      { value: "fromHigher", label: "From higher" },
      { value: "fromLower", label: "From lower" }
    ];
    const optionsCategory = [
      { value: "showAll", label: "Show All" },
      { value: "Action", label: "Action" },
      { value: "Adventure", label: "Adventure" },
      { value: "Children", label: "Children" },
      { value: "Comedy", label: "Comedy" },
      { value: "Crime", label: "Crime" },
      { value: "Family", label: "Family" },
      { value: "Fantasy", label: "Fantasy" },
      { value: "Horror", label: "Horror" },
      { value: "Legal", label: "Legal" },
      { value: "Medical", label: "Medical" },
      { value: "Music", label: "Music" },
      { value: "Mystery", label: "Mystery" },
      { value: "Romance", label: "Romance" },
      { value: "Science-Fiction", label: "Science-Fiction" },
      { value: "Supernatural", label: "Supernatural" },
      { value: "Thriller", label: "Thriller" }
    ];
    const customStyles = {
      option: base => ({
        ...base,
        color: "black"
      }),
      singleValue: (base, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...base, opacity, transition };
      }
    };
    return (
      <div className="newest-container">
        <h1>List of newests episodes</h1>
        <div className="content-wrapper">
          <aside className="filters-panel">
            <h3>Filters</h3>
            <div className="single-box">
              <span>Sort by rating:</span>
              <Select
                styles={customStyles}
                options={optionsRating}
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    text: "orangered",
                    primary25: "rgba(0,0,0,0.2)",
                    primary: "rgba(0,0,0,0.5)"
                  }
                })}
                onChange={inputValue => {
                  const value = inputValue.value;
                  this.props.handleChangeRating(value);
                }}
              />
            </div>
            <div className="single-box">
              <span>Sort by Category:</span>
              <Select
                styles={customStyles}
                options={optionsCategory}
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    text: "orangered",
                    primary25: "rgba(0,0,0,0.2)",
                    primary: "rgba(0,0,0,0.5)"
                  }
                })}
                onChange={inputValue => {
                  const value = inputValue.value;
                  this.props.handleChangeCategory(value);
                }}
              />
            </div>
          </aside>
          <NewestsList newestList={newestList} />
        </div>
        <Link to="/" className="go-back">
          <img src={arrowBack} alt="" />
        </Link>
      </div>
    );
  }
}

export default NewestContainer;
