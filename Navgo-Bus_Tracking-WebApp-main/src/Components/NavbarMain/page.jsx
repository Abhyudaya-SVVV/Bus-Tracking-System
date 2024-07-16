// import styles from './navbarmain.module.css'
// import { FaSearch, FaUser, FaBus } from "react-icons/fa";
// import Link from "next/link";

// const NavbarMain = () => {
//   return (
//     <>
//       <div className={styles.headerContainer}>
//         <div className={styles.topHeader}>
//           <div className={styles.profileLogoWrapper}>
//             <div className={styles.profile}>
//               <FaUser />
//             </div>
//             <div className={styles.logo}>
//               <h1>NAVGO</h1>
//             </div>
//           </div>
//         </div>
//         <Link href="/SearchPage">
//           <div className={styles.searchBar}>
//             <FaSearch />
//             <span>Enter destination or bus number</span>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default NavbarMain;

// NavbarMain.jsx
import React, { useState } from 'react';
import styles from './navbarmain.module.css'
import { FaSearch, FaUser, FaBus } from "react-icons/fa";
import Link from "next/link";
import Sidebar from '../Sidebar/page';

const NavbarMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.topHeader}>
          <div className={styles.profileLogoWrapper}>
            <div className={styles.profile} onClick={toggleSidebar}>
              <FaUser />
            </div>
            <div className={styles.logo}>
              <h1>NAVGO</h1>
            </div>
          </div>
        </div>
        <Link href="/SearchPage">
          <div className={styles.searchBar}>
            <FaSearch />
            <span>Enter destination or bus number</span>
          </div>
        </Link>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default NavbarMain;