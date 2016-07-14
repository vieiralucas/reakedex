import { expect } from 'chai';
import page from '../../src/reducers/page';
import { setPage } from '../../src/actions';

describe('reducers/page', function() {
  it('should return page from action on SET_PAGE', function() {
    const action = setPage('pokemon');

    expect(page('home', action)).to.be.equal('pokemon');
  });

  it('should return the same state othewise', function() {
    const action = {nop: 'lols'};

    expect(page('home', action)).to.be.equal('home');
  });
});
