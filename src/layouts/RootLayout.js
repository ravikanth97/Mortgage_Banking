import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const RootLayout = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header /> {/* Displays the application header */}
      <Navigation isLoggedIn={isLoggedIn} onLogout={onLogout} /> {/* Dynamic navigation */}
      <main className="flex-grow-1 container my-4">
        <Outlet /> {/* Render child routes */}
      </main>
      <Footer /> {/* Displays the application footer */}
    </div>
  );
};

export default RootLayout;