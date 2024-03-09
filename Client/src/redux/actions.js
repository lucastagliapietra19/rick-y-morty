import axios from 'axios';

import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
} from "./actions-types";

// export const addFav = (payload) => {
//   return {
//     type: ADD_FAV,
//     payload,
//   };
// };

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      console.log('data', data);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// };

export const removeFav = (id) => {
  console.log('id', id);
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      console.log('data', data);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};

export const filterCards = (payload) => {
  return {
    type: FILTER_CARDS,
    payload,
  };
}

export const orderCards = (payload) => {
  return {
    type: ORDER_CARDS,
    payload,
  };
}