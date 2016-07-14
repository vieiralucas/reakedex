import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, setSearchTerm, applyFilter, setPage, setCurrentPokemon } from '../actions';
import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';
import PokemonPage from '../components/PokemonPage';

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPokemons())
  }

  render() {
    const { page, currentPokemon, pokemons, isFetching, searchTerm } = this.props;
    return (
      <div>
        {page === 'home' &&
          <SearchBar searchTerm={searchTerm} onType={::this.setSearchTerm} />
        }
        {isFetching && pokemons.length === 0 &&
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        }
        {page === 'home' && pokemons.length > 0 &&
          <PokemonList
            pokemons={pokemons}
            filter={searchTerm}
            onPokemonClick={::this.onPokemonClick} />
        }
        {page === 'pokemon' &&
          <PokemonPage {...currentPokemon} />
        }
      </div>
    )
  }

  setSearchTerm(event) {
    const { dispatch } = this.props;
    dispatch(setSearchTerm(event.target.value));
    dispatch(applyFilter());
  }

  onPokemonClick(pokemon) {
    const { dispatch } = this.props;
    dispatch(setCurrentPokemon(pokemon));
    dispatch(setPage('pokemon'));
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
    pokemons: state.pokemons,
    currentPokemon: state.currentPokemon,
    isFetching: state.isFetching,
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(AsyncApp)
