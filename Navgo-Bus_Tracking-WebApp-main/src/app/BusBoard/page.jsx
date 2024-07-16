// import Link from 'next/link';
// import styles from './busboard.module.css';
// import { FaArrowLeft } from 'react-icons/fa';

// const BusBoard = () => {
//   const busData = [
//     { busNumber: 'Item 1', route: 'Item 1', firstShiftTime: 'Item 1', secondShiftTime: 'Item 1', driverName: 'Item 1', contactNumber: 'Item 1' },
//     { busNumber: 'Item 2', route: 'Item 2', firstShiftTime: 'Item 2', secondShiftTime: 'Item 2', driverName: 'Item 2', contactNumber: 'Item 2' },
//     { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
//     { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
//     { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
//     { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
//     { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
//     { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
//     { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
//     { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
//   ];

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <Link href="/Navgo" className={styles.backButton}>
//           <FaArrowLeft /> 
//         </Link>
//         <h1 className='text-[25px] font-[600]'>Bus Board</h1>
//       </div>
      
//       <div className={styles.tableContainer}>
//         <table className={styles.busTable}>
//           <thead>
//             <tr>
//               <th>Bus Number</th>
//               <th>Route</th>
//               <th>First Shift Time</th>
//               <th>Second Shift Time</th>
//               <th>Driver Name</th>
//               <th>Contact Number</th>
//             </tr>
//           </thead>
//           <tbody>
//             {busData.map((bus, index) => (
//               <tr key={index}>
//                 <td>{bus.busNumber}</td>
//                 <td>{bus.route}</td>
//                 <td>{bus.firstShiftTime}</td>
//                 <td>{bus.secondShiftTime}</td>
//                 <td>{bus.driverName}</td>
//                 <td>{bus.contactNumber}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BusBoard;

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './busboard.module.css';
import { FaArrowLeft } from 'react-icons/fa';

const BusBoard = () => {
  const [busData, setBusData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching bus data from an API
    const fetchBusData = async () => {
      setIsLoading(true);
      try {
        // Simulated API call
        const response = await new Promise(resolve => setTimeout(() => resolve([
          { busNumber: 'Item 1', route: 'Item 1', firstShiftTime: 'Item 1', secondShiftTime: 'Item 1', driverName: 'Item 1', contactNumber: 'Item 1' },
          { busNumber: 'Item 2', route: 'Item 2', firstShiftTime: 'Item 2', secondShiftTime: 'Item 2', driverName: 'Item 2', contactNumber: 'Item 2' },
          { busNumber: 'Item 3', route: 'Item 3', firstShiftTime: 'Item 3', secondShiftTime: 'Item 3', driverName: 'Item 3', contactNumber: 'Item 3' },
          { busNumber: 'Item 4', route: 'Item 4', firstShiftTime: 'Item 4', secondShiftTime: 'Item 4', driverName: 'Item 4', contactNumber: 'Item 4' },
          { busNumber: 'Item 5', route: 'Item 5', firstShiftTime: 'Item 5', secondShiftTime: 'Item 5', driverName: 'Item 5', contactNumber: 'Item 5' },
          { busNumber: 'Item 6', route: 'Item 6', firstShiftTime: 'Item 6', secondShiftTime: 'Item 6', driverName: 'Item 6', contactNumber: 'Item 6' },
          { busNumber: 'Item 7', route: 'Item 7', firstShiftTime: 'Item 7', secondShiftTime: 'Item 7', driverName: 'Item 7', contactNumber: 'Item 7' },
          { busNumber: 'Item 8', route: 'Item 8', firstShiftTime: 'Item 8', secondShiftTime: 'Item 8', driverName: 'Item 8', contactNumber: 'Item 8' },
          { busNumber: 'Item 9', route: 'Item 9', firstShiftTime: 'Item 9', secondShiftTime: 'Item 9', driverName: 'Item 9', contactNumber: 'Item 9' },
          { busNumber: 'Item 10', route: 'Item 10', firstShiftTime: 'Item 10', secondShiftTime: 'Item 10', driverName: 'Item 10', contactNumber: 'Item 10' },
        ]), 1500)); // Simulating a 1.5 second delay
        setBusData(response);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusData();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        <p>Loading bus board...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/Navgo" className={styles.backButton}>
          <FaArrowLeft /> 
        </Link>
        <h1 className='text-[25px] font-[600]'>Bus Board</h1>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.busTable}>
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Route</th>
              <th>First Shift Time</th>
              <th>Second Shift Time</th>
              <th>Driver Name</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {busData.map((bus, index) => (
              <tr key={index}>
                <td>{bus.busNumber}</td>
                <td>{bus.route}</td>
                <td>{bus.firstShiftTime}</td>
                <td>{bus.secondShiftTime}</td>
                <td>{bus.driverName}</td>
                <td>{bus.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusBoard;