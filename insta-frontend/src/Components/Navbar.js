import React from 'react'
import { NavLink } from 'react-router-dom';




function Navbar() {

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
            <NavLink style={link} to='/upload'> Upload</NavLink>
            <NavLink style={link} to='/photos'> Photos</NavLink>
        </div>
    )
    
}

export default Navbar;
