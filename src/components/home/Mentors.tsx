'use client';
import React, { useState, useEffect } from 'react';
import styles from './Mentors.module.css';

const mentors = [
  {
    name: "Nayyir Rahman",
    subjects: "Physics, Chemistry and Maths",
    experience: "6 Years",
    image: "/mentors/nayyir.png"
  },
  {
    name: "Omar Al Mahabub",
    subjects: "Chemistry, Biology and English",
    experience: "5 Years",
    image: "/mentors/omar.png"
  },
  {
    name: "Tasbira Rezwan",
    subjects: "Physics, Chemistry and Maths",
    experience: "8 Years",
    image: "/mentors/tasbira.png"
  },
  {
    name: "Salma Akter Moushumi",
    subjects: "Physics, Chemistry and Maths",
    experience: "9 Years",
    image: "/mentors/salma.png"
  },
  {
    name: "Aria Hussain Saye",
    subjects: "All Science and Maths",
    experience: "5 Years",
    image: "/mentors/aria.png"
  },
  {
    name: "Illin Gani",
    subjects: "English & Maths",
    experience: "6 Years",
    image: "/mentors/illin.png"
  },
  {
    name: "Ishrat Zaman Lubna",
    subjects: "All Science and English",
    experience: "8 Years",
    image: "/mentors/ishrat.png"
  },
  {
    name: "Md. Rashid Anjum Nuyel",
    subjects: "All Science and Maths",
    certification: "PEARSON Certified",
    experience: "6 Years",
    image: "/mentors/rashid.png"
  }
];

export default function Mentors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3); // Desktop shows 3 items
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.max(0, mentors.length - itemsPerView + 1);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#0f172a', fontWeight: 800 }}>
          Meet Some of Our Mentors
        </h2>
        
        <div 
          className={styles.carouselContainer} 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
            }}
          >
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className={styles.carouselCardWrapper}
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                <div className={styles.mentorCard}>
                  <div className={styles.imageContainer}>
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className={styles.mentorImage}
                      onError={(e) => {
                        // Fallback image if the specific mentor photo hasn't been uploaded yet
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=f1f5f9&color=475569&size=400&font-size=0.33`;
                      }}
                    />
                  </div>
                  <div className={styles.mentorInfo}>
                    <h3 className={styles.mentorName}>{mentor.name}</h3>
                    <p className={styles.mentorSubjects}>{mentor.subjects}</p>
                    {mentor.certification && <p className={styles.mentorCertification}>{mentor.certification}</p>}
                    <p className={styles.mentorExperience}>Experience: {mentor.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalSlides > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
