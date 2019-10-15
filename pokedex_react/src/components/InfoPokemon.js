import React, {Component} from "react";
import Axios from 'axios';

class ImgPokemon extends Component {

    constructor(props) {
      super(props);
      this.state = { data : [], abilities : [], imgFront : "", stats : [], types : [], namePoke : props.match.params.namePoke, isLoader : false};
    }

   

    async componentDidMount() {
        this.setState({ isLoader: true });
        console.log(this.props.match.params.namePoke);
        try {
            const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/'+this.state.namePoke);
            const data = response.data;
            const abilities = data.abilities;
            const imgFront = data.sprites.front_default;
            const stats = data.stats;
            const types = data.types;

    
            this.setState({ 
                data : data, 
                abilities : abilities, 
                imgFront : imgFront,
                stats : stats,
                types : types,
                isLoader : false });
        } catch (error) {
            this.setState({ isLoader : false });
            console.log(error);
            throw error;
        }
    }

    render() {
      return (
        <div>           
            <div className='infoPokemon'>
                <table>
                    <thead>
                        <tr>
                            <td colSpan='2'>
                                <b>{this.state.namePoke.toUpperCase()}</b>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={this.state.imgFront} alt='Rendu du pokemon' />
                            </td>
                            <td>
                                <p> Weight : {this.state.data.weight}</p>
                                <p> Height : {this.state.data.height} </p>
                            </td>
                        </tr>

                        <tr>
                            <td>Habilities</td>
                            <td>
                                {this.state.abilities.map((pokemon, i) => {
                                    if(i<3){
                                        return(
                                        <div key={pokemon.ability.name} className="App">
                                            <p> {pokemon.ability.name.toUpperCase()}</p>
                                        </div>
                                        );
                                    }    
                                    }       
                                )}
                            </td>
                        </tr>


                        <tr>
                            <td>Statistics</td>
                            <td>
                                {this.state.stats.map((pokemon, i) => (
                                        <div key={pokemon.stat.name} className="App">
                                        <p> {pokemon.stat.name.toUpperCase()} : {pokemon.base_stat}</p>
                                    </div>
                                    
                                    )     
                                )}
                            </td>
                        </tr>

                        <tr>
                            <td>Type(s)</td>
                            <td>
                                {this.state.types.map((pokemon, i) => (
                                        <div key={pokemon.type.name} className="App">
                                            <p> {pokemon.type.name.toUpperCase()}</p>
                                        </div>
                                    )     
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='retourAccueil'>
                <a href='/'> Retour </a> 
            </div>
        </div>
      );
    }

}

export default ImgPokemon;