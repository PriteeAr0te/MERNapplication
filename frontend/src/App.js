import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import About from './Components/About';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';



const App = () => {
  return (
      <>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactme" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </>
  
  )
}

export default App
