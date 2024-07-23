import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <div>Copyright &copy; 2024</div>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer;