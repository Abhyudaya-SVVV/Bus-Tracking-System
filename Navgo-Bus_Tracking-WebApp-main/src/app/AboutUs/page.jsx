"use client";

import { useState, useEffect } from "react";
import styles from "./about.module.css";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }
  return (
    <>
      <main className={styles.main}>
          <h1 className={styles.head}>About Us</h1>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img src="/Assets/aboutus1.png" alt="Navgo app on smartphone" />
          </div>
          <div className={styles.heroContent}>
            <h1 className="text-[25px]">
              Never Wait At The Bus Stop Ever Again
            </h1>
            <h2 className="text-[40px] font-bold ">Navgo</h2>
            <p className="text-[18px]">
            Welcome to NavGo, the ultimate bus tracking system designed specifically for university and college students. Stay updated on bus schedules, track your bus in real-time, and ensure you never miss your ride. With NavGo, your daily commute becomes stress-free and efficient. Join us and experience the convenience of smart bus tracking today!
            </p>
            <button className={styles.button}>Get Started</button>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className="text-[25px]">Smarter Travel</h2>
          <h3 className="text-[40px] font-bold font-[#1d73be]">
            Navgo Features
          </h3>
          <div className={styles.featureItem}>
            <span className="w-[40rem]   flex flex-col  items-start">
              <h4 className="text-[25px] font-bold">Track Your Bus Live</h4>
              <p className="text-[18px] text-start">
                The system provides real-time GPS tracking of each bus, ensuring
                accurate location updates. Passengers can access live location
                data to plan their journey and avoid unnecessary waiting <br />{" "}
                The location updates are presented on an easy-to-use map
                interface for quick reference
              </p>
            </span>
            <img src="/Assets/f1.png" alt="Navgo app feature" />
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureItem2}>
            <img src="/Assets/f3.png" alt="Navgo app feature" />
            <span className="w-[40rem] flex flex-col items-start">
              <h4 className="text-[25px] font-bold">
                Smart Arrival Notification
              </h4>
              <p className="text-[18px] text-start">
                The bus management system provides smart arrival notifications,
                allowing users to receive real-time updates about the bus
                arrivals. Through this feature, passengers can plan their
                journeys more effectively and avoid unnecessary waiting times.
                The system ensures high accuracy in predicting bus arrival
                times, with notifications being delivered at least 5 minutes
                before the scheduled arrival.
              </p>
            </span>
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.featureItem}>
            <span className="w-[40rem] flex flex-col items-start">
              <h4 className="text-[25px] font-bold">Dynamic Bus Routing</h4>
              <p className="text-[18px] text-start">
                Students often face the inconvenience of checking the notice
                board daily for bus number and route changes, disrupting their
                routine and causing unnecessary hassle <br /> Dynamic bus
                routing provides instant updates, allowing students to stay
                informed about changes without the need for physical board
                checks
              </p>
            </span>
            <img src="/Assets/f2.png" alt="Navgo app feature" />
          </div>
        </section>
        <br />
        <br />
        <section className={styles.features}>
          <h2 className="text-[25px]">Design And Developed By</h2>
          <h3 className="text-[40px] font-bold font-[#1d73be]">
            Abhyudaya Coding Club
          </h3>
          <div className={styles.featureItem3}>
            <span className="w-[40rem] flex flex-col items-start">
              <h4 className="text-[25px] font-bold">About Abhyudaya</h4>
              <p className="text-[18px] text-start">
                In today's world, coding skills are vital across all fields.
                Abhyudaya, SVVV's coding club, offers students a platform to
                learn and practice coding, connect with peers, and participate
                in competitions. We unite coders to innovate and learn together,
                turning ideas into reality and fostering excellence and
                camaraderie.
              </p>
              <button className={styles.button}>
                Visit to abhyudaya official website
              </button>
            </span>
            <img
              className={styles.abhyudaya}
              src="/Assets/abhyudayalogo.png"
              alt="Navgo app feature"
            />
          </div>
        </section>
      </main>
    </>
  );
};
export default AboutUs;
