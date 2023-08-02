import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Footer";
import "./App.css";
import PageInDevelopment from "./Components/PageInDevelopment";
import BookingForm from "./Components/BookingForm";
import ConfirmedBooking from './Components/ConfirmedBooking'
import { useEffect, useState } from "react";

function App() {
  const [jsonData, setJsonData] = useState([]);

  const initializeTimes = () => {
    fetch('./FakeAPI_FetchTimes.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(err => console.log("ERROR: " + err));
  }

  useEffect(() => {
    initializeTimes();
  },[]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<PageInDevelopment />}></Route>
        <Route path="/menu" element={<PageInDevelopment />}></Route>
        <Route path="/reservations" element={<BookingForm jsonData={jsonData} />}></Route>
        <Route path="/order online" element={<PageInDevelopment />}></Route>
        <Route path="/login" element={<PageInDevelopment />}></Route>
        <Route path="/bookingconfirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
