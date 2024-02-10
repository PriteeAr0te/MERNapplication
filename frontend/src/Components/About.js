import React, { useEffect, useState } from "react";
import personImage from "../Images/person-image.jpg";
import myImage from "../Images/p photo.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const BASE_URL = "https://mernapp-pritee1852.onrender.com";
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    work: "",
  });

  const callLoginPage = async () => {
    const token = localStorage.getItem("jwttoken");
    if (token) {
      try {
        const res = await fetch(`${BASE_URL}/about`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`
          },
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        setUserData(data);

        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    callLoginPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      {userData ? (
        <div className="centered">
          <div className="container emp-profile">
            <form method="GET">
              <div className="row">
                <div className="col-md-4">
                  <img
                    className="person-image"
                    src={
                      userData.name === "Pritee" ||
                      userData.name === "Pritee Arote"
                        ? myImage
                        : personImage
                    }
                    alt="Person-Pic"
                  />
                </div>
                <div className="col-md-6">
                  <div className="profile-head">
                    <h5>{userData.name}</h5>
                    <h6>{userData.work}</h6>
                    <p className="profile-rating mt-3 mb-5">
                      Rankings: <span>1/10</span>
                    </p>
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "home" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("home")}
                          id="home-tab"
                          data-toggle="tab"
                          aria-current="page"
                          href="#home"
                          role="tab"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "profile" ? "active" : ""
                          }`}
                          onClick={() => handleTabChange("profile")}
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                        >
                          TimeLine
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 no-border">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="Edit Profile"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-work">
                    <p>Work Link</p>
                    <a
                      href="https://github.com/PriteeAr0te"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <br />
                    <a
                      href="https://priteear0te.github.io/MyFirstWebApp/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Music Application
                    </a>
                    <br />
                    <a
                      href="https://replit.com/@ArotePritee"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Replit
                    </a>
                    <br />
                    <a
                      href="https://priteear0te.github.io/AmazonClone/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Amazon Clone
                    </a>
                    <br />
                  </div>
                </div>
                <div className="col-md-8 pl-5 about-info">
                  <div className="tab-content profile-tab" id="myIdContent">
                    <div
                      className={`tab-pane fade ${
                        activeTab === "home" ? "show active" : ""
                      }`}
                      id="home"
                      role="tabpanel"
                      area-labelledby="home-tab"
                    >
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>USER ID</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>{userData._id}</p>
                        </div>
                      </div>
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>{userData.name}</p>
                        </div>
                      </div>
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>{userData.email}</p>
                        </div>
                      </div>
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>{userData.phone}</p>
                        </div>
                      </div>
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>{userData.work}</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "profile" ? "show active" : ""
                      }`}
                      id="profile"
                      role="tabpanel"
                      area-labelledby="profile-tab"
                    >
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>Experience</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>Expert</p>
                        </div>
                      </div>
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>Hourly Rate</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p> 10$/hr </p>
                        </div>
                      </div>
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>Total Projects</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>5</p>
                        </div>
                      </div>
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>English Level</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>Medium</p>
                        </div>
                      </div>
                      <div className="row mt-0">
                        <div className="col-md-4 no-padding">
                          <label>Experience</label>
                        </div>
                        <div className="col-md-6 no-padding">
                          <p>6 Months </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default About;
