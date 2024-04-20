import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const navLinkStyles = ({isActive})=>{
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline"
        }
    }
  return (
    <div >
        <NavLink to="/" style={navLinkStyles}>Home</NavLink>
        <NavLink to="/about" style={navLinkStyles}>About</NavLink>
    </div>
  )
}

export default Header