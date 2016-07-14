import { expect } from 'chai';
import currentPokemon from '../../src/reducers/currentPokemon';
import { setCurrentPokemon } from '../../src/actions';

describe('reducers/currentPokemon', function() {
  it('should return pokemon from action on SET_CURRENT_POKEMON', function() {
    const bulbasaur = {
      id: 1,
      name: 'Bulbasaur',
      img: 'bulbasaur img here'
    };
    const ivysaur = {
      id: 2,
      name: 'Ivysaur',
      img: 'Ivysaur img here'
    };
    const action = setCurrentPokemon(bulbasaur);

    expect(currentPokemon(ivysaur, action)).to.be.deep.equal(bulbasaur);
  });

  it('should return the same state othewise', function() {
    const bulbasaur = {
      id: 1,
      name: 'Bulbasaur',
      img: 'bulbasaur img here'
    };
    const action = {nop: 'lols'};

    expect(currentPokemon(bulbasaur, action)).to.be.deep.equal(bulbasaur);
  });
});
