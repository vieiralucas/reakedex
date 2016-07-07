import { expect } from 'chai';
import searchTerm from '../../src/reducers/searchTerm';
import { setSearchTerm } from '../../src/actions';

describe('reducers/setSearchTerm', function() {
  it('should return term from action on SET_SEARCH_TERM', function() {
    const action = setSearchTerm('search');

    expect(searchTerm('', action)).to.eql('search');
  });

  it('should return the same state othewise', function() {
    const action = {nop: 'lols'};

    expect(searchTerm('batman', action)).to.eql('batman');
  });
});
