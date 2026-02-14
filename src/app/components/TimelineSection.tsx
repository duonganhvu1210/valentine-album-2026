import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const timelineEvents = [
  { label: "We met", date: "21 Mar 2024", icon: "💫" },
  { label: "We became us", date: "23 Mar 2024", icon: "💕" },
  { label: "Valentine 2026", date: "14 Feb 2026", icon: "💖" },
];

// IMPORTANT: use local time safely by specifying Y, M-1, D
const loveStart = new Date(2024, 2, 23, 0, 0, 0); // 23 Mar 2024
const anniversary = new Date(2026, 2, 23, 0, 0, 0); // 23 Mar 2026

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

function diffParts(ms: number) {
  const sign = ms < 0 ? -1 : 1;
  const abs = Math.abs(ms);

  const totalSeconds = Math.floor(abs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { sign, days, hours, minutes, seconds };
}

export function TimelineSection() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const together = useMemo(() => diffParts(now.getTime() - loveStart.getTime()), [now]);
  const left = useMemo(() => diffParts(anniversary.getTime() - now.getTime()), [now]);

  const countdownEnded = left.sign < 0;

  return (
    <motion.section
      className="py-32 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/40">
            Our timeline
          </p>

          <h2
            className="mt-3 text-3xl md:text-4xl text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Every moment led us here
          </h2>

          <p className="mt-3 text-gray-600">
            From the first hello to forever.
          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Days together */}
          <div className="bg-white/70 rounded-2xl py-7 px-6 shadow-md">
            <p className="text-sm text-gray-500">Time since we became us</p>

            <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
              <div>
                <p className="text-3xl font-semibold text-rose-600 leading-none">
                  {together.days}
                </p>
                <p className="text-xs text-gray-500 mt-1">days</p>
              </div>

              <div className="text-2xl text-gray-400 leading-none pb-1">•</div>

              <p className="text-lg md:text-xl font-semibold text-gray-800">
                {pad2(together.hours)}:{pad2(together.minutes)}:{pad2(together.seconds)}
              </p>
              <p className="text-xs text-gray-500 md:ml-2">hours : mins : secs</p>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Since 23 Mar 2024
            </p>
          </div>

          {/* Countdown */}
          <div className="bg-white/70 rounded-2xl py-7 px-6 shadow-md">
            <p className="text-sm text-gray-500">
              {countdownEnded ? "2-year anniversary is here 🎉" : "Countdown to our 2-year anniversary"}
            </p>

            {!countdownEnded ? (
              <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
                <div>
                  <p className="text-3xl font-semibold text-rose-600 leading-none">
                    {left.days}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">days left</p>
                </div>

                <div className="text-2xl text-gray-400 leading-none pb-1">•</div>

                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  {pad2(left.hours)}:{pad2(left.minutes)}:{pad2(left.seconds)}
                </p>
                <p className="text-xs text-gray-500 md:ml-2">hours : mins : secs</p>
              </div>
            ) : (
              <p className="mt-3 text-lg font-semibold text-gray-800">
                Happy 2 years, Q 💗
              </p>
            )}

            <p className="mt-4 text-xs text-gray-500">
              Target date: 23 Mar 2026
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* glow */}
          <div className="absolute left-8 right-8 top-[44px] h-[10px] blur-xl opacity-40 bg-gradient-to-r from-pink-300 via-rose-400 to-rose-500 rounded-full" />

          {/* line */}
          <motion.div
            className="absolute left-8 right-8 top-[48px] h-[3px] rounded-full bg-gradient-to-r from-pink-300 via-rose-400 to-rose-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            style={{ transformOrigin: "left" }}
          />

          <div className="relative grid grid-cols-3 gap-8 md:gap-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + index * 0.18, duration: 0.55 }}
              >
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-md
                             shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)]
                             ring-1 ring-black/10 flex items-center justify-center"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div className="w-[76%] h-[76%] rounded-full border-2 border-rose-300/80 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl">{event.icon}</span>
                  </div>
                </motion.div>

                <p className="mt-5 font-medium text-gray-900">{event.label}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
