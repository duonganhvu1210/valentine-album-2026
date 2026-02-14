import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0.1,
            scale: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          <Heart className="text-pink-300 fill-pink-200" size={24} />
        </motion.div>
      ))}
    </div>
  );
}
