// import styles from './contact.module.css'
// import { IoHomeSharp } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa6";
// import { IoIosMail } from "react-icons/io";


// const ContactUs = () => {
//   return (
//     <>
//      <section className={styles.Section}>
    
//     <div className={styles.sectionheader}>
//       <div className={styles.container}>
//         <h2>Contact Us</h2>
//         <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team at NavGo is here to help. Please fill out the form below, and we'll get back to you as soon as possible. Your input is invaluable in helping us improve our bus tracking web app for university and college students. Thank you for reaching out!</p>
//       </div>
//     </div>
    
//     <div className={styles.container}>
//       <div className={styles.row}>
        
//         <div className={styles.contactinfo}>
//           <div className={styles.contactinfoitem}>
//             <div className={styles.contactinfoicon}>
//               {/* <i className="fas fa-home"></i> */}
//               <IoHomeSharp />
//             </div>
            
//             <div className={styles.contactinfocontent}>
//               <h4>Address</h4>
//               <p>Shri Vaishnav Vidyapeeth Vishwavidyalaya <br />
//               Campus : Indore – Ujjain Road, <br /> Indore – 453111</p>
//             </div>
//           </div>
          
//           <div className={styles.contactinfoitem}>
//             <div className={styles.contactinfoicon}>
//               {/* <i className="fas fa-phone"></i> */}
//               <FaPhone />
//             </div>
            
//             <div className={styles.contactinfocontent}>
//               <h4>Phone</h4>
//               <p>+91 62660-61914</p>
//             </div>
//           </div>
          
//           <div className={styles.contactinfoitem}>
//             <div className={styles.contactinfoicon}>
//               {/* <i className="fas fa-envelope"></i> */}
//               <IoIosMail className='text-[50px]' />
//             </div>
            
//             <div className={styles.contactinfocontent}>
//               <h4>Email</h4>
//              <p>abhyudaya@svvv.edu.in</p>
//             </div>
//           </div>
//         </div>
        
//         <div className={styles.contactform}>
//           <form id={styles.contactForm}>
//             <form id={styles.contactForm} ></form>
//             <h2>Get in touch</h2>
//             <div className={styles.inputbox}>
//               <input type="text" required="true" name="" placeholder="Full Name"/>
//             </div>
            
//             <div className={styles.inputbox}>
//               <input type="email" required="true" name="" placeholder="Email"/>
//             </div>
            
//             <div className={styles.inputbox}>
//               <textarea required="true" name="" placeholder="Type Your Message Here...."></textarea>
//             </div>
            
//             <div className={styles.inputbox}>
//                 <input type="submit" value="send" name=""/>
//             </div>
//           </form>
//         </div>
        
//       </div>
//     </div>
//   </section>
//     </>
//   )
// }

// export default ContactUs

'use client';
import React, { useState, useEffect } from 'react';
import styles from './contact.module.css'
import { IoHomeSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      setIsLoading(true);
      try {
        // Simulated API call
        const response = await new Promise(resolve => setTimeout(() => resolve({
          address: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
          Campus : "Indore – Ujjain Road, Indore – 453111",
          phone: "+91 62660-61914",
          email: "abhyudaya@svvv.edu.in"
        }), 1500)); // Simulating a 1.5 second delay
        setContactInfo(response);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!contactInfo) {
    return (
      <div className={styles.errorMessage}>
        Failed to load contact information. Please try again later.
      </div>
    );
  }

  return (
    <>
     <section className={styles.Section}>
    
    <div className={styles.sectionheader}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team at NavGo is here to help. Please fill out the form below, and we'll get back to you as soon as possible. Your input is invaluable in helping us improve our bus tracking web app for university and college students. Thank you for reaching out!</p>
      </div>
    </div>
    
    <div className={styles.container}>
      <div className={styles.row}>
        
        <div className={styles.contactinfo}>
          <div className={styles.contactinfoitem}>
            <div className={styles.contactinfoicon}>
              <IoHomeSharp />
            </div>
            
            <div className={styles.contactinfocontent}>
              <h4>Address</h4>
              <p>{contactInfo.address}</p>
              <p>{contactInfo.Campus}</p>
            </div>
          </div>
          
          <div className={styles.contactinfoitem}>
            <div className={styles.contactinfoicon}>
              <FaPhone />
            </div>
            
            <div className={styles.contactinfocontent}>
              <h4>Phone</h4>
              <p>{contactInfo.phone}</p>
            </div>
          </div>
          
          <div className={styles.contactinfoitem}>
            <div className={styles.contactinfoicon}>
              <IoIosMail className='text-[50px]' />
            </div>
            
            <div className={styles.contactinfocontent}>
              <h4>Email</h4>
             <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>
        
        <div className={styles.contactform}>
          <form id={styles.contactForm}>
            <h2>Get in touch</h2>
            <div className={styles.inputbox}>
              <input type="text" required="true" name="" placeholder="Full Name"/>
            </div>
            
            <div className={styles.inputbox}>
              <input type="email" required="true" name="" placeholder="Email"/>
            </div>
            
            <div className={styles.inputbox}>
              <textarea required="true" name="" placeholder="Type Your Message Here...."></textarea>
            </div>
            
            <div className={styles.inputbox}>
                <input type="submit" value="send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
    </>
  )
}

export default ContactUs;
