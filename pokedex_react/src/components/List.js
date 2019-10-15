  
import React, {Component} from "react";
import ImgPokemon from './ImgPokemon.js';
import { BrowserRouter as Link, Route, Router } from "react-router-dom";
import InfoPokemon from './InfoPokemon.js';


class List extends Component {

    constructor(props) {
      super(props);
      this.state = { data : [] }
    }

    componentDidUpdate() {
        if (this.props.data !== this.state.data) {
            this.setState({data : this.props.data});
        }
    }


    render(){
        return(
            <ul>
                {this.state.data.map((pokemon, i) => (
                    <div key={pokemon.name} className="App">
                            <a href={'/' + pokemon.name}> <h2> {pokemon.name}</h2> </a>
                            <p> {pokemon.url}</p>
                    
                    <ImgPokemon url={pokemon.url} />
                    </div>
                ))
                }
            </ul>
        )
    };
}
    

export default List;