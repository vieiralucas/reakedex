import { expect } from 'chai';
import pokemons from '../../src/reducers/pokemons';
import { receivePokemons } from '../../src/actions';

describe('reducers/pokemons', function() {
  it('should return pokemons from action on RECEIVE_POKEMONS', function() {
    const action = receivePokemons([1, 2, 3]);

    expect(pokemons([], action)).to.eql([1, 2, 3]);
  });

  it('should return the same state othewise', function() {
    const action = {nop: 'lols'};

    expect(pokemons([1, 2, 3], action)).to.eql([1, 2, 3]);
  });
});
