import React from "react";
import { Link, Outlet } from "react-router-dom";
import BannerImage from "../../assets/banner.jpg"

import "./Home.css";
import { Container } from "@mui/material";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            
            <Outlet />
        </div>
    );
}

function Home() { 
    return (
        <div className="home">
            <div 
             className="HeaderContainer" 
             style={{backgroundImage:`url(${BannerImage})`}}>
                <Container>
                <h1> Gathering Together</h1>
                </Container>
                
                    <p> Prayer is a powerful and effective way to connect with God  </p>   
                  <Link to="/prayer">
                    <button> Prayer Group</button>
                   </Link>
                   <Link to="/wordship">
                    <button> Wordship Group</button>
                   </Link>
                   <Link to="/events">
                    <button> Events</button>
                   </Link>
                
                         
            </div>
        </div>  
    );
}

export default Home;
