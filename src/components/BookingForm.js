import {useState} from "react";
import "./Booking.css";
import restaurant from "../restaurant.jpg"
const GuestsErrorMessage = ({guests}) => {
 if(guests<=1){
   return <p className="FieldError">Number of Guests should have at least 1</p>;
   }else{
   return <p className="FieldError">Number of Guests should not be more than 10</p>;
   }

};

function BookingForm() {
 const [chooseDate, setChooseDate] = useState("");
 const [guests, setGuests] = useState(1);
 const [occasion, setOccasion] = useState("");
 const [availableTimes, setAvailableTimes] = useState("availableTimes");

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
   setAvailableTimes("")
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
  <section>
    <img src={restaurant}>

    </img>

   <div className="App">
     <form onSubmit={handleSubmit}>
       <fieldset>
         <h2 className="book">Book your table</h2>
          <div className="vajra">
          <div className="Field">
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
         <div className="Field">
           <label className="label" htmlFor="res-time">
             Choose Time
           </label>
           <select value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>
           <option value="availableTimes">Available Times</option>
             <option value="17:00">17:00</option>
             <option value="18:00">18:00</option>
             <option value="19:00">19:00</option>
             <option value="20:00">20:00</option>
             <option value="21:00">21:00</option>
             <option value="22:00">22:00</option>
           </select>
         </div>
         <div className="Field">
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
         <div className="Field">
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