import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, createBrowserRouter, } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
//Import in all CSS and prestyled components
import './App.css';
  //Custom components making the general frame
import Navbar from './components/Navbar';

//Custome making routes
import Home from './pages/home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact';
import Login from '../pages/login/login';
import Register from '../pages/register/register';


function App() {
return(
  <div className="App">
    <Header /> 
    <Router>
    <Navbar />
      <div style={{paddingTop:'100px'}}>
        <Routes>
           <Route path="/home" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="/login" element={<Login />}/>
           <Route path="/register" element={<Register />}/>
        </Routes>
      </div>

      <Footer />
    </Router>
  </div>
 );
};



export default App;
