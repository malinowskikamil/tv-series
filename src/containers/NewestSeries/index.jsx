import React, { Component } from "react";
import NewestContainer from "../../components/NewestContainer";
class NewestSeries extends Component {
  state = {
    newestList: []
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
        this.setState({ newestList });
      });
    });
  }

  render() {
    return <NewestContainer newestList={this.state.newestList} />;
  }
}

export default NewestSeries;
