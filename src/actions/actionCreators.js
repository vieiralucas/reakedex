import 'whatwg-fetch';

import * as actionTypes from './actionTypes';

export const requestPokemons = () => ({
  type: actionTypes.REQUEST_POKEMONS
});

export const requestPokemon = () => ({
  type: actionTypes.REQUEST_POKEMON
});

export const receivePokemons = pokemons => ({
  type: actionTypes.RECEIVE_POKEMONS,
  pokemons
});

export const receivePokemon = pokemon => ({
  type: actionTypes.RECEIVE_POKEMON,
  pokemon
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

export const fetchPokemon = id => {
  return dispatch => {
    dispatch(requestPokemon());
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(pokemon => ({
        ...pokemon,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }))
      .then(pokemon => {
        dispatch(receivePokemon(pokemon));
        return pokemon;
      });
  };
};

const getNumber = pokemon => Number(pokemon.url.split('/').slice(-2).shift());
const generateImgUrl = pokemon => `https://pokeapi.co/media/sprites/pokemon/${getNumber(pokemon)}.png`;
