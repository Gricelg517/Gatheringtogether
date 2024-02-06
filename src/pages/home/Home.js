import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/banner.jpg"

import "./Home.css";
import { Container } from "@mui/material";

function Home() { 
    return (
        <div className="home"style={{backgroundImage:`url(${BannerImage})`}}>
            <div 
             className="HeaderContainer">
                < Container> 
                <h1> Gathering Together</h1>
                </Container>
                 <p> Prayer is a powerful and effective way to connect with God  </p>   
                  <Link to="/prayer">
                    <button> Prayer Group</button>{' '}
                   </Link>
                   <Link to="/wordship">
                    <button> Wordship Group</button>{' '}
                   </Link>
                   <Link to="/events">
                    <button> Events</button>{' '}
                   </Link>
                
                         
            </div>
        </div>  
    );
}

export default Home;
