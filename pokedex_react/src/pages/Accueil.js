import React, { Component } from "react";
import List from "../components/List.js";
import Form from "../components/Form.js";

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], newData:[], valueResearch: "", test : 0};
        
    }


    componentDidMount() {
        // Utilisation classique (pensez bien à comparer les props) :
        if ( this.state.test !== 2){
            if (this.props.data !== this.state.data) {
            this.setState({data : this.props.data, test : this.state.test+1});
            this.setState({newData : this.state.data});
            }
        }
        
    }
  

    handleChange = e => {
        const result = this.state.data.filter(pokemon =>
        pokemon.name.toUpperCase().includes(e.currentTarget.value.toUpperCase())
        );

        console.log(result);
        this.setState({
            newData: result,
            valueResearch: e.currentTarget.value.toUpperCase() //e est l'event
        });

        
    };



  render() {
    return (
      <div className="App">
        <h1> Bienvenue sur le Pokedex </h1>
        <Form
          valueResearch={this.state.valueResearch}
          changeValue={this.handleChange}
        />
         {this.state.newData.length === 0 ? <List data={this.state.data} /> : <List data={this.state.newData} /> }
        
      </div>
    );
  }
}
export default Accueil;