import { Inter } from "next/font/google";
// import Navbar from "@/Components/Navbar/page";
import "./globals.css";
// import NavbarMain from "@/Components/NavbarMain/page";
import ConditionalNavbar from "@/Components/ConditionalNavbar/page";
import Footer from "@/Components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Navgo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Navbar />
      <NavbarMain /> */}
      <ConditionalNavbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}