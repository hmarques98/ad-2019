import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import DrawPage from "./pages/DrawPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/draw-page" exact component={DrawPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
