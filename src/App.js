import React from 'react';
import Header from './components/header/Header';
import './App.scss';
import './helpers/fonts.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import MovieDetailsPage from './pages/movieDetails/MovieDetailsPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
