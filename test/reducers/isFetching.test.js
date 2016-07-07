import { expect } from 'chai';
import isFetching from '../../src/reducers/isFetching';
import { requestPokemons, receivePokemons } from '../../src/actions';

describe('reducers/isFetching', function() {
  it('should return true on REQUEST_POKEMONS', function() {
    const action = requestPokemons();

    expect(isFetching(true, action)).to.be.true;
    expect(isFetching(false, action)).to.be.true;
  });

  it('should return false on RECEIVE_POKEMONS', function() {
    const action = receivePokemons();

    expect(isFetching(true, action)).to.be.false;
    expect(isFetching(false, action)).to.be.false;
  });

  it('should return the same state othewise', function() {
    const action = {nop: 'lols'};

    expect(isFetching(true, action)).to.be.true;
    expect(isFetching(false, action)).to.be.false;
  });
});
