// Banner.js
import React, { useState, useEffect } from 'react';
import './Banner.css';

// Import your banner images from src/assets
import banner1 from '../../assets/banner1.png'; // Adjusted path (assuming Banner.js is in src/components/)
// import banner2 from '../../assets/banner2.png';
// import banner3 from '../assets/banner3.png';

const banners = [
  { id: 1, image: banner1, alt: 'First promotional banner' },
//   { id: 2, image: banner2, alt: 'Second promotional banner' },
//   { id: 3, image: banner3, alt: 'Third promotional banner' },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Manual navigation dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="banner-container">
      <div className="banner-slider">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={banner.image} alt={banner.alt} className="banner-image" />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="banner-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;