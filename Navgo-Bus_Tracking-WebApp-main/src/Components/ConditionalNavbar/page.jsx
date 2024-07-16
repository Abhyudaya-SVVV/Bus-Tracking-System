// components/ConditionalNavbar.jsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/Components/Navbar/page";
import NavbarMain from "@/Components/NavbarMain/page";

const ConditionalNavbar = () => {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/Signup' || pathname === '/Login' || pathname === '/Forget') {
    return <Navbar />;
  } 
  if (pathname === '/SearchPage' || pathname === '/BusList') {
    return null; // Hide both navbars on searchPage
  }
   else {
    return <NavbarMain />;
  }
};

export default ConditionalNavbar;