import React from 'react';
import {Link} from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

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
        <div>
            <MessageTimeline 
                profileImageUrl={currentUser.user.profileImageUrl}
                username={currentUser.user.username}
            />
        </div>
    );
};

export default Homepage;