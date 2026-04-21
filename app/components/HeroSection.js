'use client';

import { useState, useEffect } from 'react';
import './hero.css';

const slides = [
  {
    bg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1766820366/top-banner-060625_1_sw7umv.png',
    title: 'A Gemstone That Reflects',
    highlight: 'Energy',
    highlight2: 'Elegance',
    subtitle: 'Find Your Perfect Gemstone',
    offer: 'Flat 10%',
  },
  {
    bg: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1766820366/top-banner-060625_1_sw7umv.png',
    title: 'Discover the Power of',
    highlight: 'Natural',
    highlight2: 'Gemstones',
    subtitle: 'Handcrafted with Perfection',
    offer: 'Flat 10%',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slides[current].bg})` }}
    >
      <div className="hero-content">
        <h1>
          {slides[current].title}{' '}
          <span>{slides[current].highlight}</span> and{' '}
          <span>{slides[current].highlight2}</span>
        </h1>

        {/* <p className="subtitle">{slides[current].subtitle}</p> */}

        <p className="offer">
          <span className="flat-text">Flat</span> <strong>10%</strong>
          <span className="offer-sub">Off on all Gemstone</span>
        </p>


        <div className="hero-buttons">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-outline">Book Free Consultation</button>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={current === i ? 'dot active' : 'dot'}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
