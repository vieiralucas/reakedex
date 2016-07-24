import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PokemonItem = ({ id, name, img }) => (
  <Link to={`/pokemon/${id}`}>
    <li className="pokemon-item">
      <img className="pokemon-img" src={img}></img>
      <span className="pokemon-name">{name}</span>
      <span className="pokemon-id">#{id}</span>
    </li>
  </Link>
)

export default PokemonItem;
