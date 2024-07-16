// import React from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import Link from "next/link";
// import styles from "./noticeboard.module.css";

// const NoticeBoard = () => {
//   const currentDate = new Date().toLocaleDateString();
//   const [Notice, setNotice] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // const demoNotices = [
//   //   "Important meeting on Friday at 2 PM in the conference room.",
//   //   "Please submit your quarterly reports by end of day.",
//   //   "Office will be closed on Monday for the national holiday.",
//   //   "Office will be closed on Monday for the national holiday.",
//   // ];

//   useEffect(() => {
//     // Simulating fetching drivers data from an API
//     const fetchNotice = async () => {
//       setIsLoading(true);
//       try {
//         // Simulated API call
//         const response = await new Promise((resolve) =>
//           setTimeout(
//             () =>
//               resolve([
//                 "Important meeting on Friday at 2 PM in the conference room.",
//                 "Please submit your quarterly reports by end of day.",
//                 "Office will be closed on Monday for the national holiday.",
//                 "Office will be closed on Monday for the national holiday.",
//               ]),
//             1500
//           )
//         ); // Simulating a 1.5 second delay
//         setNotice(response);
//       } catch (error) {
//         console.error("Error fetching drivers:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchNotice();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className={styles.loader}>
//         <div className={styles.spinner}></div>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.noticeBoardContainer}>
//         <div className={styles.header}>
//           <Link href="/Navgo" className={styles.backButton}>
//             <FaArrowLeft />
//           </Link>
//           <h1 className="text-[25px] font-[600]">Notice Board</h1>
//         </div>
//         {/* <div className={styles.currentDate}>{currentDate}</div> */}
//         <div className={styles.noticesContainer}>
//           {demoNotices.length > 0 ? (
//             demoNotices.map((notice, index) => (
//               <div key={index} className={styles.notice}>
//                 <div className={styles.currentDate}>{currentDate}</div> <br />
//                 {notice}
//               </div>
//             ))
//           ) : (
//             <div className={styles.noNotices}>
//               No notices available at this time.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoticeBoard;


'use client';
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import styles from "./noticeboard.module.css";

const NoticeBoard = () => {
  const currentDate = new Date().toLocaleDateString();
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      setIsLoading(true);
      try {
        // Simulated API call
        const response = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve([
                "Important meeting on Friday at 2 PM in the conference room.",
                "Please submit your quarterly reports by end of day.",
                "Office will be closed on Monday for the national holiday.",
                "New safety protocols will be implemented starting next week.",
              ]),
            1500
          )
        );
        setNotices(response);
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        <p>Loading notices...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.noticeBoardContainer}>
        <div className={styles.header}>
          <Link href="/Navgo" className={styles.backButton}>
            <FaArrowLeft />
          </Link>
          <h1 className="text-[25px] font-[600]">Notice Board</h1>
        </div>
        <div className={styles.noticesContainer}>
          {notices.length > 0 ? (
            notices.map((notice, index) => (
              <div key={index} className={styles.notice}>
                <div className={styles.currentDate}>{currentDate}</div> <br />
                {notice}
              </div>
            ))
          ) : (
            <div className={styles.noNotices}>
              No notices available at this time.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;