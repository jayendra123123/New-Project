
import React from 'react';
import { Icon } from './Icon';
import { SquiggleSVG, CircleSVG } from '../constants';

export const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Right Sun */}
      <div className="absolute top-20 right-[10%] text-primary/20 floating-anim">
        <Icon 
          name="wb_sunny" 
          className="text-[120px]" 
          style={{ fontVariationSettings: "'FILL' 1" }} 
        />
      </div>

      {/* Bottom Left Cloud */}
      <div className="absolute bottom-20 left-[5%] text-[#e7dbcf] floating-anim-delayed">
        <Icon 
          name="cloud" 
          className="text-[180px]" 
          style={{ fontVariationSettings: "'FILL' 1" }} 
        />
      </div>

      {/* Random Squiggles */}
      <div className="absolute top-[40%] left-[10%] text-primary/30 rotate-12">
        <SquiggleSVG />
      </div>

      <div className="absolute bottom-[30%] right-[15%] text-ink/10 -rotate-12">
        <CircleSVG />
      </div>
      
      {/* Additional small dots/stars */}
      <div className="absolute top-[15%] left-[25%] text-primary/40 animate-pulse">
        <Icon name="star" className="text-2xl" />
      </div>
      <div className="absolute bottom-[45%] right-[25%] text-primary/20">
        <Icon name="gesture" className="text-4xl" />
      </div>
    </div>
  );
};
