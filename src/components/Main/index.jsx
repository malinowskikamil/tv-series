import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";
import SinglePerson from "../../containers/SinglePerson";
const Main = props => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route exact path="/series/:id" component={SingleSeries} />
    <Route exact path="/people/:id" component={SinglePerson} />
  </Switch>
);
export default Main;
