import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL } from "../../hooks/useApp";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // promesas
    // axios(`${URL}${id}`).then(
    //   ({ data }) => {
    //     console.log('data', data);
    //     if (data.name) {
    //       setCharacter(data);
    //     } else {
    //       window.alert('No hay personajes con ese I  D');
    //     }
    //   }
    // );

    // assync await
    // IIFE
    (async () => {
      try {
        const getCharacter = await axios(`${URL}${id}`);
        // console.log("getCharacter", getCharacter);

        if (getCharacter.data.name) {
          setCharacter(getCharacter.data);
          // console.log("getCharacter.data", getCharacter.data.origin);
        } else {
          window.alert("No hay personajes con ese I  D");
        }
      } catch (error) {
        // console.log("error", error);
      }
    })();

    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character.name && <h1>{character.name}</h1>}
      <img src={character.image} alt={character.name} />
      <h3>{character.status} </h3>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      {character.origin && <h2>{character.origin.name}</h2>}
    </div>
  );
};

export default Detail;
