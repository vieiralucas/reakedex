import React from 'react';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';

const Home = ({searchTerm, isFetching, pokemons, actions}) => {
  return (
    <div>
      <SearchBar searchTerm={searchTerm} onType={actions.setSearchTerm} />
      {isFetching && pokemons.length === 0 &&
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      }
      {pokemons && pokemons.length > 0 &&
        <PokemonList
          pokemons={pokemons}
          filter={searchTerm} />
      }
    </div>
  );
};

export default Home;
