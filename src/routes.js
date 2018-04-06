import React from "react";

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import Home from "./Home";
import App from "./App";
import SomeSite from "./SomeSite/SomeSite";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/SomeSite" component={SomeSite} />
    </Route>
  </Router>
);
