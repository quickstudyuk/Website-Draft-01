'use client';

import React, { useState } from 'react';
import styles from './ParentVideos.module.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  thumbnail: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Misbah Ur Rahman",
    role: "Parent of Year 11 GCSE Student",
    quote: "QuickStudy completely transformed how my son prepared for his GCSEs.",
    thumbnail: "/testimonials/parent1_thumb.png",
    videoUrl: "/testimonials/parent1.mp4"
  },
  {
    id: 2,
    name: "Hazel",
    role: "Parent of Year 8 Student",
    quote: "The live parents dashboard kept me updated every session on her homeworks and progress",
    thumbnail: "/testimonials/parent2_thumb.png",
    videoUrl: "/testimonials/parent2.mp4"
  },
  {
    id: 3,
    name: "Mihi Joy",
    role: "Parent of Year 13 A-Level Student",
    quote: "The exam technique tutoring at QuickStudy made all the difference for my daughter's A-levels.",
    thumbnail: "/testimonials/parent3_thumb.png",
    videoUrl: "/testimonials/parent3.mp4"
  }
];

export default function ParentVideos() {
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);
  const [videoHasError, setVideoHasError] = useState(false);

  const openVideoModal = (testimonial: Testimonial) => {
    setActiveVideo(testimonial);
    setVideoHasError(false);
  };

  const closeModal = () => {
    setActiveVideo(null);
    setVideoHasError(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.bgBlur1}></div>
      <div className={styles.bgBlur2}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Hear From Our Parents!</h2>
          <p className={styles.subtitle}>
            See how QuickStudy helps families transform their children's learning experience and academic confidence.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className={styles.card}
              onClick={() => openVideoModal(t)}
            >
              <div className={styles.videoWrapper}>
                <img 
                  src={t.thumbnail} 
                  alt={`${t.name}'s testimonial thumbnail`} 
                  className={styles.thumbnail}
                />
                <div className={styles.playButtonOverlay}>
                  <svg className={styles.playIcon} viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.authorMeta}>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Overlay Modal */}
      {activeVideo && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {!videoHasError ? (
              <video 
                src={activeVideo.videoUrl} 
                className={styles.videoPlayer}
                controls 
                autoPlay 
                onError={() => setVideoHasError(true)}
              />
            ) : (
              <div className={styles.errorFallback}>
                <div className={styles.errorIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <h3 className={styles.errorTitle}>Video File Coming Soon</h3>
                <p className={styles.errorDesc}>
                  We are ready to play the video for <strong>{activeVideo.name}</strong>. If you are the administrator, please upload the video file here to enable playback:
                </p>
                <p className={styles.errorCodeBlock}>
                  /public{activeVideo.videoUrl}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
