import React from 'react';
import signupImage from '../Images/signupimage.jpg'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-content">
          <h2 className="signup-title">SignUp</h2>
          <div className="signup-main">
          <div className="signup-form">
          <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-user"></i></span>
              <input type="text" autoComplete="off" className="form-control bottom-border-only" name="username" placeholder="Enter Your Name" aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-envelope"></i></span>
              <input type="email" autoComplete="off" className="form-control bottom-border-only" name="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping"/>
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-mobile-screen"></i></span>
              <input type="tel" autoComplete="off" className="form-control bottom-border-only" name="phone" placeholder="Phone" aria-label="phone" aria-describedby="addon-wrapping"/>
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-briefcase"></i></span>
              <input type="text" autoComplete="off" className="form-control bottom-border-only" name="profession" placeholder="Profession" aria-label="profession" aria-describedby="addon-wrapping"/>
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-unlock-keyhole"></i></span>
              <input type="password" autoComplete="off" className="form-control bottom-border-only" name="password" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping"/>
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-clipboard-check"></i></span>
              <input type="password" autoComplete="off" className="form-control bottom-border-only" name="cpassword" placeholder="Confirm Password" aria-label="cpassword" aria-describedby="addon-wrapping"/>
            </div>
            <button type="submit" name="signup" class="btn btn-secondary">Register</button>
          </div>
          <div className="image-content">
          <div className="signup-image">
          <img src={signupImage} alt="signupimage.jpg"/>
          </div>
          <Link to="/login" className="signup-link">I am Already Register</Link>
          </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Signup
