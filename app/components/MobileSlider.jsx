"use client";
import React from "react";
import ShopProductCard from "./ShopProductCard";

const MobileSlider = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isInteracting, setIsInteracting] = React.useState(false);

  const sliderRef = React.useRef(null);
  const timeoutRef = React.useRef(null);
  const isAutoScrolling = React.useRef(false);

  // 🧠 AUTO SLIDE
  React.useEffect(() => {
    if (isInteracting || items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInteracting, items.length]);

  // 🛑 USER INTERACTION
  const handleInteraction = () => {
    if (isAutoScrolling.current) return;

    setIsInteracting(true);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2000);
  };

  // 🖐 SCROLL SYNC
  const handleScroll = () => {
    if (isAutoScrolling.current) return;

    handleInteraction();

    const container = sliderRef.current;
    if (!container) return;

    const index = Math.round(
      container.scrollLeft / container.clientWidth
    );

    setCurrentIndex(index);
  };

  // 🎯 MOVE SLIDER (IMPORTANT FIX)
  React.useEffect(() => {
    if (!sliderRef.current || isInteracting) return;

    const container = sliderRef.current;

    isAutoScrolling.current = true;

    container.scrollTo({
      left: currentIndex * container.clientWidth,
      behavior: "smooth",
    });

    const timer = setTimeout(() => {
      isAutoScrolling.current = false;
    }, 600);

    return () => clearTimeout(timer);
  }, [currentIndex, isInteracting]);

  return (
    <div className="w-full overflow-hidden px-4">
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        onTouchStart={handleInteraction}
        onMouseDown={handleInteraction}
        className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-center"
          >
            <ShopProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSlider;