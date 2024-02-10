import React, { useState } from "react";
import signupImage from "../Images/signupimage.jpg";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const BASE_URL = "https://mernapp-pritee1852.onrender.com";
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleOnChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleRegisterClick = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    try {
      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert(
          "Registration Failed: Invalid data or user already exists"
        );
      } else {
        window.alert("Registration Successful");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error occurred during registration");
    }
  };
  return (
    <>
      <div className="signup-container">
        <div className="signup-content">
          <h2 className="signup-title">SignUp</h2>
          <div className="signup-main">
            <form method="POST" className="signup-form">
              {/* <div className="signup-form"> */}
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control bottom-border-only"
                  value={user.name}
                  onChange={handleOnChange}
                  name="name"
                  placeholder="Enter Your Name"
                  aria-label="name"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  autoComplete="off"
                  className="form-control bottom-border-only"
                  value={user.email}
                  onChange={handleOnChange}
                  name="email"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-mobile-screen"></i>
                </span>
                <input
                  type="tel"
                  autoComplete="off"
                  className="form-control bottom-border-only"
                  value={user.phone}
                  onChange={handleOnChange}
                  name="phone"
                  placeholder="Phone"
                  aria-label="phone"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control bottom-border-only"
                  value={user.work}
                  onChange={handleOnChange}
                  name="work"
                  placeholder="Work"
                  aria-label="work"
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
                  value={user.password}
                  onChange={handleOnChange}
                  name="password"
                  placeholder="Password"
                  aria-label="password"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-clipboard-check"></i>
                </span>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control bottom-border-only"
                  value={user.cpassword}
                  onChange={handleOnChange}
                  name="cpassword"
                  placeholder="Confirm Password"
                  aria-label="cpassword"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <button
                type="submit"
                name="signup"
                className="btn btn-secondary"
                onClick={handleRegisterClick}
              >
                Register
              </button>
              {/* </div> */}
            </form>
            <div className="image-content">
              <div className="signup-image">
                <img src={signupImage} alt="signupimage.jpg" />
              </div>
              <Link to="/login" className="signup-link">
                I am Already Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
