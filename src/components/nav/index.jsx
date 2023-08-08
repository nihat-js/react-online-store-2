import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
export function Nav() {
  return (
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="index.html" class="navbar-logo">Unavila</a>
      </div>
      <ul class="navbar-links">
        <li>  <Link to="/"> Home </Link></li>
        <li>   <Link to="/cart"> Cart </Link> </li>
        <li>   <Link to="/favorite"> Fav </Link>  </li>
      </ul>
    </nav>

  )
}
