import React from 'react';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';
import Spinner from './Spinner';

const Home = ({searchTerm, isFetching, pokemons, actions}) => {
  return (
    <div>
      <SearchBar searchTerm={searchTerm} onType={actions.setSearchTerm} />
      {isFetching && pokemons.length === 0 && <Spinner />}
      {pokemons && pokemons.length > 0 &&
        <PokemonList
          pokemons={pokemons}
          filter={searchTerm} />
      }
    </div>
  );
};

export default Home;
