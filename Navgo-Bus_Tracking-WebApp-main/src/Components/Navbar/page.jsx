"use client";

import styles from "./navbar.module.css";
import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1070);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div
          className={`${styles.navlinks} ${
            isMenuOpen && isMobile ? styles.show : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/BusBoard">Bus Board</a>
            </li>
            <li>
              <a href="/AboutUs">About Us</a>
            </li>
            <li>
              <a href="/Notification">Notification</a>
            </li>
            {isMobile && (
              <>
                <li>
                  <a href="/DriversProfile">Drivers Information</a>
                </li>
                <li>
                  <a href="/Assets/busroute.pdf" target="_blank">Bus Routes</a>
                </li>
                <li>
                  <a href="/ContactUs">Contact Us</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className={styles.logo}>
          <i className="bx bx-menu text-[2.5rem]" onClick={toggleMenu}></i>
          <a href="/" className="text-[2rem] text-white cursor-pointer font-bold">
            Navgo
          </a>
        </div>
        <div className={styles.signinupbtn}>
              <a href="/Login">Sign In</a>
              <a href="/Signup">Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
