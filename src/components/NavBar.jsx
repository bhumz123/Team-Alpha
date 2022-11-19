import React from 'react'
import './navbar.css'
const NavBar = (props) => {
  return (
    <nav>
    <img src="https://drive.google.com/file/d/1EugaH7rg1FRNEg5OPZ61kRCyQZqR8vXL/view?usp=sharing" alt="" />
    <h1>{props.text}</h1>
    <div>
    </div>
  </nav>
  )
}

export default NavBar