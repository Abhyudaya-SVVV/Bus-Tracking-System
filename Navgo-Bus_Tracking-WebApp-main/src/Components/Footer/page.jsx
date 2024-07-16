'use client';
import Link from 'next/link';
import styles from './footer.module.css';
import {  FaLinkedinIn, FaInstagram, FaWhatsapp} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { useRouter } from 'next/navigation';


const Footer = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Navgo</h2>
          <p className={styles.slogan}>Smart Bus Tracking</p>
        </div>
        
        <nav className={styles.navigation}>
          <div className={styles.navColumn}>
            <h1 className='text-[20px] font-[600] mb-[12px]'>Useful Links</h1>
            <Link href={`/DriversProfile?referrer=${router.asPath}`}>DRIVERS INFORMATION</Link>
            <Link href="/Notification">NOTIFICATIONS</Link>
            <Link href="/ContactUs">CONTACT US</Link>
          <Link href="/AboutUs">ABOUT US</Link>
            
          </div>
          <div className={styles.navColumn}>
          <h1 className='text-[20px] font-[600] mb-[12px]'>Other Links</h1>
            <Link href="/Assets/busroute.pdf" target='_blank'>BUS ROUTE</Link>
            <Link href="/BusBoard">BUS BOARD</Link>
          </div>
          <div className={styles.navColumn}>
          <h1 className='text-[20px] font-[600] mb-[12px]'>Contact Us</h1>
          <p>+91 70676 63661</p>
          </div>
        </nav>
      </div>
      <hr  className='w-[70%] h-[2px] m-auto  mt-[25px] bg-black'/>
      <div className={styles.socialSection}>
        <h1 className='text-[25px] font-bold'>Social Connect</h1>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/abhyudayacodingclub/" target='_blank'><AiFillInstagram  /></a>
          <a href="https://api.whatsapp.com/send?phone=6266061914&text=Hello!%20I%20want%20to%20know%20about...%20" target='_blank'><IoLogoWhatsapp   /></a>
          <a href="#"><FaLinkedinIn  /></a>
          <a href="mailto:abhyudaya@svvv.edu.in" target='_blank'><SiGmail /></a>
        </div>
        <p className={styles.copyright}>&copy;Copyright 2024. Abhyudaya Coding Club </p>
      </div>
    </footer>
  );
};

export default Footer;