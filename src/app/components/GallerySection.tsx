import { motion } from "motion/react";
import { Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const photos = [
  { url: "/moments/01.JPG", caption: "First met", rotation: -2 },
  { url: "/moments/02.png", caption: "Late-night calls", rotation: 3 },
  { url: "/moments/03.JPG", caption: "Missing you", rotation: -1 },
  { url: "/moments/04.JPG", caption: "Chill", rotation: 2 },
  { url: "/moments/05.JPG", caption: "Food date", rotation: -3 },
  { url: "/moments/06.JPG", caption: "First trip together", rotation: 1 },
  { url: "/moments/07.JPG", caption: "Cute", rotation: -2 },
  { url: "/moments/08.JPG", caption: "Beaches", rotation: 2 },
  { url: "/moments/09.JPG", caption: "Flowers", rotation: -1 },
  { url: "/moments/10.JPG", caption: "Cheers", rotation: 3 },
];

export function GallerySection() {
  return (
    <motion.section
      className="py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Camera className="text-rose-700" size={28} />
            <h2
              className="text-4xl md:text-5xl text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Our Moments
            </h2>
          </div>
          <p className="text-gray-600">
            Little memories I keep close.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {photos.map((photo, index) => {
            const featured = index === 0 || index === 5; // 2 ảnh to hơn

            return (
              <motion.div
                key={index}
                className={`relative ${featured ? "col-span-2" : ""}`}
                initial={{ opacity: 0, scale: 0.92, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
              >
                {/* Polaroid Card */}
                <div className="bg-white/95 rounded-3xl p-3 shadow-2xl ring-1 ring-black/5">
                  <div
                    className={`${
                      featured ? "aspect-[16/9]" : "aspect-[3/4]"
                    } overflow-hidden rounded-2xl bg-black`}
                  >
                    <ImageWithFallback
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p
                    className="mt-3 text-center text-neutral-800 text-sm md:text-base"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                    }}
                  >
                    {photo.caption}
                  </p>

                  {/* Small scrapbook label for featured */}
                  {featured && (
                    <div className="mt-2 flex justify-center">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-rose-700 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-xs text-gray-500">
          Tip: Put your photos in <span className="font-semibold">public/moments</span> as 01.jpg → 10.jpg.
        </p>
      </div>
    </motion.section>
  );
}
