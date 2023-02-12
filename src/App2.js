import {Routes, Route} from  'react-router-dom'
import BookingForm from "./components/BookingForm";
import React from 'react'
import App from './App';

const App2 = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/booking" element={<BookingForm />}></Route>
    </Routes>
    </>
  )
}

export default App2;

