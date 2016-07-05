import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, setSearchTerm, applyFilter } from '../actions';
import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPokemons())
  }

  render() {
    const { pokemons, isFetching, searchTerm } = this.props;
    return (
      <div>
        <SearchBar searchTerm={searchTerm} onType={::this.setSearchTerm} />
        {isFetching && pokemons.length === 0 &&
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        }
        {pokemons.length > 0 && 
          <PokemonList pokemons={pokemons} filter={searchTerm} />
        }
      </div>
    )
  }

  setSearchTerm(event) {
    const { dispatch } = this.props;
    dispatch(setSearchTerm(event.target.value));
    dispatch(applyFilter());
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
    isFetching: state.isFetching,
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(AsyncApp)
