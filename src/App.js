import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Switch, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

import './App.css';

  //Custom components making the general frame
import Navbar from './components/Navbar';

//Main pages routes
import Home from './pages/home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/login/login';
import Register from './pages/register/register';

//Group pages routes
import Events from "./pages/Events/events";
import WordshipGroup from "./pages/WordshipGroup/wordshipgroup";
import PrayerGroup from "./pages/PrayerGroup/prayergroup";




function App() {
return(
  <div className="App">
    
    <Router>
    <Navbar />
      <div style={{paddingTop:'100px'}}>
        <Routes>
           <Route path="/home" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="/login" element={<Login />}/>
           <Route path="/register" element={<Register />}/>

           <Route path="/events" element={<Events />}/>
           <Route path="/prayergroup" element={<PrayerGroup/>}/>
           <Route path="/wordshipgroup" element={<WordshipGroup />}/>
        </Routes>
      </div>
        
    </Router>
  </div>
 );
};



export default App;
