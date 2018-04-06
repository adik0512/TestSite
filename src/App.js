import React, { Component } from "react";
import NaviBar from "./NaviBar/NaviBar";

class App extends Component {
  render() {
    return (
      <div>
        <NaviBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
