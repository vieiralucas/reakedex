import React, { PropTypes } from 'react';

const PokemonItem = ({ name, img, onClick }) => (
  <li className="pokemon-item" onClick={onClick}>
    <img className="pokemon-img" src={img}></img>
    <span className="pokemon-name">{name}</span>
  </li>
)

export default PokemonItem;
