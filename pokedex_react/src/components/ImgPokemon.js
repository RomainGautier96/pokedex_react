import React, {Component} from "react";
import Axios from 'axios';
import Loader from './Loader.js'

class ImgPokemon extends Component {

    constructor(props) {
      super(props);
      this.state = { img : "", pokeName : "", isLoader : false};
    }
    
    async componentDidMount() {
        this.setState({ isLoader: true });
        try {
            const response = await Axios.get( this.props.url );
            const img = response.data.sprites.front_default;
            const pokeName = response.data.species.name;

    
            this.setState({ img : img, pokeName : pokeName, isLoader : false });
        } catch (error) {
            this.setState({ isLoader : false });
            console.log(error);
            throw error;
        }
    }

    render() {
      return (
        <div>
            {this.state.isLoader ? <Loader /> : <p> <img src={this.state.img} /> Image de :  {this.state.pokeName} </p> }
        </div>
      );
    }

   
  }

export default ImgPokemon;