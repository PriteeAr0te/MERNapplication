import React, {useState, useEffect} from 'react';

const Contact = () => {

const [userData, setUserData] = useState({
  name: '',
  email: '',
  phone: '',
  message:'',
});

  const callAboutPage = async() =>{
    const token = localStorage.getItem('jwttoken');
    if(token) {
    try{
      const res = await fetch('/getdata', {
        method: "GET",
        headers:{
          "Content-Type": "application/json",
        }
      })
      const data = await res.json();
      console.log(data);
      setUserData({...userData, name: data.name, email: data.email, phone: data.phone});

      if(res.status !== 200){
          const error = new Error(res.error);
          throw error;
      }
    }
    catch(error) {
      console.log(error);
    }
  }
}
  useEffect(() => {
    callAboutPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  //Storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value})
  }
  // sending the data to backend
  const handleClick = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    try {
        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message })
        });

        const data = await res.json();

        if (!data) {
            console.log("Message Not Sent");
        } else {
            window.alert("Message sent");
            setUserData({ ...userData, message: "" });
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

    



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
          {userData.phone}
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
          {userData.email}
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
    <form method="POST" onSubmit={handleClick}>
    <div className="contact-container2">
       <h2>Get in Touch</h2>
       <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Your Name" onChange= {handleInputs} name = "name" value = {userData.name} required={true} aria-label="phone"/>
          </div>
          <div className="col">
            <input type="texemailt" className="form-control" placeholder="Email Address"onChange= {handleInputs}  name = "email" value = {userData.email} required={true} aria-label="email"/>
          </div>
          <div className="col">
            <input type="tel" className="form-control" placeholder="Phone Number" onChange= {handleInputs}  name = "phone" value = {userData.phone} required={true} aria-label="address"/>
          </div>
        </div>
        <div className="message-box mb-3">
          <textarea className="form-control" id="message" placeholder="Enter Your Message Here" onChange= {handleInputs} name = "message" value = {userData.message} rows="4"></textarea>
        </div>
        <button type="submit" className="btn no-margin btn-primary">Submit</button>
        {/* onClick = {handleClick}  */}
     </div>
    </form>
     
    </>
  )
}

export default Contact
