import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export function LoveLetterSection() {
  return (
    <motion.section
      className="py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl"
          whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Mail className="text-rose-700" size={28} />
            <h2
              className="text-3xl md:text-4xl text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              A letter for you, Q 💌
            </h2>
          </div>

          <div
            className="text-lg md:text-xl text-gray-700 space-y-6 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            <p>
              <strong className="text-rose-700">Thank you for choosing me.</strong>
              <br />
              <strong className="text-rose-700">Thank you for staying.</strong>
            </p>

            <p>
  Anh không hoàn hảo,
  <br />
  nhưng yêu em là điều đúng đắn nhất anh từng làm.
</p>

<p>
  Dù khoảng cách có xa,
  <br />
  dù thời gian có dài,
  <br />
  anh vẫn chọn em — hôm nay, ngày mai, và mãi về sau. 
  <br/>
  <br/>
  Cùng nhau đi tiếp đi thật xa và yêu thương nhau thật nhiều, thêm thật nhiều kỉ niệm của 2 đứa nữa, và hướng tới anni nha vợ. 
  <br/>
  <br/>
  Thêm một lần nữa, <strong className="text-rose-700">Happy Valentine's Day, vợ anh</strong>.
  <br/>
  <br />
  ANH YÊU VỢ NHIỀU LẮM 💖
</p>


            <div className="pt-8 text-right">
              <p
                className="text-2xl text-rose-700"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                — Vu aka DAV aka V aka Chong em 💖
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
