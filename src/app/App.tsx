import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingHearts } from './components/FloatingHearts';
import { HeroSection } from './components/HeroSection';
import { LoveLetterSection } from './components/LoveLetterSection';
import { GallerySection } from './components/GallerySection';
import { TimelineSection } from './components/TimelineSection';
import { FinalSection } from './components/FinalSection';

export default function App() {
  const [showContent, setShowContent] = useState(false);

  const handleOpenHeart = () => {
    setShowContent(true);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }, 300);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 -z-10" />

      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection onOpenHeart={handleOpenHeart} />

        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LoveLetterSection />
              <GallerySection />
              <TimelineSection />
              <FinalSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
