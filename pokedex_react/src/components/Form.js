import React from "react";

const Form = ({ changeValue, valueResearch }) => (


        <div>
    <h2> Rechercher un Pokemon</h2>
    <div className="Status"> </div>
    <form>
      <input onChange={ev => changeValue(ev)} />
    </form>

    <p> {valueResearch} </p>
  </div>
);
  


export default Form;