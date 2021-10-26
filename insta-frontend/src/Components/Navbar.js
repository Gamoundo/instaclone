import React from 'react'
import { NavLink } from 'react-router-dom';




function Navbar(props) {

    const link = {
        width: '50px',
        padding: '4px',
        margin: '0 6px 6px',
    
        textDecoration: 'none',
        color: 'peru',
      }

    





    return(
        <div className='nav' >
            <NavLink style={link} to='/'>Home</NavLink>
            {props.sesh.user === {} ? <NavLink style={link} to='/upload'> Upload</NavLink> : <button> Login</button>}
            {props.sesh.user === {} ? <NavLink style={link} to='/photos'> Photos</NavLink> : <button> Signup</button>}
        </div>
    )
    
}

export default Navbar;
