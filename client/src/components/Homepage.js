import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = ({currentUser}) => {
    if(!currentUser.isAuthenticated){
        return (
            <div className="home-hero">
                <h1>New to Wellington?</h1>
                <h4>Find out what's happening</h4>
                <Link to='/signup' className='btn btn-info'>
                    Sign up here
                </Link>
            </div>
        )
    }
    return (
        <div><h1>You Made It</h1></div>
    );
};

export default Homepage;