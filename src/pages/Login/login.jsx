import React from "react";
import { Link } from "react-router-dom";
import "./login.scss"

const login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Welcome!</h1>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui doloremque nesciunt 
                necessitatibus eius neque cupiditate pariatur modi atque porro eligendi mollitia nam adipisci, 
                assumenda consequatur blanditiis ut iure.
                </p>
                    <span>Don't you have an account?</span>
                    <Link to="Register"> 
                      <button>Register</button>
                      </Link>
            </div>
                <div className="right">
                    <h1>Login</h1>
                        <form>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button>Login</button>
                        </form>
                </div>    
             </div>    
        </div>
    );
}

export default login;
