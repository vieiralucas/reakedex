import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router';

import store, { history } from '../store'
import App from './App'
import Home from '../components/Home';
import PokemonPage from '../components/PokemonPage';

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/pokemon/:pokemonId" component={PokemonPage} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
