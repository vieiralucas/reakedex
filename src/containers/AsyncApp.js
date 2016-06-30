import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';
import PokemonList from '../components/PokemonList';

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPokemons())
  }

  render() {
    const { pokemons, isFetching } = this.props;
    return (
      <div>
        {pokemons.isFetching && pokemons.pokemons.length === 0 &&
          <h2>Loading...</h2>
        }
        {pokemons.pokemons.length > 0 && 
          <PokemonList pokemons={pokemons.pokemons} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { pokemons, isFetching } = state

  return {
    pokemons,
    isFetching
  }
}

export default connect(mapStateToProps)(AsyncApp)
