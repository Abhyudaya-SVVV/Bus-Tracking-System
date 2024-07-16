// import React from 'react';
// import Link from 'next/link';
// import styles from './userprofile.module.css';
// import { FaArrowLeft, FaUser } from 'react-icons/fa';

// const UserProfile = () => {
//   const userInfo = {
//     name: 'Aditya Patel',
//     enrollmentNo: '23100BTCSE',
//     username: 'adityap09',
//     email: 'developer.aditya09@',
//     busStop: 'Marimata',
//     mobileNo: '97555XXXXX'
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.subHeader}>
//         <Link href="/Navgo" className={styles.backButton}>
//           <FaArrowLeft /> 
//         </Link>
//         <h1 className='text-[25px] font-[600]'>User Profile</h1>
//       </div>
//       <div className={styles.profileCard}>
//         <div className={styles.avatar}>
//           <FaUser />
//         </div>
//         <div className={styles.userInfo}>
//           <InfoItem label="Name" value={userInfo.name} />
//           <InfoItem label="Enrollment No." value={userInfo.enrollmentNo} />
//           <InfoItem label="Username" value={userInfo.username} />
//           <InfoItem label="Email id" value={userInfo.email} />
//           <InfoItem label="Bus Stop" value={userInfo.busStop} />
//           <InfoItem label="Mobile no." value={userInfo.mobileNo} />
//         </div>
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

// export default UserProfile;

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './userprofile.module.css';
import { FaArrowLeft, FaUser } from 'react-icons/fa';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      setIsLoading(true);
      try {
        // Simulated API call
        const response = await new Promise(resolve => setTimeout(() => resolve({
          name: 'Aditya Patel',
          enrollmentNo: '23100BTCSE',
          username: 'adityap09',
          email: 'developer.aditya09@example.com',
          busStop: 'Marimata',
          mobileNo: '97555XXXXX'
        }), 1500)); // Simulating a 1.5 second delay
        setUserInfo(response);
      } catch (error) {
        console.error('Error fetching user info:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        <p>Loading user profile...</p>
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className={styles.container}>
        <div className={styles.subHeader}>
          <Link href="/Navgo" className={styles.backButton}>
            <FaArrowLeft /> 
          </Link>
          <h1 className='text-[25px] font-[600]'>User Profile</h1>
        </div>
        <div className={styles.errorMessage}>
          Failed to load user profile. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <Link href="/Navgo" className={styles.backButton}>
          <FaArrowLeft /> 
        </Link>
        <h1 className='text-[25px] font-[600]'>User Profile</h1>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.avatar}>
          <FaUser />
        </div>
        <div className={styles.userInfo}>
          <InfoItem label="Name" value={userInfo.name} />
          <InfoItem label="Enrollment No." value={userInfo.enrollmentNo} />
          <InfoItem label="Username" value={userInfo.username} />
          <InfoItem label="Email id" value={userInfo.email} />
          <InfoItem label="Bus Stop" value={userInfo.busStop} />
          <InfoItem label="Mobile no." value={userInfo.mobileNo} />
        </div>
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

export default UserProfile;