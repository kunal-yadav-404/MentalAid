import { Route, Switch, Router, Routes, BrowserRouter } from "react-router-dom";
import React, { Fragment } from "react";
import Header from "./pages/shared/header/Header";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Detect from "./pages/detect/detect";
import Footer from "./pages/shared/Footer";
import Services from "./pages/services/Services";
import About from "./pages/shared/About";
import ServiceDetails from "./pages/serviceDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
import Signup from "./pages/account/Signup";
import Signin from "./pages/account/Signin";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./firebase/PrivateRoute";
import AboutSection from "./pages/about/AboutSection";
import Therapists from "./pages/therapists/Therapists";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Router> */}
          {/* <PrivateRoute path="/service/:id">
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/therapists">
            <Therapists />
          </PrivateRoute> */}
          {/* </Router> */}

          {/* <Route path="/about">
              <About />
              <AboutSection />
          </Route> */}

          <Route path="/service/:id" element={<ServiceDetails />} />

          <Route path="/services" element={<Services />} />

          <Route path="/therapists" element={<Therapists />} />

          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<AboutSection />} /> */}

          <Route path="/home" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
