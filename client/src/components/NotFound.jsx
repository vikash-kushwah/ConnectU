// src/components/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>We're sorry, the page you requested could not be found.</p>
      <p>Please check the URL or go back to the homepage.</p>
      <Link to="/" className="home-link">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
