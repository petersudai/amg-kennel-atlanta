import { motion } from "framer-motion";
import { img } from "../lib/images";
import Marquee from "./Marquee";
import Paw from "./Paw";
import { smoothScrollTo } from "../lib/scroll";

const headline = ["Atlanta", "Meets", "Groomers"];

// Positions trace a walking trail up the left margin, alternating
// slightly left/right like a real gait, smallest print highest up.
const paws = [
  { top: "84%", left: "7%", rotate: -12, size: 34 },
  { top: "64%", left: "16%", rotate: 14, size: 30 },
  { top: "44%", left: "6%", rotate: -10, size: 26 },
  { top: "24%", left: "15%", rotate: 16, size: 22 },
];

const PAW_CYCLE = 6.4;
const PAW_STAGGER = 1.4;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative chalkboard grain overflow-hidden min-h-[100svh] flex flex-col justify-between pt-32 pb-8"
    >
      {/* ambient mural blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-teal/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-coral/15 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-yellow/10 blur-[100px]" />

      {paws.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.5, 0.5, 0], scale: [0.6, 1, 1, 0.8] }}
          transition={{
            duration: PAW_CYCLE,
            times: [0, 0.14, 0.55, 0.78],
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * PAW_STAGGER,
          }}
          className="absolute pointer-events-none hidden md:block"
          style={{ top: p.top, left: p.left, rotate: `${p.rotate}deg` }}
        >
          <Paw
            className="text-gold-light drop-shadow-[0_0_10px_rgba(58,18,64,0.5)]"
            style={{ width: p.size, height: p.size }}
          />
        </motion.div>
      ))}

      <div className="container-wide relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center flex-1">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-plum-800/60 border border-gold/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-cream/80">
              Atlanta, GA &middot; Walk-ins Wed&ndash;Sat
            </span>
          </motion.div>

          <h1 className="font-display text-cream leading-[0.95] text-[clamp(3rem,9vw,7rem)]">
            {headline.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i === 2 ? "text-chalk-outline" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-7 max-w-md font-serif-display text-lg text-plum-200 italic"
          >
            Full-service grooming, creative styling, and a boutique pet shop,
            crafted with personalized, calming care for every coat, every temperament.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("#book");
              }}
              className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-gold/20"
            >
              Book a Groom
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("#services");
              }}
              className="inline-flex items-center gap-2 border border-cream/30 hover:border-gold text-cream font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:bg-cream/5"
            >
              See Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-md lg:max-w-none"
        >
          <div className="relative rounded-[3rem] overflow-hidden border-4 border-gold/40 shadow-2xl shadow-plum-950/50 aspect-[4/5]">
            <img
              src={img.hero}
              alt="Freshly groomed dog at AMG Kennel Atlanta"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-950/40 via-transparent to-transparent" />
          </div>
          <motion.a
            href="https://www.instagram.com/amgkennelatl/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-cream rounded-3xl px-5 py-4 shadow-xl rotate-[-4deg] flex items-center gap-3"
          >
            <span className="w-9 h-9 rounded-full bg-plum-700 text-cream flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span>
              <p className="font-display text-lg text-plum-700 leading-none">Follow the Pack</p>
              <p className="text-xs font-semibold text-ink/60 mt-1">@amgkennelatl</p>
            </span>
          </motion.a>
          <motion.a
            href="#shop"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#shop");
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute -top-5 -right-5 bg-teal text-plum-950 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center rotate-[8deg] shadow-lg"
          >
            <span className="font-display text-sm leading-tight">Boutique<br/>Shop</span>
          </motion.a>
        </motion.div>
      </div>

      <div className="relative z-10 mt-10 border-y border-cream/10 bg-plum-950/40 py-3">
        <Marquee
          className="font-display text-sm sm:text-base tracking-wide text-cream/70 uppercase"
          items={[
            "Full-Service Grooming",
            "Creative Pet Styling",
            "Breed-Specific Cuts",
            "Boutique Pet Shop",
            "Calming, Personalized Care",
            "Walk-Ins Wed–Sat",
          ]}
        />
      </div>
    </section>
  );
}
