// 'use client';
// import Link from 'next/link';
// import styles from './driversprofile.module.css';
// import { FaArrowLeft, FaUser } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';


// const DriversProfile = () => {
//   const router = useRouter();

//   const drivers = [
//     { name: 'John Doe', age: 35, busNo: '101' },
//     { name: 'Jane Smith', age: 42, busNo: '202' },
//     { name: 'Mike Johnson', age: 38, busNo: '303' },
//     { name: 'Mike Johnson', age: 38, busNo: '303' },
//     { name: 'Mike Johnson', age: 38, busNo: '303' },
//     { name: 'Mike Johnson', age: 38, busNo: '303' },
//   ];
//   const handleBackClick = () => {
//     if (referrer) {
//       router.push(referrer);
//     } else {
//       router.push('/Navgo');
//     }
//   };
  
//   return (
//     <div className={styles.container}>
//       <div className={styles.subHeader}>
//         <button onClick={handleBackClick} className={styles.backButton}>
//           <FaArrowLeft /> 
//         </button>
//         <h1 className='text-[25px] font-[600]'>Drivers Profile</h1>
//       </div>
//       <div className={styles.driversGrid}>
//         {drivers.map((driver, index) => (
//           <div key={index} className={styles.driverCard}>
//             <div className={styles.avatar}>
//               <FaUser />
//             </div>
//             <div className={styles.driverInfo}>
//               <InfoItem label="Name" value={driver.name} />
//               <InfoItem label="Age" value={driver.age} />
//               <InfoItem label="Bus No." value={driver.busNo} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const InfoItem = ({ label, value }) => (
//   <div className={styles.infoItem}>
//     <span className={styles.label}>{label} : </span>
//     <span className={styles.value}>{value}</span>
//   </div>
// );

// export default DriversProfile;


'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './driversprofile.module.css';
import { FaArrowLeft, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const DriversProfile = () => {
  const router = useRouter();
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching drivers data from an API
    const fetchDrivers = async () => {
      setIsLoading(true);
      try {
        // Simulated API call
        const response = await new Promise(resolve => setTimeout(() => resolve([
          { name: 'John Doe', age: 35, busNo: '101' },
          { name: 'Jane Smith', age: 42, busNo: '202' },
          { name: 'Mike Johnson', age: 38, busNo: '303' },
          { name: 'Mike Johnson', age: 38, busNo: '303' },
          { name: 'Mike Johnson', age: 38, busNo: '303' },
          { name: 'Mike Johnson', age: 38, busNo: '303' },
        ]), 1500)); // Simulating a 1.5 second delay
        setDrivers(response);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  const handleBackClick = () => {
    router.push('/Navgo');
  };
  
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        <p>Loading drivers Information...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <button onClick={handleBackClick} className={styles.backButton}>
          <FaArrowLeft /> 
        </button>
        <h1 className='text-[25px] font-[600]'>Drivers Profile</h1>
      </div>
      <div className={styles.driversGrid}>
        {drivers.map((driver, index) => (
          <div key={index} className={styles.driverCard}>
            <div className={styles.avatar}>
              <FaUser />
            </div>
            <div className={styles.driverInfo}>
              <InfoItem label="Name" value={driver.name} />
              <InfoItem label="Age" value={driver.age} />
              <InfoItem label="Bus No." value={driver.busNo} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className={styles.infoItem}>
    <span className={styles.label}>{label} : </span>
    <span className={styles.value}>{value}</span>
  </div>
);

export default DriversProfile;