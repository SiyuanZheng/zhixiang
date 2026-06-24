import React from 'react';

interface SlideProgressProps {
  currentSlide: number;
  totalSlides: number;
  partName?: string;
}

const SlideProgress: React.FC<SlideProgressProps> = ({ 
  currentSlide, 
  totalSlides,
  partName
}) => {
  const percentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div data-cmp="SlideProgress" className="absolute top-0 left-0 w-full z-50">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-[rgba(0,0,0,0.05)]">
        <div 
          className="h-full bg-[rgb(120,120,120)] transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {/* Header Info */}
      <div className="absolute top-10 left-16 flex items-center space-x-6">
        <span className="text-[rgb(120,120,120)] font-serif tracking-widest text-xl">
          {currentSlide + 1} / {totalSlides}
        </span>
        {partName && (
          <>
            <span className="w-px h-6 bg-[rgb(200,200,200)]" />
            <span className="text-[rgb(100,100,100)] font-serif tracking-widest text-xl">
              {partName}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default SlideProgress;
