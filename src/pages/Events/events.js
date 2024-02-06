import React from 'react'
import Eventsdates from '../../assets/EventImg.jpeg';
import { Link } from "react-router-dom";
import "./Events.css";
import { Container } from "@mui/material";



function events() {
    return (
        <div className="events"style={{backgroundImage:`url(${Eventsdates})`}}>
          <div ClassName="HeaderContainer">
                < Container> 
                <h1> EVENTS</h1>
                </Container>
                 <p> Share your event with others</p>   
                  <Link to="/Add Event">
                    <button variant="light" size="lg">Add Even </button>
                   </Link>                                      
            </div>
        </div>
                            
       );
   }

export default events;
