  
import React, {Component} from "react";
import ImgPokemon from './ImgPokemon.js';


class List extends Component {

    constructor(props) {
      super(props);
      this.state = { data : [] }
    }

    componentDidUpdate() {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.data !== this.state.data) {
            this.setState({data : this.props.data});
        }
    }

    render(){
        return(
        <ul>
        {this.state.data.map((pokemon, i) => (
            <div key={i} className="App">
                <h2> {pokemon.name}</h2>
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