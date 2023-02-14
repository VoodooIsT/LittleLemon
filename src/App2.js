import {Routes, Route} from  'react-router-dom'
import BookingForm from "./components/BookingForm";
import React, { useReducer, useState } from 'react'
import App from './App';


function updateTimes(state, slot){
  console.log(slot);
  return state;
}


function initializeTimes(){
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return times;
}
// function fetchAPI(date){
//   const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
//   return times;
// }

const App2 = () => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route path="/booking" element={<BookingForm availableTimes={state} dispatch={dispatch} />}></Route>
      </Routes>
    </>
  )
}

export default App2;

