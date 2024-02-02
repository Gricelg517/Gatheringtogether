import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/logo.jpg";
import "../Styles/Home.css";


function Home() { 
    return (
        <div className="home">
            <div 
             className="HeaderContainer" 
             style={{backgroundImage:`url(${BannerImage})` }}>
                <h1> Gathering Together</h1>
                    <p> Prayer is a powerful and effective way to connect with God  </p>   
                  <Link to="/contact">
                    <button> More Information</button>
                   </Link>
                
            </div>
        </div>  
    );
}

export default Home;
