import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AddMovies from './components/AddMovies';
import NavBar from './components/NavBar';
import EditMovies from './components/EditMovies';
import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import HomePage from './components/HomePage';
import AllMovies from './components/AllMovies';
import EditMoviesById from './components/EditMoviesById';

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/addmovies" element={<AddMovies />} /> 
          <Route path="/allmovies" element={<AllMovies />} /> 
          <Route path="/editmovies" element={<EditMovies />} />
          <Route path="/editmovies/:id" element={<EditMoviesById />} />           
        </Routes> 
      </main>
    </React.Fragment>
  );
}

export default App;
