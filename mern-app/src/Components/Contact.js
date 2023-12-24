import React from 'react';

const Contact = () => {
  return (
    <>
     <div className="contact-container1">
      <div className="inner-container phone">
        <div className="main">
        <div className="icon">
        <i className="fa-solid fa-mobile-screen"></i>
        </div>
       <div className="info">
       <div className="title">
          Phone
        </div>
        <div className="text">
          9322794841
        </div>
       </div>
        </div>
      </div>
      <div className="inner-container email">
      <div className="main">
        <div className="icon">
        <i className="fa-solid fa-envelope"></i>
        </div>
       <div className="info">
       <div className="title">
          Email
        </div>
        <div className="text">
          arotepritee111@gmail.com
        </div>
       </div>
        </div>
      </div>
      <div className="inner-container address">
      <div className="main">
        <div className="icon">
        <i className="fa-solid fa-location-dot"></i>
        </div>
       <div className="info">
       <div className="title">
          Address
        </div>
        <div className="text">
          Baner, Pune
        </div>
       </div>
        </div>
      </div>
     </div>
     <div className="contact-container2">
       <h2>Get in Touch</h2>
       <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Your Name" required="true" aria-label="phone"/>
          </div>
          <div className="col">
            <input type="texemailt" className="form-control" placeholder="Email Address" required="true" aria-label="email"/>
          </div>
          <div className="col">
            <input type="tel" className="form-control" placeholder="Phone Number" required="true" aria-label="address"/>
          </div>
        </div>
        <div className="message-box mb-3">
          <textarea className="form-control" id="message" placeholder="Enter Your Message Here" rows="4"></textarea>
        </div>
        <button type="submit" className="btn no-margin btn-primary">Submit</button>
     </div>
     
    </>
  )
}

export default Contact
