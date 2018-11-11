import React, { Component } from "react";
import "./App.sass";
import Main from "../containers/Main";
import Header from "../containers/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
