import React from 'react'
import { NavLink } from 'react-router-dom';




function Navbar(props) {
console.log(props.sesh.user)
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
            {props.sesh.loggedin === true ? <NavLink style={link} to='/upload'> Upload</NavLink> : <NavLink style={link} to='/login'> Login</NavLink>}
            {props.sesh.loggedin === true ? <NavLink style={link} to='/photos'> Photos</NavLink> : <NavLink style={link} to='/signup'> Register</NavLink>}
        </div>
    )
    
}

export default Navbar;
