"use strict";

let React = require("react");
import { Switch, Route } from 'react-router-dom';
import AboutPage from "./components/AboutPage";
import TodoApp from "./components/todoApp";

const Routes = () => (
  <main>
    <Switch>
      <Route path="/todo" component={TodoApp}/>
      <Route path="/about" component={AboutPage}/>
    </Switch>
  </main>
)


export default Routes;
