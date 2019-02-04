import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = () => (
    <div className="home-hero">
        <h1>New to Wellington?</h1>
        <h4>Find out what's happening</h4>
        <Link to='/signup' className='btn btn-info'>
            Sign up here
        </Link>
    </div>
);

export default Homepage;