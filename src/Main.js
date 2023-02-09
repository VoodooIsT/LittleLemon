import React from 'react'
import restourant from "./Restourant.jpg"

const Main = () => {
  return (
    <section className='hero'>
        <div className='main'>
            <h1>Little Lemon</h1>
        </div>
        <div className='location'>
            <h3>Chicago</h3>
        </div>
        <div className='detail'>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='btn'>
        <button type='button'>Reserve a Table</button>
        </div>
        <div className='photo'>
            <img src={restourant}></img>
        </div>
    </section>
  )
}

export default Main