import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const useGSAP = (callback, deps = []) => {
  const contextRef = useRef();

  useEffect(() => {
    contextRef.current = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    });

    return () => contextRef.current?.revert();
  }, deps);

  return contextRef;
};

export { gsap, ScrollTrigger, ScrollSmoother };
