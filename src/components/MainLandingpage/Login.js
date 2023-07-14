import React from "react";
import '../MainLandingpage/login-register.css'; // Import the CSS file for styling


const LoginPage = ({toggleForm}) => {
    return (
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
    
              <div className="field input-field">
                <input type="password" placeholder="Password" className="password" />
              </div>
    
              <div className="form-link">
                <a href="#" className="forgot-pass">Forgot password?</a>
              </div>
    
              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>
    
            <div className="form-link">
              <span>Don't have an account? <a href="#" className="link signup-link" onClick={toggleForm}>Signup</a></span>
            </div>
          </div>
    
          <div className="line"></div>
    
          <div className="media-options">
            <a href="#" className="field google">
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      );
};

export default LoginPage;
