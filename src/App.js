import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Footer";
import "./App.css";
import PageInDevelopment from "./Components/PageInDevelopment";
import BookingForm from "./Components/BookingForm";
import ConfirmedBooking from './Components/ConfirmedBooking'

// TODO Available time, lift state up
// TODO Unit tests: Static heading text, user can submit the information, reducer ^^
// TODO Connecting the bookings page to the API <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
// TODO Aria label, html for attribute
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<PageInDevelopment />}></Route>
        <Route path="/menu" element={<PageInDevelopment />}></Route>
        <Route path="/reservations" element={<BookingForm />}></Route>
        <Route path="/order online" element={<PageInDevelopment />}></Route>
        <Route path="/login" element={<PageInDevelopment />}></Route>
        <Route path="/bookingconfirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
