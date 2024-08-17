'use client'
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image'; // Import Image component from Next.js

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Box className="fixed bottom-5 right-5 z-50">
      {visible && (
        <Box onClick={scrollToTop} className="cursor-pointer">
          <Image
            src="/scroller.png" // Replace with your image path
            alt="Scroll to Top"
            width={100} // Adjust the width as needed
            height={100} // Adjust the height as needed
          />
        </Box>
      )}
    </Box>
  );
}

export default ScrollToTop;
