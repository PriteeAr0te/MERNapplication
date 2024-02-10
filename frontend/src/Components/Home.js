import React, { useState, useEffect } from "react";
// import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const BASE_URL = "https://mernapp-pritee1852.onrender.com";
  const [userName, setUser] = useState("");
  const [showName, setShowName] = useState(false);

  const callHomePage = async () => {
    const token = localStorage.getItem("jwttoken");

    if (token) {
      try {
        const res = await fetch(`${BASE_URL}/getdata`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (res.status === 200 && data && data.name) {
          console.log(data);
          setUser(data.name);
          setShowName(true);
        } else {
          setUser("");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    callHomePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-left">
      <div className="centered">
        <div className="home-main">
          <div className="main-content">
            <div className="text">
              <p>Welcome</p>
              {userName && <h1 className="mt-2">{userName} </h1>}
              {/* <h3 className='mt-2'>We Are The MERN Developer </h3> */}
              <h3 className="mt-2">
                {" "}
                {showName
                  ? "Happy To See You Back"
                  : "We Are The MERN Developer"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
