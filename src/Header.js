import React from 'react'
import lemon from "./Lemon.png";
const Header = () => {
    return(
    <div className='Header'>
    <nav>
    <div className="image">
    <img src={lemon} alt=""/>
    </div>
    <ul className="hello">
    <li><a href="/home">HOME</a></li>
    <li><a href="/about">ABOUT</a></li>
    <li><a href="/menu">MENU</a></li>
    <li><a href="/reservation">RESERVATION</a></li>
    <li><a href="/order online">ORDER ONLINE</a></li>
    <li><a href="/login">LOG IN</a></li>
    </ul>
  </nav>
</div>
 );
}

export default Header