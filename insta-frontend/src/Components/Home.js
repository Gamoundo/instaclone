import React from 'react';


function Home(props) {
    return (
        <div>
            <h1> Welcome To Instaclone</h1>
            {props.sesh.loggedin === true ? <p>Your pics</p>: <p> Sign in or Register to picture bliss</p>}
        </div>
    )
    
}

export default Home;