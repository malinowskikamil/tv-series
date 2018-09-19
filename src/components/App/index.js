import React, { Component } from "react";
import Main from "../Main";
import "./App.css";
import "whatwg-fetch";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Main />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
