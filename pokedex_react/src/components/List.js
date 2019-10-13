  
import React from "react";


const List = ({ data }) => (
    <ul>
      {data.map((pokemon, i) => (
          <div key={i} className="App">
            <h2> {pokemon.name}</h2>
            <div>
            <p> {pokemon.url} </p>
            </div>
        </div>
      ))
      }
    </ul>
  );

export default List;