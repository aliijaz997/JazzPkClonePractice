import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import Footer from './Components/Footer';
import Card from './Components/Card.js';
import Quickpackages from './Components/Quickpackages';
import Postpaid from './Components/Postpaid';
import Prepaid from './Components/Prepaid';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';


function App() {
  
  return (
    <div className="App">
      {/* <Navbar />
      <Routes>
            <Route path='/' element={< Container/>}></Route>
            <Route path='/quickpackages' element={< Quickpackages />}></Route>
            <Route path='/prepaid' element={< Prepaid />}></Route>
            <Route path='/card' element={< Card />}></Route>
            <Route path='/postpaid' element={< Postpaid />}></Route>
            <Route path='/login' element={< Login />}></Route>
            <Route path='/signup' element={< Signup />}></Route>
            
      </Routes>
      <Footer/>
      */}
  
    </div>
  )
}

export default App;
