"use strict";

let React = require("react");
import { Switch, Route } from 'react-router-dom';
import AboutPage from "Components/AboutPage";
import TodoApp from "Components/todoApp";
import NotFound from "Components/404";

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={TodoApp}/>
      <Route path="/about" component={AboutPage}/>
      <Route component={NotFound}/>
    </Switch>
  </main>
)


export default Routes;
