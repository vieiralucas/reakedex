require('./styles/main.less');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

window.onload = function() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
