import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({ 
  onPrev, 
  onNext, 
  canGoPrev, 
  canGoNext 
}) => {
  return (
    <div data-cmp="SlideNavigation" className="absolute bottom-16 right-16 flex space-x-8 z-50">
      <button 
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`p-4 rounded-full border-2 border-[rgb(200,200,200)] bg-[rgba(255,255,255,0.8)] backdrop-blur transition-all duration-300
          ${!canGoPrev ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[rgb(240,240,240)] shadow-custom hover:scale-105'}
        `}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-[rgb(80,80,80)]" size={36} />
      </button>
      <button 
        onClick={onNext}
        disabled={!canGoNext}
        className={`p-4 rounded-full border-2 border-[rgb(200,200,200)] bg-[rgba(255,255,255,0.8)] backdrop-blur transition-all duration-300
          ${!canGoNext ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[rgb(240,240,240)] shadow-custom hover:scale-105'}
        `}
        aria-label="Next slide"
      >
        <ChevronRight className="text-[rgb(80,80,80)]" size={36} />
      </button>
    </div>
  );
};

export default SlideNavigation;
