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
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
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
