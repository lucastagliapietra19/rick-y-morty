import {
  ADD_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  REMOVE_FAV,
} from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      console.log("payload", payload);
      return { ...state, myFavorites: payload, allCharacters: payload };
      // return {
      //   ...state,
      //   // spread operator
      //   allCharacters: [...state.allCharacters, payload],
      //   myFavorites: [...state.myFavorites, payload],

      //   // concat
      //   // myFavorites: state.myFavorites.concat(payload),

      //   // push
      //   // myFavorites: state.myFavorites.push(payload),
      // };
    case REMOVE_FAV:
      // return {
      //   ...state,
      //   myFavorites: state.myFavorites.filter((item) => item.id !== payload),
      // };
      return { ...state, myFavorites: payload };
    case FILTER_CARDS:
      if (payload.toUpperCase() === "ALL") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      }
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (item) => item.gender.toUpperCase() === payload.toUpperCase()
        ),
      };

    case ORDER_CARDS:
      if (payload.toUpperCase() === "A") {
        return {
          ...state,
          // esta forma es con localeCompare
          // myFavorites: state.allCharacters.sort((a, b) => a.name.localeCompare(b.name)),
          //
          myFavorites: state.allCharacters.sort((a, b) =>
            a.name > b.name ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) =>
            a.name < b.name ? 1 : -1
          ),
        };
      }

    default:
      return state;
  }
};

let a = [
  {
    saludo: "andres",
  },
  {
    saludo: "andrez",
  },
];

a.sort((a, b) => a.saludo - b.saludo);

export default reducer;
