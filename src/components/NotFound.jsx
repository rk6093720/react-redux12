import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/" element={<Home/>}> Home</Link>
  </div>
);

export default NotFound;