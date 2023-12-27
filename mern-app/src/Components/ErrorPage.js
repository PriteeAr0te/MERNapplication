import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="main-page">
       <div className="inner-errorpage">
        <div className="p404 mt-2">
        <h1>404</h1>
        </div>
    <div className="container">
        <div className="notfound">
           <h1>Page Not Found</h1>
      </div>
      <div className="error-message mt-2">
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      </div>
      <div className="error-button">
        <Link to="/"><button type="button" className="btn btn-primary">Go Back Home</button></Link>
      </div>
    </div>
    </div>
       </div>
  )
}

export default ErrorPage;