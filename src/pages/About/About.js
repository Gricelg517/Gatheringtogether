import React from 'react'
import together from '../../assets/together.jpeg';
import './About.css';

function About() {
    return (
     <div className='about'>
       <div className='aboutTop'
         style={{backgroundImage:`url(${together})`}}></div>

       <div className="aboutBottom">
            <h1> ABOUT US</h1>
                 <p>We believe that prayer is a powerful and effective way for us to connect with God. 
                    Gathering Together is a free app that helps you to reach and join with borhters and sisters in faith
                    for prayers, wordship and events, and lets you share prayer, wordship and event request with other.</p>
        
        </div>
      </div>
                         
    );
}


export default About;

