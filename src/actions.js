import 'whatwg-fetch';

export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_PAGE = 'SET_PAGE';
export const SET_CURRENT_POKEMON = 'SET_CURRENT_POKEMON';

export const setPage = page => ({
  type: SET_PAGE,
  page
});

export const requestPokemons = () => ({
  type: REQUEST_POKEMONS
});

export const receivePokemons = pokemons => ({
  type: RECEIVE_POKEMONS,
  pokemons
});

export const setSearchTerm = term => ({
  type: SET_SEARCH_TERM,
  term
});

export const setCurrentPokemon = pokemon => ({
  type: SET_CURRENT_POKEMON,
  pokemon
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
      })
      .then(pokemons => dispatch(setCurrentPokemon(pokemons[0])));
  };
};

const getNumber = pokemon => Number(pokemon.url.split('/').slice(-2).shift());
const generateImgUrl = pokemon => `https://pokeapi.co/media/sprites/pokemon/${getNumber(pokemon)}.png`;
