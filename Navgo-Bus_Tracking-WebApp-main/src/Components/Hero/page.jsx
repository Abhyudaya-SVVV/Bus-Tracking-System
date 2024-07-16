
// components/Hero.js
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaRoute } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import styles from './hero.module.css';

const Hero = ({ onExplore }) => {
  const features = [
    { icon: <FaMapMarkerAlt />, text: "Live Location Tracking" },
    { icon: <FaRoute />, text: "Dynamic Bus Routing" },
    { icon: <IoInformationCircle />, text: "Bus Information Management" },
    { icon: <BsPersonLinesFill />, text: "Driver Information System" },
    { icon: <MdNotificationsActive />, text: "Smart Arrival Notification" },
    { icon: <HiMiniWrenchScrewdriver />, text: "Bus Maintenance Record Keeping" },
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.introContent}>
        <h1>Find</h1>
        <h2>Your Bus !</h2>
        <p>
          A Bus Management System is a comprehensive software solution
          designed to streamline and optimize the operations of bus fleets,
          providing efficient management tools for fleet managers, drivers,
          and passengers. This system integrates various features to enhance
          the overall efficiency, safety, and reliability of bus
          transportation services. Here is an overview of what a Bus
          Management System entails along with the highlighted features :
        </p>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              {feature.icon}
              <h3>{feature.text}</h3>
            </div>
          ))}
        </div>
        {/* <Link href="/Features"> */}
          <button className={styles.btn} onClick={onExplore}>Let's Explore</button>
        {/* </Link> */}
      </div>
      
      <div className={styles.imgWrapper}>
        <img src="./Assets/introimg2.png" alt="Bus Image"/>
      </div>
    </div>
  );
};

export default Hero;