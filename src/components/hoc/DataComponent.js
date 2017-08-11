import "isomorphic-fetch";
import {Component} from "react";
import Loader from "./Loader";

const DataComponent = (composedComponent, url) =>
  class DataComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false
      }
    }

    componentWillMount(){
      this.setState({ loading: true});
      fetch(url).then( response => response.json())
      .then(data => this.setState({
        loaded: true,
        loading: false,
        data
      }))
    }

    render(){
      return(
        <div className="data-component">
          {
            (this.state.loading) ?
            <Loader /> :
            <composedComponent {...this.state} {...this.props} />
          }
        </div>
      )
    }
  }

export default DataComponent;
