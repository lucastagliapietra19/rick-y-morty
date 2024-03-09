import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
// import useApp from "./hooks/useApp";

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import { clearData } from "./redux/actions";
import { useDispatch } from "react-redux";

export const URL = "http://localhost:3001/rickandmorty/character/";
const access = {
  email: 'prueba@gmail.com',
  password: '123456',
  isLoged: false,
}

function App() {
  // con el custom hook
  // const {
  //    characters,
  //    onSearch,
  //    onClose,
  // } = useApp();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    // promesas
    // fetch(`${URL}${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('la data que nos lelga con el id', data);
    //     setCharacters([...characters, data]);
    //   });
    // .error((error) => console.log('error', error));

    // async await

    try {
      const response = await fetch(`${URL}${id}`);
      const data = await response.json();
      setCharacters([...characters, data]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const onClose = (id) => {
    const personajesFiltrados = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(personajesFiltrados);
  };

function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
       const { access } = data;
       console.log('data', data);
       // setAccess(data);
       access && navigate('/home');
    })
    .catch((error) => console.log('error', error));
    

}

  const logout = () => {
    alert('adios');
    access.isLoged = false;
    navigate('/');
  }

  // useEffect(() => {
  //   !access.isLoged && navigate('/');
  // }, [navigate, access.isLoged]);

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form loginUser={login} />} />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
