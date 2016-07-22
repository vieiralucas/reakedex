import React, { PropTypes } from 'react';

const PokemonItem = ({ id, name, img }) => (
  <li className="pokemon-item">
    <img className="pokemon-img" src={img}></img>
    <span className="pokemon-name">{name}</span>
    <span className="pokemon-id">#{id}</span>
  </li>
)

export default PokemonItem;
