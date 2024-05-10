import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; 

function NavBar() {
    const navigate = useNavigate();
  return (
    <nav className="nav-bar">
        <h3 onClick={()=> navigate('/')}>Marvel Characters</h3>
        <Link to='/' >Home</Link>
        <Link to='/character-list' >Character Lists</Link>
        <Link to='/character-detail' >Character Details</Link>
        <Link to='/comics' >Comics</Link>
    </nav>
  )
}

export default NavBar
