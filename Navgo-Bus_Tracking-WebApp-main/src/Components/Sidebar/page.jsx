'use client';
import React, { useState, useEffect, useRef } from "react";
import styles from "./sidebar.module.css";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const Sidebar = ({ isOpen, onClose }) => {
  const [isSettingsBoxOpen, setIsSettingsBoxOpen] = useState(false);
  const settingsBoxRef = useRef(null);

  const toggleSettingsBox = () => {
    setIsSettingsBoxOpen(!isSettingsBoxOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsBoxRef.current &&
        !settingsBoxRef.current.contains(event.target)
      ) {
        setIsSettingsBoxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
      <div className={styles.avatar}>
            <FaUser className="text-[30px]" />
          </div>
        <div className={styles.closeBtn} onClick={onClose}>
          X
        </div>
      </div>
      <nav className={styles.nav} onClick={onClose}>
        <Link href="/Navgo">Home</Link>
        <Link href="/BusBoard">Bus Board</Link>
        <Link href="/NoticeBoard">Notice Board</Link>
        <Link href="/DriversProfile">Driver Information</Link>
        <Link href="/maintenance-record">Bus Maintenance Record</Link>
        <Link href="/ContactUs">Support</Link>
      </nav>
      <div className={styles.profileSection} >
        {isSettingsBoxOpen && (
          <div className={styles.settingsBox} ref={settingsBoxRef} onClick={onClose}>
            <Link href="/settings">Setting</Link>
            <Link href="/UserProfile">Profile</Link>
            <hr className="h-[1.6px] bg-[#000000de]" />
            <Link href="/">Logout</Link>
          </div>
        )}
        <hr className="h-[2px] bg-[rgba(0, 0, 0, 0.561)]" />
        <div className={styles.userInfo} onClick={toggleSettingsBox}>
          <div className={styles.avatar}>
            <FaUser className="text-[20px]" />
          </div>
          <div>
            <p className="text-[20px]">Aditya Patel</p>
            <p className="text-[16px]">adityap09</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
