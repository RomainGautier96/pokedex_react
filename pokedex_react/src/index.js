import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "./components/Loader.js";
import List from "./components/List.js";
import Axios from 'axios';
import Accueil from "./pages/Accueil.js"

class App extends Component {

    constructor(props) {
      super(props);
      this.state = { data: [], isLoading: false };
    }
    
    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            const response = await Axios.get(
            "https://pokeapi.co/api/v2/pokemon/?limit=964"
            );
            const data = response.data.results;

    
            this.setState({ data: data, isLoading: false });
        } catch (error) {
            this.setState({ isLoading: false });
            console.log(error);
            throw error;
        }
    }

    render() {
      return (
        <div>
          <Accueil data={this.state.data} />
        </div>
      );
    }

   
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
