require('./styles/main.less');

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

const rootEl = document.getElementById('root');

render(<Root />, rootEl);
