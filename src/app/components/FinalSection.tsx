import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function FinalSection() {
  return (
    <motion.section
      className="py-32 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="inline-block text-rose-600 mb-6" size={48} />
          <h2
            className="text-3xl md:text-5xl text-gray-800 leading-relaxed mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Em không chỉ là Valentine của anh —
            <br />
            <span className="text-rose-700">mà là cả "luôn luôn" của anh.</span>
          </h2>
        </motion.div>

        <motion.button
          className="bg-gradient-to-r from-rose-600 to-pink-500 text-white px-12 py-5 rounded-full text-lg flex items-center gap-3 mx-auto hover:from-rose-700 hover:to-pink-600 transition-all shadow-2xl"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(225, 29, 72, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="fill-white" size={24} />
          Forever, V & Q 💞
        </motion.button>

        <motion.div
          className="mt-20 text-gray-500 text-sm"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Made with love by V • 14/02/2026
        </motion.div>
      </div>
    </motion.section>
  );
}
