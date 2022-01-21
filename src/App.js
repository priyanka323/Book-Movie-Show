import React from 'react';
//import './logo.svg'
//import './App.css';
import { Route } from "react-router-dom";



//HOC
import DefaultHOC from "./HOC/Default.HOC";

//components
import Temp from './components/temp';


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp} />
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
