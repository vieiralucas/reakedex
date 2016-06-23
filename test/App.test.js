import { expect } from 'chai';
import React from 'react';
import { renderShallow } from './TestUtils';
import App from '../src/App';

describe('App.js', function() {
  it('should render <h1>Hello, world.</h1>', function() {
    const renderOutput = renderShallow(<App />);
    expect(renderOutput).to.eql(<h1>Hello, world.</h1>);
  });
});
