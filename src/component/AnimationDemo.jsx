import React from 'react';
import { SplitText, TextSwap, WordReveal } from '../animations/SplitText';
import { ScrollRevealText } from '../animations/ScrollRevealText';
import ToggleAnimation from '../animations/ToggleAnimation';
import SocialIconHover from '../animations/SocialIconHover';

const AnimationDemo = () => {
  return (
    <div className="w-full py-20 px-4 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-black mb-4">
            <SplitText delay={0}>Animation System Demo</SplitText>
          </h1>
          <p className="text-xl">
            <WordReveal delay={0.5}>
              All animations are working and ready to use
            </WordReveal>
          </p>
        </div>

        {/* Text Swap Demo */}
        <div className="bg-white dark:bg-bg-card-dark p-8 rounded-xl border-4 border-dark-text dark:border-white/20">
          <h2 className="text-3xl font-black mb-4">Text Swap Animation</h2>
          <p className="text-2xl">
            I am a <TextSwap words={['Developer', 'Designer', 'Engineer', 'Creator']} interval={2000} />
          </p>
        </div>

        {/* Scroll Reveal Demo */}
        <div className="bg-white dark:bg-bg-card-dark p-8 rounded-xl border-4 border-dark-text dark:border-white/20">
          <h2 className="text-3xl font-black mb-4">Scroll Reveal Text</h2>
          <p className="text-lg">
            <ScrollRevealText type="words">
              This text will animate when you scroll to it. Each word appears one by one with a smooth fade-in effect.
            </ScrollRevealText>
          </p>
        </div>

        {/* Toggle Animation Demo */}
        <div>
          <h2 className="text-3xl font-black mb-4">Toggle Animations</h2>
          <div className="space-y-4">
            <ToggleAnimation title="Frontend Skills" icon="code">
              <p>React, JavaScript, HTML5, CSS3, Tailwind CSS, GSAP, Three.js</p>
            </ToggleAnimation>
            <ToggleAnimation title="Backend Skills" icon="dns">
              <p>Node.js, Express.js, MongoDB, REST APIs</p>
            </ToggleAnimation>
          </div>
        </div>

        {/* Social Icon Hover Demo */}
        <div className="bg-white dark:bg-bg-card-dark p-8 rounded-xl border-4 border-dark-text dark:border-white/20">
          <h2 className="text-3xl font-black mb-4">Social Icon Hover Effect</h2>
          <div className="flex gap-4">
            <SocialIconHover>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-2xl">🎨</span>
              </div>
            </SocialIconHover>
            <SocialIconHover>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-2xl">🚀</span>
              </div>
            </SocialIconHover>
            <SocialIconHover>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-2xl">⚡</span>
              </div>
            </SocialIconHover>
          </div>
        </div>

        {/* Cursor Tracker Info */}
        <div className="bg-primary/20 p-8 rounded-xl border-4 border-primary">
          <h2 className="text-3xl font-black mb-4">Cursor Tracker</h2>
          <p className="text-lg mb-4">
            A custom cursor follows your mouse on desktop. Hover over elements with <code className="bg-black/20 px-2 py-1 rounded">data-cursor="hover"</code> to see it scale up.
          </p>
          <button className="px-6 py-3 bg-primary rounded-lg font-bold" data-cursor="hover">
            Hover over me!
          </button>
        </div>

        {/* Keyboard Controls */}
        <div className="bg-white dark:bg-bg-card-dark p-8 rounded-xl border-4 border-dark-text dark:border-white/20">
          <h2 className="text-3xl font-black mb-4">3D Character Controls</h2>
          <p className="text-lg mb-4">
            The 3D character in the hero section responds to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Scroll</strong>: Character rotates</li>
            <li><strong>Keys 1, 2, 5, 6</strong>: Trigger animations</li>
            <li><strong>Hover</strong>: Eyebrows raise</li>
            <li><strong>Automatic</strong>: Blinking and idle animations</li>
          </ul>
        </div>

        {/* Animation Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            '✅ 3D Character Animation',
            '✅ GSAP Scroll Animations',
            '✅ SplitText Animations',
            '✅ Scroll-Triggered Text',
            '✅ Cursor Tracker',
            '✅ Social Icon Hover',
            '✅ Tech Stack Carousel',
            '✅ Project Carousel',
            '✅ Loading Progress',
            '✅ Toggle Animations',
            '✅ Background Animations',
            '✅ ScrollSmoother Ready'
          ].map((item, i) => (
            <div key={i} className="bg-green-100 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-500">
              <p className="font-bold">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AnimationDemo;
