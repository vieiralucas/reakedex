import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../store';
import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';
import PokemonPage from '../components/PokemonPage';

import * as actionCreators from '../actions/actionCreators';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchPokemons();
  }

  render() {
    return React.cloneElement(this.props.children, this.props);
  };
}
const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    isFetchingPokemons: state.isFetchingPokemons,
    searchTerm: state.searchTerm,
    pokemon: state.pokemon,
    isFetchingPokemon: state.isFetchingPokemon,
    searchTerm: state.searchTerm
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
