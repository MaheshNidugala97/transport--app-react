import React, { useState } from "react";
import Navbar from "./components/MainLandingpage/Navbar";
import HomeSection from "./components/MainLandingpage/Homesection";
import ContentSection from "./components/MainLandingpage/Contentsection";
import WorkSection from "./components/MainLandingpage/Worksection.js";

import FeedbackSection from "./components/MainLandingpage/Feedbacksection.js";

import AboutusSection from "./components/MainLandingpage/Aboutsection.js";

import Footer from "./components/MainLandingpage/Footer.js";

import RouteSearchForm from "./components/Services/Routesearchform";

import Sidefilter from "./components/Services/Sidefilter";

import RegisterPage from "./components/MainLandingpage/Register";

import LoginPage from "./components/MainLandingpage/Login";

import Moredetails from "./components/Services/Moredetails";
import Header from "./components/Bookpage/Header";
import BreadCrums from "./components/Bookpage/BreadCrums";
import BackButton from "./components/Bookpage/BackButton";
import PassengerDetails from "./components/Bookpage/PassangerDetails";
import ContactDetails from "./components/Bookpage/ContactDetails";
import SeatReservation from "./components/Bookpage/SeatReservation";
import AddLuggage from "./components/Bookpage/AddLuggage";
import Footers from "./components/Bookpage/footer";
import BookingDetails from "./components/Bookpage/BookingDetils";
import YourBooking from "./components/Bookpage/YourBooking";
import CheckoutPanel from "./components/Payment/CheckoutPanel";
import { useLocation } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <HomeSection />

      <ContentSection />

      <WorkSection />

      <FeedbackSection />

      <AboutusSection />

      <Footer />
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />

      <AboutusSection />
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />

      <RouteSearchForm />

      <Sidefilter />
    </>
  );
};

const Moredetailsscreen = () => {
  return (
    <>
      <Navbar />

      <RouteSearchForm />

      <Moredetails />
    </>
  );
};

const BookingDetailsscreen = () => {
  return (
    <>
      <Header />
      <BreadCrums />
      <BackButton />
      <YourBooking />
      <BookingDetails />
      <PassengerDetails />
      <ContactDetails />
      <SeatReservation />
      <AddLuggage />
      <Footers />
    </>
  );
};

const PaymentScreen = () => {
  return (
    <>
      <div>
        <CheckoutPanel />
      </div>
    </>
  );
};

const LoginSignup = () => {
  const [showSignup, setShowSignup] = useState(false);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <section
      className={`login-signup-container forms ${
        showSignup ? "show-signup" : ""
      }`}
    >
      <LoginPage toggleForm={toggleForm} />

      <RegisterPage toggleForm={toggleForm} />

      <div className="form-link">
        <span>
          {showSignup ? "Already have an account? " : "Don't have an account? "}

          <a href="#" className="link" onClick={toggleForm}>
            {showSignup ? "Login" : "Signup"}
          </a>
        </span>
      </div>

      <div className="media-options">
        <a href="#" className="field google">
          <span>Login with Google</span>
        </a>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/service" element={<Service />} />

        <Route path="/register" element={<LoginSignup />} />

        <Route path="/login" element={<LoginSignup />} />

        <Route path="/moredetails" element={<Moredetailsscreen />} />

        <Route path="/bookingdetails" element={<BookingDetailsscreen />} />

        <Route path="/payment" element={<PaymentScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
