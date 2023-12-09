import React from 'react'
import { NavLink } from 'react-router-dom'

function NavPage() {

    const activeLink = ({isActive})=>{
        return{
            color: isActive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)' ,
            fontWeight: isActive ? 'bolder' : 'normal'
        }
    }
  return (
    <nav>
    <NavLink to='/' style={activeLink}>Home</NavLink>
    <NavLink to='/create' style={activeLink}>Create New Blog</NavLink>
    <NavLink to='/list' style={activeLink}>Posted Blogs</NavLink>
    </nav>
  )
}

export default NavPage