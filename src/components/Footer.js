import React from 'react';

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import '../Styles/Footer.css';



function Footer() {
return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
    
      </div>
      <p> &copy; 2024 GatheringTogether.com</p>
    </div>
  );
         
}

export default Footer;
