import { motion } from "framer-motion";
import Reveal from "./Reveal";
import PawScatter from "./PawScatter";
import { img } from "../lib/images";
import { smoothScrollTo } from "../lib/scroll";

const services = [
  {
    title: "Full-Service Grooming",
    desc: "Baths, haircuts, deshedding treatments, and breed-specific cuts done with careful, unhurried hands.",
    image: img.scissors,
    tag: "Signature",
    rotate: -2,
  },
  {
    title: "Creative Pet Styling",
    desc: "Custom, pet-safe hair coloring and seasonal dye trends for the pup who likes to stand out.",
    image: img.colorStyle,
    tag: "Fan Favorite",
    rotate: 2,
  },
  {
    title: "Calming Care",
    desc: "Extra-patient handling built for first-time puppies, senior dogs, and anxious rescues.",
    image: img.calmCare,
    tag: "Gentle",
    rotate: -1,
  },
  {
    title: "Boutique Pet Shop",
    desc: "An on-site retail selection of specialized products and accessories, picked with real pets in mind.",
    image: img.boutique,
    tag: "Shop",
    rotate: 2,
  },
  {
    title: "Puppy's First Groom",
    desc: "A gentle, confidence-building introduction to grooming for new puppies, including our Yorkie litters.",
    image: img.puppyFirst,
    tag: "New Pup",
    rotate: -2,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-plum-950 py-28 md:py-36 overflow-hidden grain">
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full bg-coral/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-teal/10 blur-[120px]" />
      <PawScatter
        className="text-gold-light opacity-40"
        spots={[
          { top: "4%", right: "6%", rotate: 16, size: 32 },
          { top: "90%", left: "4%", rotate: -20, size: 26 },
        ]}
      />

      <div className="container-wide relative z-10">
        <Reveal className="max-w-2xl mb-16">
          <span className="inline-block font-display text-sm tracking-[0.2em] uppercase text-gold-light bg-plum-800 px-4 py-1.5 rounded-full mb-5">
            Specialties &amp; Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-[1.02]">
            Grooming, styled to your pet's personality.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, rotate: 0 }}
                style={{ rotate: `${s.rotate}deg` }}
                className={`group relative h-full rounded-[2rem] bg-plum-900 border border-cream/10 overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-plum-950/60 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-900 via-plum-900/10 to-transparent" />
                  <span className="absolute top-4 right-4 bg-gold text-ink text-xs font-bold px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-cream mb-2">{s.title}</h3>
                  <p className="text-plum-200/80 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}

          <Reveal delay={0.4} className="sm:col-span-2 lg:col-span-1">
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("#book");
              }}
              className="group flex flex-col items-start justify-between h-full min-h-[260px] rounded-[2rem] bg-gold hover:bg-gold-light transition-colors p-6"
            >
              <span className="font-display text-3xl text-ink leading-tight">
                Ready for a fresh look?
              </span>
              <span className="inline-flex items-center gap-2 font-bold text-ink">
                Book your groom
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
