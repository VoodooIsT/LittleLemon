import {useState} from "react";
import "./Booking.css";
import restaurant from "../restaurant.jpg"
import Header from "../Header";
import Footer from "../Footer";
const GuestsErrorMessage = ({guests}) => {
 if(guests<1){
   return <p className="FieldError">Number of Guests should have at least 1</p>;
   }else{
   return <p className="FieldError">Number of Guests should not be more than 10</p>;
   }

};

function BookingForm({availableTimes, dispatch}) {
 const [chooseDate, setChooseDate] = useState("");
 const [guests, setGuests] = useState(1);
 const [occasion, setOccasion] = useState("");

 const getIsFormValid = () => {
   return (
     chooseDate &&
     occasion !== "occasion" &&
     guests >= 1 && guests <= 10 &&
     availableTimes!== "availableTimes"
   );
 };

 const clearForm = () => {
   setChooseDate("");
   setGuests();
   setOccasion("");
};

 const handleSubmit = (e) => {
   e.preventDefault();
   alert("Your Table at Little Lemon is Confirmed!");
   clearForm();
 };


 return (
  <>
  <Header />
  <Footer />
  <section>
    {/* <img src={restaurant}>

    </img> */}

   <div className="App">
     <form onSubmit={handleSubmit}>
       <fieldset>
         <h2 className="book">Book your table</h2>
         <div className="fieldParent">
         <div className="lI_parent row">
              <label className="label">Indoor Sitting</label>
              <input type="radio"
              name="p"
              onChange={(e) => {
                setGuests(e.target.value);
              }}>
              </input>
            </div>
            <div className="lI_parent row rop">
              <label className="label">Outdoor Sitting</label>
              <input type="radio"
              name="p"
              onChange={(e) => {
                setGuests(e.target.value);
              }}>
              </input>
         </div>
         </div>

          <div className="fieldParent">

              <div className="lI_parent">
                <label className="label" htmlFor="res-date">
                  Choose date
                </label>
                <input
                  type="date"
                  value={chooseDate}
                  onChange={(e) => {
                    setChooseDate(e.target.value);
                  }}
                  placeholder="Choose Date"
                />
              </div>

              <div className="lI_parent">
                <label className="label" htmlFor="res-time">
                  Choose Time
                </label>
                <select onChange={(e) => dispatch(e.target.value)}>
                <option value="availableTimes">Available Times</option>
                  {
                    availableTimes?.map((t) => <option value={t}>{t}</option>)
                  }
                </select>
              </div>
          </div>

          <div className="fieldParent">
            <div className="lI_parent">
              <label className="label" htmlFor="guests">Number of guests</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                placeholder="1"
              />
              {
                (guests >= 1 && guests <= 10) ? null: <GuestsErrorMessage guests={guests}/>
              }
            </div>

            <div className="lI_parent keep">
              <label className="label" htmlFor="occasion">
                Occasion
              </label>
              <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="occasion">Choose your occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
          </div>

          <button className="num" type="submit" disabled={!getIsFormValid()}>
           Make your reservation
         </button>
       </fieldset>
     </form>
   </div>
   </section>
   </>
 );
}

export default BookingForm;