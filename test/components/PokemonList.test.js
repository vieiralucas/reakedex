import { expect } from 'chai';
import React from 'react';
import PokemonList from '../../src/components/PokemonList';

describe('components/PokemonList.js', function() {
  it('should render a ul of PokemonList', function() {
    const pokemons = [
      {
        id: 1,
        name: 'Bulbasaur'
      }
    ];
    const onPokemonClickFunc = () => undefined;
    const component = <PokemonList
      pokemons={pokemons}
      onPokemonClick={onPokemonClickFunc}
    />

    const renderOutput = renderShallow(component);

    expect(renderOutput.type).to.eql('ul');
    expect(renderOutput.props.children).to.have.length(1);
  });
});
