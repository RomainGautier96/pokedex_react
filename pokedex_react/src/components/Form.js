import React from "react";

const Form = ({ changeValue, valueResearch }) => (
  <div>
    <h2> Rechercher un Pokemon</h2>
    <div className="Status"> </div>
    <form onSubmit={ev => ev.preventDefault()}>
      <input onChange={ev => changeValue(ev)} /> <br />
    </form>

    <p> {valueResearch} </p>
  </div>
);

export default Form;