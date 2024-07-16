"use client";

import styles from "./buslist.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaBus, FaWifi, FaSearch  } from "react-icons/fa";
import { ImUser } from "react-icons/im";

const BusList = () => {
//   const [buses, setBuses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetchBuses();
//   }, []);

//   const fetchBuses = async () => {
//     try {
//       // Replace this with actual API call
//       const mockBuses = [
//         { id: 1, busNumber: "24", route: "Svvv Campus to Ujjain" },
//         { id: 2, busNumber: "25", route: "City Center to Airport" },
//         { id: 3, busNumber: "26", route: "SVVV campus to Rau" },
//         { id: 4, busNumber: "27", route: "SVVV campus to Indore" },
//         // Add more bus data as needed
//       ];
//       setBuses(mockBuses);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching buses:", error);
//       setError("Failed to load buses. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredBuses = buses.filter(
//     (bus) =>
//       bus.busNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       bus.route.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (error) {
//     return <div className={styles.error}>{error}</div>;
//   }
const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Simulating API call
    const mockBuses = [
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 1, routeNumber: '24', route: 'Svvv Campus to Ujjain', driverName: 'Babu Bhaiya', arrivalTime: 2 },
      { id: 2, routeNumber: '25', route: 'City Center to Airport', driverName: 'John Doe', arrivalTime: 5 },
    ];
    setBuses(mockBuses);
  }, []);
  return (
    <>
      <div className={styles.see_all_buses}>
      <div className={styles.all_buses_heading}>
        <div className={styles.back}>
          <Link href="/Navgo"><FaArrowLeft /></Link>
        </div>
        <h1>See all buses no. and routes</h1>
      </div>
      <div id={styles.list_of_buses}>
        {buses.map((bus) => (
          <div key={bus.id} className={styles.buses_info}>
            <div className={styles.b_logo_wrapper}>
              <FaBus />
            </div>
            <div className={styles.b_route_no_name_wrapper}>
              <div className={styles.route_no_name}>
                <h2>{bus.routeNumber}</h2>
                <p>{bus.route}</p>
              </div>
              <div className={styles.driver_name}>
                <ImUser />
                <h3>{bus.driverName}</h3>
              </div>
              <div className={styles.arrive_time}>
                <div className={styles.arrive_icon}><FaWifi /></div>
                <h3>In {bus.arrivalTime} min</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BusList;
