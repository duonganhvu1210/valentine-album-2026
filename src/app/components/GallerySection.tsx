import { motion } from "motion/react";
import { Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const base = import.meta.env.BASE_URL; // <-- QUAN TRỌNG

const photos = [
  { url: `${base}moments/01.JPG`, caption: "First met", rotation: -2 },
  { url: `${base}moments/02.png`, caption: "Late-night calls", rotation: 3 },
  { url: `${base}moments/03.JPG`, caption: "Missing you", rotation: -1 },
  { url: `${base}moments/04.JPG`, caption: "Chill", rotation: 2 },
  { url: `${base}moments/05.JPG`, caption: "Food date", rotation: -3 },
  { url: `${base}moments/06.JPG`, caption: "First trip together", rotation: 1 },
  { url: `${base}moments/07.JPG`, caption: "Cute", rotation: -2 },
  { url: `${base}moments/08.JPG`, caption: "Beaches", rotation: 2 },
  { url: `${base}moments/09.JPG`, caption: "Flowers", rotation: -1 },
  { url: `${base}moments/10.JPG`, caption: "Cheers", rotation: 3 },
];

export function GallerySection() {
  return (
    <motion.section
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="text-rose-700" size={32} />
            <h2
              className="text-4xl md:text-5xl text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Our Moments 📸
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            >
              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <div className="aspect-square overflow-hidden rounded-lg mb-3">
                  <ImageWithFallback
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-center text-gray-700 text-sm md:text-base"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
