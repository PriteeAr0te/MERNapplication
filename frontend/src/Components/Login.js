import React, { useState } from "react";
// useContext
import signinImage from "../Images/loginpic.jpg";
import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from '../App';

const Login = () => {
  // const {state, dispatch} = useContext(UserContext);
  const BASE_URL = "https://mernapp-pritee1852.onrender.com";

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 201) {
        const token = await res.json();
        localStorage.setItem("jwttoken", token);
        window.alert("Login Successful");
        navigate("/");
      } else if (res.status === 400) {
        window.alert("Invalid Credentials Failed to Login");
      } else {
        window.alert("Unexpected Error Occured");
        // dispatch({type:"USER", payload:true});
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error occurred during login");
    }
  };

  return (
    <>
      <div className="signin-container">
        <div className="signin-content">
          <div className="signin-main">
            <div className="image-content">
              <div className="signin-image">
                <img src={signinImage} alt="loginpic.jpg" />
              </div>
              <Link to="/signup" className="signup-link">
                Create an Account
              </Link>
            </div>
            <form method="POST" className="signin-form">
              <h2 className="signin-title">Sign-In</h2>

              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  autoComplete="off"
                  className="form-control bottom-border-only"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-unlock-keyhole"></i>
                </span>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control bottom-border-only"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  aria-label="password"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <button
                type="submit"
                name="signup"
                className="btn btn-secondary"
                onClick={userLogin}
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
