"use client";

import React from 'react';
import styles from './SphereAnimation.module.css';

export default function SphereAnimation() {
  return (
    <div className={styles.sphereContainer}>
      <div className={styles.sphere}>
        {/* 36 Meridians */}
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={`m-${i}`} className={styles.meridian}></div>
        ))}
        
        {/* 12 Latitudes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`l-${i}`} className={styles.latitude}></div>
        ))}
        
        {/* Axis links */}
        <div className={styles.axis}></div>
        <div className={styles.axis}></div>
      </div>
    </div>
  );
}