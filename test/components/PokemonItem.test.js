import { expect } from 'chai';
import React from 'react';
import PokemonItem from '../../src/components/PokemonItem';

describe('components/PokemonItem.js', function() {
  it('should render a pokemon name inside a li', function() {
    const onClickFunc = () => undefined;
    const component = <PokemonItem name={'Bulbasaur'} onClick={onClickFunc} />
    const renderOutput = renderShallow(component);

    expect(renderOutput).to.eql(<li onClick={onClickFunc}>Bulbasaur</li>);
  });
});
