import React from "react";
import '../MainLandingpage/login-register.css'; // Import the CSS file for styling

const RegisterPage = ({toggleForm}) => {
    return (
        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
    
              <div className="field input-field">
                <input type="password" placeholder="Create password" className="password" />
              </div>
    
              <div className="field input-field">
                <input type="password" placeholder="Confirm password" className="password" />
              </div>
    
              <div className="field button-field">
                <button>Signup</button>
              </div>
            </form>
    
            <div className="form-link">
              <span>Already have an account? <a href="#" className="link login-link" onClick={toggleForm}>Login</a></span>
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

export default RegisterPage;
