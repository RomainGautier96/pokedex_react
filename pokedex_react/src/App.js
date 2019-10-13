import React, {Component} from 'react';
import './App.css';
import Axios from "axios";
import List from "./components/List.js"
import Loader from "./components/Loader.js"


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
       {this.state.isLoading ? <Loader /> : <List data={this.state.data} /> }
      </div>
    );
  }
}

export default App;
