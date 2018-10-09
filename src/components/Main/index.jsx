import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";
import SinglePerson from "../../containers/SinglePerson";
import NewestSeries from "../../containers/NewestSeries";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route exact path="/series/:id" component={SingleSeries} />
    <Route exact path="/people/:id" component={SinglePerson} />
    <Route exact path="/newests" component={NewestSeries} />
  </Switch>
);
export default Main;
