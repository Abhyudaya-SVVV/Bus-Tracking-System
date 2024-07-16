// 'use client';

// // pages/features.js
// import { useState } from 'react';
// import styles from './features.module.css';
// import Image from 'next/image';
// import Link from 'next/link';

// const featureData = [
//   {
//     title: "Live Track Your College Bus",
//     image: "/assets/mapgif.gif",
//   },
//   {
//     title: "Dynamic Bus Routing",
//     image: "/assets/bus_routing.gif",
//   },
//   {
//     title: "Bus Information Management",
//     image: "/assets/bus_information.gif",
//   },
//   {
//     title: "Driver Information System",
//     image: "/assets/driver_information.gif",
//   },
//   {
//     title: "Smart arrival notification",
//     image: "/assets/bus_arrival_notify.gif",
//   },
//   {
//     title: "Bus Maintenance Record Keeping",
//     image: "/assets/bus_maintenance.gif",
//   },
// ];

// const Features = () => {
//   const [currentFeature, setCurrentFeature] = useState(0);

//   const nextFeature = () => {
//     setCurrentFeature((prev) => (prev + 1) % featureData.length);
//   };

//   const prevFeature = () => {
//     setCurrentFeature((prev) => (prev - 1 + featureData.length) % featureData.length);
//   };

//   return (
//     <>
//       <div className={styles.main}>
//         <div className={styles.heading}>
//           <h1>{featureData[currentFeature].title}</h1>
//         </div>
//         <div className={styles.imgWrapper}>
//           <Image src={featureData[currentFeature].image} alt="" layout="fill" objectFit="cover" />
//         </div>
//         <div className={styles.navigation}>
//           <button onClick={prevFeature} className={styles.navButton}>Previous</button>
//           <button onClick={nextFeature} className={styles.navButton}>Next</button>
//         </div>
//         {currentFeature === featureData.length - 1 && (
//           <Link href="/mainsite">
//             <button className={styles.getStartedButton}>Get Started</button>
//           </Link>
//         )}
//       </div>
//     </>
//   );
// };

// export default Features;


'use client';

import { useState } from 'react';
import styles from './features.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const featureData = [
  {
    title: "Live Track Your College Bus",
    image: "/Assets/mapgif.gif",
  },
  {
    title: "Dynamic Bus Routing",
    image: "/Assets/bus_routing.gif",
  },
  {
    title: "Bus Information Management",
    image: "/Assets/bus_information.gif",
  },
  {
    title: "Driver Information System",
    image: "/Assets/driver_information.gif",
  },
  {
    title: "Smart arrival notification",
    image: "/Assets/bus_arrival_notify.gif",
  },
  {
    title: "Bus Maintenance Record Keeping",
    image: "/Assets/bus_maintenance.gif",
  },
];

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
//   const router = useRouter();
  
//   const [isRouterReady, setIsRouterReady] = useState(false);

//   useEffect(() => {
//     setIsRouterReady(true);
//   }, []);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % featureData.length);
  };

  const prevFeature = () => {
    if (currentFeature === 0 ) {
      // If on the first feature, go back to the hero page
      router.push('/');
    } else {
      setCurrentFeature((prev) => (prev - 1 + featureData.length) % featureData.length);
    }
  };

  const isLastFeature = currentFeature === featureData.length - 1;

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>{featureData[currentFeature].title}</h1>
      </div>
      <div className={styles.imgWrapper}>
        <Image src={featureData[currentFeature].image} alt="" layout="fill" objectFit="cover" />
      </div>
      {!isLastFeature && (
        <div className={styles.navigation}>
          <button onClick={prevFeature} className={styles.navButton}>Previous</button>
          <button onClick={nextFeature} className={styles.navButton}>Next</button>
        </div>
      )}
      {isLastFeature && (
        <Link href="/Navgo">
          <button className={styles.getStartedButton}>Get Started</button>
        </Link>
      )}
    </div>
  );
};

export default Features;