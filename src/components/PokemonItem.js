import React, { PropTypes } from 'react';

const PokemonItem = ({ name, onClick }) => <li onClick={onClick}>{name}</li>;

PokemonItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PokemonItem;
