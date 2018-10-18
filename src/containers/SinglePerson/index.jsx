import React, { Component } from "react";
import ActorView from "../../components/ActorView";
class SinglePerson extends Component {
  state = {
    person: null,
    personCast: []
  };
  
  componentWillMount() {
    let https = (array) => {
      let arraySplited = array.split(':');
      arraySplited[0] = 'https';
      return  array = arraySplited.join(':');
    }
    const { id } = this.props.match.params;
    let personCast = this.state.personCast;
    fetch(`https://api.tvmaze.com/people/${id}`).then(response =>
      response.json().then(person => this.setState({ person }))
    );
    fetch(`https://api.tvmaze.com/people/${id}/castcredits`).then(response => {
      response.json().then(data => {
        for (let i = 0; i < data.length; i++) {
          let linkCharacter = https(data[i]._links.character.href);
          let linkShow = https(data[i]._links.show.href);
            fetch(linkCharacter).then(response => {
            response.json().then(item => {
              const showInfo = {};
              fetch(linkShow).then(responseShow => {
                responseShow.json().then(itemShow => {
                  showInfo.id = itemShow.id;
                  showInfo.name = itemShow.name;                
                  item.show_info = showInfo;
                })
              })
              personCast.push(item);
            });
          });
        }
        this.setState(personCast);
      });
    });
  }
  render() {
    const { person, personCast } = this.state;

    return (
      <div className="main-container">
        {person !== null && (
          <ActorView person={person} personCast={personCast}  />
        )}
        {person === null && <p>Uuuups, we have no information about this person :(((</p>}
      </div>
    );
  }
}

export default SinglePerson;
