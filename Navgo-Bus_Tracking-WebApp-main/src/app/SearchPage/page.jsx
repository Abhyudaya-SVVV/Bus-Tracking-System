'use client';

import styles from './search.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaBus } from "react-icons/fa";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // Fetch recent searches from backend when component mounts
    fetchRecentSearches();
  }, []);

  const fetchRecentSearches = async () => {
    // Replace this with actual API call
    const mockRecentSearches = [
      { id: 1, busNumber: '29', route: 'SVVV campus to ujjain' },
      { id: 2, busNumber: '30', route: 'SVVV campus to rau' },
      { id: 3, busNumber: '31', route: 'SVVV campus to indore' },
    ];
    setRecentSearches(mockRecentSearches);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement search logic here
  };

  return (
    <>
    <div className={styles.searchPage}>
      <div className={styles.searchBar}>
        <Link href="/Navgo">
          <div className={styles.back}>
            <FaArrowLeft />
          </div>
        </Link>
        <input 
          type="text" 
          placeholder="Search route name or bus number" 
          className={styles.searchInput}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.recentSearchesList}>
        <div className={styles.recentSearchHeading}>
          <h1>Recent Searches</h1>
        </div>
        <div className={styles.searchesList}>
          {recentSearches.map((search) => (
            <div key={search.id} className={styles.bus}>
              <div className={styles.busLogo}>
                <FaBus />
              </div>
              <div className={styles.busNoRoute}>
                <h1>{search.busNumber}</h1>
                <p>{search.route}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchPage
