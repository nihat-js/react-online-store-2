import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
export function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <Link  className='navbar-logo' to="/"> Unovilo </Link>
      </div>
      <ul className="navbar-links">
        <li>  <Link to="/"> Home </Link></li>
        <li>   <Link to="/cart"> Cart </Link> </li>
        <li>   <Link to="/favorite"> Fav </Link>  </li>
      </ul>
    </nav>

  )
}
