import React, { Component } from "react";
import NewestContainer from "../../components/NewestContainer";
class NewestSeries extends Component {
  state = {
    newestList: [],
    newestListCopy: []
  };

  componentDidMount() {
    fetch("https://api.tvmaze.com/schedule/full").then(response => {
      response.json().then(json => {
        let newestList = json.filter(
          item =>
            item._embedded.show.image !== null &&
            item._embedded.show.rating.average !== null &&
            item._embedded.show.type !== "Animation" &&
            item._embedded.show.language !== "Korean" &&
            item._embedded.show.language !== "Russian" &&
            item._embedded.show.language !== "Hungarian" &&
            item._embedded.show.language !== "Swedish" &&
            item._embedded.show.language !== "Dutch" &&
            item._embedded.show.type !== "Sports" &&
            item._embedded.show.type !== "News" &&
            item._embedded.show.type !== "Game Show" &&
            item._embedded.show.type !== "Reality" &&
            item._embedded.show.type !== "Talk Show" &&
            item._embedded.show.type !== "Panel Show" &&
            item._embedded.show.type !== "Documentary" &&
            item._embedded.show.type !== "Reality"
        );
        newestList.sort((a, b) => {
          var nameA = a._embedded.show.name.toLowerCase(),
            nameB = b._embedded.show.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        for (let i = 1; i < 20; i++) {
          for (let i = 1; i < newestList.length; i++) {
            if (
              newestList[i]._embedded.show.id ===
              newestList[i - 1]._embedded.show.id
            ) {
              newestList.splice(i - 1, 1);
            }
          }
        }

        this.setState({
          newestList,
          newestListCopy: newestList
        });
      });
    });
  }
  handleChangeRating = value => {
    const newestList = this.state.newestList;
    switch (value) {
      case "fromLower":
        newestList.sort(
          (item, itemNext) =>
            item._embedded.show.rating.average >
            itemNext._embedded.show.rating.average
              ? 1
              : itemNext._embedded.show.rating.average >
                item._embedded.show.rating.average
                ? -1
                : 0
        );
        this.setState({
          newestList
        });
        break;
      case "fromHigher":
        newestList.sort(
          (item, itemNext) =>
            item._embedded.show.rating.average >
            itemNext._embedded.show.rating.average
              ? -1
              : itemNext._embedded.show.rating.average >
                item._embedded.show.rating.average
                ? 1
                : 0
        );
        this.setState({
          newestList
        });
        break;
      default:
        break;
    }
  };
  handleChangeCategory = value => {
    const option = value;
    const newestList = [...this.state.newestListCopy];
    const filteredList = [];
    if (option !== "showAll") {
      newestList.filter(item => {
        for (let i = 0; i < item._embedded.show.genres.length; i++) {
          item._embedded.show.genres[i] === option
            ? filteredList.push(item)
            : false;
        }
      });
      this.setState({
        newestList: filteredList
      });
    } else {
      this.setState({
        newestList
      });
    }
  };
  handleSearch = e => {
    const value = e.target.value;
    const newestList = [...this.state.newestListCopy];
    let searchingArray = [];
    for (let i = 0; i < newestList.length; i++) {
      let wordArray = newestList[i]._embedded.show.name.split(" ");
      for (let j = 0; j < wordArray.length; j++) {
        if (wordArray[j] === value || wordArray[j].toLowerCase() === value) {
          searchingArray.push(newestList[i]);
        }else if(value === '' || value === ' '){
          searchingArray = [];
          this.setState({ newestList });
          return false;
        }
      }
    }
    this.setState({ newestList: searchingArray });
  };
  render() {
    return (
      <NewestContainer
        newestList={this.state.newestList}
        handleChangeRating={this.handleChangeRating}
        handleChangeCategory={this.handleChangeCategory}
        handleSearch={this.handleSearch}
      />
    );
  }
}

export default NewestSeries;
