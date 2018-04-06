import React, { Component } from "react";
import { NavigationContainer, NaviItem } from "./NaviBar.style";
import ReallySmoothScroll from "really-smooth-scroll";

class NaviBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NaviItem to="/">Home</NaviItem>
        <NaviItem to="/SomeSite">SomeSite</NaviItem>
        <NaviItem>About</NaviItem>
      </NavigationContainer>
    );
  }
}

export default NaviBar;
