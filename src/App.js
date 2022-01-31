import React from 'react';
//import './logo.svg'
//import './App.css';
//import { Route } from "react-router-dom";



//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from './HOC/Movie.HOC';

//components
//import Temp from './components/temp';
import HomePage from './pages/Home.page';
import Movie from './pages/Movie.page';

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movies/:id" exact component={Movie} />
    </>
  );
}

// / , /movie

export default App;

// temp.js-> default layout -> DeafaultHOC -> App.js -> Index.js
//inner->outer

//function Name1() {
//  return <h1>Hello Root</h1>
//}

//function Name2() {
//  return <h1>Hello Movie</h1>
//}
