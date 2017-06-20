"use strict";

import Header from "./Header";
import Routes from "./../routes";

let React = require("react");

class App extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <Header />
       <Routes />
      </div>
    )
  }
}

export default App;
