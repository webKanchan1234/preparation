import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from './theme-context'

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    }
  }
  const { theme, toggleTheme } = useTheme()
  // console.log(theme)
  return (
    <div style={{display:"flex",justifyContent:"space-between", padding:"0 2vmax"}}>
      <div className="link">
        <NavLink to="/" style={navLinkStyles}>Logo</NavLink>
        <NavLink to="/home" style={navLinkStyles}>Home</NavLink>
        <NavLink to="/about" style={navLinkStyles}>About</NavLink>
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </div>
      <div className="dark">
        <input type="checkbox" name="" id="check" onChange={toggleTheme} checked={theme == "dark"} />
        <span className='round'></span>
      </div>
    </div>
  )
}

export default Header