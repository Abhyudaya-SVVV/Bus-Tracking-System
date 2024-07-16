'use client';

import { useState } from 'react';
import Hero from "@/Components/Hero/page";
import Features from "@/Components/Features/page";

export default function Home() {

  const [showFeatures, setShowFeatures] = useState(false);

  const handleExplore = () => {
    setShowFeatures(true);
  };

  return (
  <>
  {!showFeatures ? (
        <Hero onExplore={handleExplore} />
      ) : (
        <Features />
      )}
  </>
  );
}
