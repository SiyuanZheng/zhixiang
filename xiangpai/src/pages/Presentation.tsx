import React, { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from '../data/slides';
import SlideNavigation from '../components/SlideNavigation';
import SlideProgress from '../components/SlideProgress';

const Presentation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation setup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable default space scroll
      if (e.key === 'Space' || e.code === 'Space') {
          e.preventDefault();
      }
      
      if (e.key === 'ArrowRight' || e.code === 'Space') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Screen Auto-scaling functionality
  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const scaleWidth = windowWidth / 1440;
      const scaleHeight = windowHeight / 810;
      
      setScale(Math.min(scaleWidth, scaleHeight));
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-[rgb(20,20,20)] flex justify-center items-center font-sans selection:bg-[rgb(200,200,200)] select-none overflow-hidden"
    >
      <div 
        className="relative shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden transition-colors duration-1000 flex flex-col shrink-0"
        style={{ 
          width: '1440px',
          height: '810px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          backgroundColor: currentSlide.bgTint || 'rgb(248,247,243)' 
        }}
      >
        <SlideProgress 
          currentSlide={currentIndex} 
          totalSlides={totalSlides} 
          partName={currentSlide.partName}
        />
        
        {/* Adjusted vertical padding from py-12 to py-6 to give more vertical breathing room to content */}
        <div 
          className="flex-1 w-full flex flex-col justify-center px-16 py-6 animate-in fade-in zoom-in-95 duration-700"
          key={currentSlide.id}
        >
          {currentSlide.content}
        </div>

        <SlideNavigation 
          onPrev={handlePrev}
          onNext={handleNext}
          canGoPrev={currentIndex > 0}
          canGoNext={currentIndex < totalSlides - 1}
        />
      </div>
    </div>
  );
};

export default Presentation;
