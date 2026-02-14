import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenHeart: () => void;
}

export function HeroSection({ onOpenHeart }: HeroSectionProps) {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-2xl z-10">
        <motion.h1
  className="text-5xl md:text-7xl mb-6"
  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  Happy Valentine’s Day, Q
  <br />
  <span className="text-rose-700">my love, my future.</span> 💘
</motion.h1>

<motion.p
  className="text-xl md:text-2xl text-gray-700 mb-12"
  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  No matter the distance, you’re always with me.
</motion.p>

<p className="mb-8 text-[11px] tracking-[0.35em] uppercase text-black/35">
  V & Q • Valentine 2026
</p>



        <motion.button
          onClick={onOpenHeart}
          className="bg-rose-700 text-white px-10 py-4 rounded-full text-lg flex items-center gap-3 mx-auto hover:bg-rose-800 transition-colors shadow-lg"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="fill-white" size={24} />
          Open V’s Heart
        </motion.button>

        {/* Floating hearts around button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI * 2) / 8) * 150],
                y: [0, Math.sin((i * Math.PI * 2) / 8) * 150],
                opacity: [0.7, 0],
                scale: [0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
            >
              <Heart className="text-pink-400 fill-pink-300" size={16} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
