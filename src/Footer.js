import React from 'react'
import footer from "./footer.png"
const Footer = () => {
  return (
    <>
    <section className='footers'>
        <div className='footerlogo'>
            <img src={footer}></img>
        </div>
        <div className='ft'>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/'>Reservation</a></li>
                <li><a href='/'>Order Online</a></li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Footer