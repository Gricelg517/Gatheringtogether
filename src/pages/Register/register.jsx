import "./register.scss"

const register = () => {
            return (
          <div className="register">
              <div className="card">
                  <div className="left">
                      <h1>Let's Gather!</h1>
                      <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui doloremque nesciunt 
                      necessitatibus eius neque cupiditate pariatur modi atque porro eligendi mollitia nam adipisci, 
                      assumenda consequatur blanditiis ut iure.
                      </p>
                          <span>Don't you have an account?</span>
                          <Link to="Register"> 
                            <button>Login</button>
                            </Link>
                  </div>
                      <div className="right">
                          <h1>Register</h1>
                              <form>
                                  <input type="text" placeholder="Username" />
                                  <input type="email" placeholder="Email" />
                                  <input type="password" placeholder="Password" />
                                  <input type="text" placeholder="Name" />
                                  <button>Register</button>
                              </form>
                      </div>    
                   </div>    
              </div>
          );
      };

export default register