import React from 'react'
import restourant from "./Restourant.jpg"
import greeksalad from "./greekSalad.jpg"
import Desert from "./Desert.png"
import Delivery from "./Delivery.png"
import Person1 from "./Person1.jpg"
import Ladie1 from "./Ladie1.jpg"
import Person2 from "./Person2.jpg"
import Lady2 from "./Lady2.jpg"
import restaurant from "./restaurant.jpg"
import chef from "./chef.jpg"
import { useNavigate } from "react-router-dom"
function AiFillStar(props) {
  return <svg stroke="currentColor" fill="#F4CE14" strokeWidth={0} viewBox="0 0 1024 1024" height="2.0em" width="2.5em" {...props}><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" /></svg>;
}




const Main = () => {
    const navigate = useNavigate();
 

    // const [availableTimes, setAvailableTimes] = useState("availableTimes");
    //   function spendTime(props) {
    //     setAvailableTimes(prevState => {
    //         return {


    //         }
    //     });
    //   }
  return (
    <>
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
        <button type='button' onClick={() => navigate("/booking")} >Reserve a Table</button>
        </div>
        <div className='photo'>
            <img src={restourant}></img>
        </div>
    </section>
    <section>
        <div className='special'>
            <h2>This weeks specials!</h2>

        </div>
        <div className='online'>
            <button type='button'>
                Online Menu
            </button>
        </div>
    </section>
    <section>
        <article className='art'>
                <div className='greek'>
                    <img src={greeksalad} alt=""></img>
                </div>
                    <h3 className='geektxt'>Greek Salad</h3>
                    <p className='ab'>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <div className='del'>
                        <img src={Delivery} alt=''></img>
                </div>
                <h3 className='order'>Order a Delivery</h3>
        </article>
        <article className='box'>
                <div className='greek'>
                    <img src={Desert} alt=""></img>
                </div>
                    <h3 className='geektxt'>Lemon Desert</h3>
                    <p className='ab'>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <div className='del'>
                        <img src={Delivery} alt=''></img>
                    </div>
                    <h3 className='order'>Order a Delivery</h3>
        </article>
        <article className='call'>
            <div className='greek'>
            <img src={Desert} alt=""></img>
            </div>
            <h3 className='geektxt'>Bruchetta</h3>
            <p className='ab'>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <div className='del'>
                        <img src={Delivery} alt=''></img>
                </div>
                <h3 className='order'>Order a Delivery</h3>
        </article>
    </section>
    <section className='green'>
        <div>
            <h1 className='test'>
                Testimonials
            </h1>
        </div>
        <div className='parentstar'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <div className='parentstar2'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <div className='parentstar3'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <div className='parentstar4'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <article className='review1'>
            <div className='person'>
                <img src={Person1}></img>
            </div>
            <h4>Jhon</h4>
            <p className='revpara'>"Very good delivery service"</p>
        </article>
        <article className='review2'>
        <div className='person'>
                <img src={Ladie1}></img>
            </div>
            <h4>Reena j.</h4>
            <p className='revpara'>"Very good delivery service"</p>
        </article>
        <article className='review3'>
        <div className='person'>
                <img src={Person2}></img>
            </div>
            <h4>Thomas</h4>
            <p className='revpara'>"Very good delivery service"</p>
        </article>
        <article className='review4'>
        <div className='person'>
                <img src={Lady2}></img>
            </div>
            <h4>Sheela</h4>
            <p className='revpara'>"Very good delivery service"</p>
        </article>
    </section>
    <section className='hola'>

        <div className='bli'>
            <h1>
                Little Lemon
            </h1>
            <h3>
                Chicago
            </h3>
            <p>Lorem ipsum dolor is amet, consectutre bhsBE gbhsb siugbib sibgisbgebgi gg .Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                kjaja jjjnscjjshcb scjnasjc j jcJNS Cj c jbchb jhb cjh jhbcjhs dh bj js js dvhb shdb jhs jhv jsdb vjb s j sdvj sj dVJ H BJHBC JsBF DBnsd BSD JKKSD VK SDV SDSDNV.</p>
        </div>
        <div className='chef'>
            <img src={restaurant} alt=''></img>
        </div>
        <div className='res'>
            <img src={chef}></img>

        </div>
    </section>
    </>

  )
}

export default Main