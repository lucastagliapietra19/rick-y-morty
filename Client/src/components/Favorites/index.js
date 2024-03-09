import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { filterCards, orderCards, removeFav } from "../../redux/actions";

const Favorites = (props) => {
  const [aux, setAux] = useState(false);
  // esta es la forma si estuvireamos usando el connect
  // const { favorites, orderCards, filterCards } = props;

  // esta es la forma de traers estados de redux con el useSelector
  const favorites = useSelector((state) => state.myFavorites);
  console.log("soy el estado de redux", favorites);

  // esta es la forma de traer el dispatch de redux con el useDispatch
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    setAux(!aux);
    // esta seria la forma con el dispatch del connect
    // orderCards(e.target.value);

    // esta seria la forma con el useDispatch del react-redux
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    // esta seria la forma con el dispatch del connect
    // filterCards(e.target.value);

    // esta seria la forma con el useDispatch del react-redux
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <select onChange={handleOrder}>
        <option value='a'>Ascendente</option>
        <option value='d'>Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value='All'>All</option>
        <option value='Male'>Male</option>
        <option value='Female'> Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>unknown</option>
      </select>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {favorites.map(
          ({ id, name, status, gender, species, origin, image }) => {
            return (
              <div key={id}>
                <Card
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

// export default Favorites

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, { filterCards, orderCards, removeFav })(Favorites);
