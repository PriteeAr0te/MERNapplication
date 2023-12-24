import React from 'react';
import signinImage from '../Images/loginpic.jpg';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
    <div className="signin-container">
        <div className="signin-content">
          <div className="signin-main">
          <div className="image-content">
          <div className="signin-image">
          <img src={signinImage} alt="loginpic.jpg"/>
          </div>
          <Link to="/signup" className="signup-link">Create an Account</Link>
          </div>
          <div className="signin-form">
          <h2 className="signin-title">Sign-In</h2>
         
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-envelope"></i></span>
              <input type="email" autoComplete="off" className="form-control bottom-border-only" name="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping"/>
            </div>
           
            
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-unlock-keyhole"></i></span>
              <input type="password" autoComplete="off" className="form-control bottom-border-only" name="password" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping"/>
            </div>
           
            <button type="submit" name="signup" class="btn btn-secondary">Log In</button>
          </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login
