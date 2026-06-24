import React from 'react';

// Slide data interface definition
export interface SlideData {
  id: number;
  partName?: string;
  bgTint?: string;
  content: React.ReactNode;
}
