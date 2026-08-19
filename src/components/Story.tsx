import { motion } from "framer-motion";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import PawScatter from "./PawScatter";
import { img } from "../lib/images";

const stats = [
  { to: 5, suffix: "+", label: "Specialty services & styles" },
  { to: 100, suffix: "%", label: "Personalized, one-on-one care" },
  { to: 6, suffix: " days", label: "Open for grooming & shop" },
];

export default function Story() {
  return (
    <section id="story" className="relative bg-cream py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-20 right-0 w-72 h-72 rounded-full bg-plum-300/20 blur-[90px]" />
      <PawScatter
        className="text-plum-600 opacity-15"
        spots={[
          { top: "8%", left: "3%", rotate: -14, size: 30 },
          { top: "62%", right: "5%", rotate: 18, size: 24 },
          { top: "88%", left: "10%", rotate: -6, size: 20 },
        ]}
      />
      <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[5/6] max-w-md mx-auto lg:mx-0 shadow-xl">
            <img src={img.story} alt="Calm, personalized pet spa care at AMG" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 right-4 sm:right-0 bg-plum-800 text-cream rounded-3xl px-6 py-5 shadow-xl max-w-[220px]"
          >
            <p className="font-serif-display italic text-lg leading-snug">
              "Patient with even the most anxious pups."
            </p>
          </motion.div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-block font-display text-sm tracking-[0.2em] uppercase text-plum-600 bg-plum-100 px-4 py-1.5 rounded-full mb-5">
              Our Story
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02]">
              A welcoming, <span className="text-plum-600">community-focused</span> grooming home.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
              AMG Kennel Atlanta was built on one idea: every pet deserves individual attention. Clients
              consistently highlight our professional, personalized care. It's the kind that reduces stress
              for animals and puts nervous owners at ease. Whether it's a first-time puppy, a senior dog,
              or an anxious rescue, our patient team makes the whole experience calm, safe, and even fun.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-10 grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl sm:text-4xl text-plum-700">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-xs sm:text-sm text-ink/60 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
