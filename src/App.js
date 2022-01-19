import React from 'react';
//import './logo.svg'
//import './App.css';
import {Route, Routes} from "react-router-dom";



//HOC
import DefaultHOC from "./HOC/Default.HOC";

//components
import Temp from './components/temp';


function App() {
  return (
    <>

      
        <Route path="/" exact component={<Temp/>}/>
        
      
    </>

    
  );
}

export default App;

//function Name1() {
//  return <h1>Hello Root</h1>
//}

//function Name2() {
//  return <h1>Hello Movie</h1>
//}
