import 'whatwg-fetch';

import * as actionTypes from './actionTypes';

export const requestPokemons = () => ({
  type: actionTypes.REQUEST_POKEMONS
});

export const receivePokemons = pokemons => ({
  type: actionTypes.RECEIVE_POKEMONS,
  pokemons
});

export const setSearchTerm = term => ({
  type: actionTypes.SET_SEARCH_TERM,
  term
});

export const fetchPokemons = () => {
  return dispatch => {
    dispatch(requestPokemons());
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(pokemons => pokemons.results.map(p => ({
        id: getNumber(p),
        img: generateImgUrl(p),
        name: p.name.charAt(0).toUpperCase() + p.name.slice(1)
      })))
      .then(pokemons => {
        dispatch(receivePokemons(pokemons));
        return pokemons;
      });
  };
};

const getNumber = pokemon => Number(pokemon.url.split('/').slice(-2).shift());
const generateImgUrl = pokemon => `https://pokeapi.co/media/sprites/pokemon/${getNumber(pokemon)}.png`;
