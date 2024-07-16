import Link from "next/link";
import { FaSearch, FaUser, FaBus } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import styles from "./navgo.module.css";

const Navgo = () => {
  return (
    <>
      <div className={styles.recentSearch}>
        <div className={styles.headingContainer}>
          <h1>Recent Searches</h1>
        </div>
        <div className={styles.searchesList}>
          <div className={styles.searches}>
            <div className={styles.busLogo}>
              <FaBus />
            </div>
            <div className={styles.busNoRoute}>
              <Link href="/buseslist">
                <h1>29</h1>
              </Link>
              <p>SVVV campus to ujjain</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.busPass}>
        <div className={styles.headingContainer}>
          <h1>Buy Bus Pass</h1>
        </div>
        <div className={styles.busPassWrapper}>
          <div className={styles.bPass}>
            <div className={styles.busPassLogo}>
              <RiPassPendingFill />
            </div>
            <div className={styles.bPassHeading}>Bus Pass</div>
          </div>
        </div>
      </div>
      <div className={styles.allBuses}>
        <div className={styles.headingContainer}>
          <h1>See All Routes And Buses</h1>
        </div>
        <div className={styles.busList}>
          <div className={styles.bus1}>
            <div className={styles.busLogo}>
              <FaBus />
            </div>
            <div className={styles.busNoArrivalTime}>
              <div className={styles.busNoRoute}>
                <Link href="/BusList">
                  <h1>29</h1>
                </Link>
                <p>SVVV campus to ujjain</p>
              </div>
              <div className={styles.arrivalTime}>In 15 min</div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bus1}>
            <div className={styles.busLogo}>
              <FaBus />
            </div>
            <div className={styles.busNoArrivalTime}>
              <div className={styles.busNoRoute}>
                <Link href="/BusList">
                  <h1>30</h1>
                </Link>
                <p>SVVV campus to rau</p>
              </div>
              <div className={styles.arrivalTime}>In 10 min</div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.allBusesBtn}>
            <Link href="/BusList">
              <h1>See all buses</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.headingContainer}>
          <h1>Nearby Buses</h1>
        </div>
        <div className={styles.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.3996801259427!2d75.84705207603245!3d22.824697923682027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039c587a8091%3A0x206d00d7a5e4afb3!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1710962385513!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Navgo;
