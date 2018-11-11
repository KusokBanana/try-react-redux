import React, { Component } from "react";
import logo from "./../../logo.svg";

class Header extends Component {
  render() {
    const { addPoint } = this.props;
    const state = this;
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" placeholder="Type here name" id="typeName" />
          <button
            onClick={e => {
              const value = document.getElementById("typeName").value;
              if (value) addPoint(value);
            }}
          >
            Add
          </button>
        </header>
      </>
    );
  }
}

export default Header;
