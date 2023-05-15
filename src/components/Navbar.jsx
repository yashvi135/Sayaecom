import React from 'react'
import logo from "../images/sayalogo.png"
import "../styles/Navbar.css"
const Navbar = () => {
  return (
     <nav className='flex justify-between flex-wrap h-16'>
      <div className="leftnav ">
       <a href="#">Home</a>
       <a href="#">About</a>
       <a href="#">Our Blogs</a>
       <a href="#">Categories</a>
      </div>
      <div className="logo mx-auto">
          <img  className='mx-auto' src={logo} alt=""/>
      </div>
      <div className="rightnav">
            <a href="#">SignIn</a>
            <a href="#">Register</a>
            <a href="#">Cart</a>
            <a href="#">Wishtlist</a>
      </div>
     </nav>
  )
}

export default Navbar