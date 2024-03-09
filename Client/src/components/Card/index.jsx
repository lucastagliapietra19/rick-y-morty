// con props
// export default function Card(props) {
//   return (
//     <div>
//       {/* <button onClick={}>X</button>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <img src={} alt='' /> */}
//       <h1>{props.name}</h1>
//       <h2>{props.status}</h2>
//       <h2>{props.species}</h2>
//       <h2>{props.gender}</h2>
//       <h2>{props.origin.name}</h2>
//       <img src={props.image} alt='foto' />
//       <button onClick={props.onClick}>X</button>
//     </div>
//   );
// }

// cons destructuring
// export default function Card({
// name,
// status,
// gender,
// species,
// origin,
// image,
// onClick,
// }) {
//   return (
//     <div>
//       {/* <button onClick={}>X</button>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <img src={} alt='' /> */}
//       <h1>{name}</h1>
//       <h2>{status}</h2>
//       <h2>{species}</h2>
//       <h2>{gender}</h2>
//       <h2>{origin.name}</h2>
//       <img src={image} alt='foto' />
//       <button onClick={onClick}>X</button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addFav, removeFav } from "../../redux/actions";

import { stylesLine } from "./stylesLine";
import "./styles.css";

const Card = (props) => {
  const {
    name,
    status,
    gender,
    species,
    origin,
    image,
    addFav,
    removeFav,
    favorites,
  } = props;
  const [isFav, setIsFav] = useState(false);

  console.log("props", props);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav({
        id: props.id,
        name,
        status,
        gender,
        species,
        origin,
        image,
      });
    }
  };

  //  formas de escribir colores

  // const color = 'yellow'
  // const color = '#000'
  // const color = 'rgb(0,0,0)'

  useEffect(() => {
   favorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [favorites]);

  return (
    <div className='container'>
      <img
        src={image}
        alt='foto'
        height={200}
        width={200}
        style={stylesLine.img}
      />
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Link to={`/detail/${props.id}`}>
        <h1
          style={{
            backgroundColor: "yellow",
            fontSize: 16,
          }}
        >
          {name}
        </h1>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
      <button
        onClick={() => removeFav(props.id)}
        style={{
          position: "absolute",
          top: 8,
          right: 6,
        }}
      >
        X
      </button>
    </div>
  );
};

// export default Card;

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, { addFav, removeFav, removeFav })(Card);
