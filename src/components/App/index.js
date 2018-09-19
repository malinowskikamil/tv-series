import React, { Component } from "react";
import Main from "../Main";
import "./App.css";
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
