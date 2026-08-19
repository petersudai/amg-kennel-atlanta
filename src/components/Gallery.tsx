import { motion } from "framer-motion";
import Reveal from "./Reveal";
import PawScatter from "./PawScatter";
import { img } from "../lib/images";

const captions = [
  "Fresh cut, ready to strut",
  "Creative color day",
  "Precision, breed-specific",
  "Spa day calm",
  "Yorkie litter cutie",
  "Topknot perfection",
  "Puppy's first visit",
  "Full glam finish",
  "Studio regular",
  "Camera ready",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream py-28 md:py-36 overflow-hidden">
      <svg className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 opacity-70" viewBox="0 0 200 200">
        <path fill="var(--color-teal)" opacity="0.25" d="M45.5,-58.3C58.3,-49.9,67.4,-33.9,70.6,-16.9C73.8,0.1,71.1,18.1,62.1,32.2C53.1,46.3,37.8,56.5,20.6,62.5C3.4,68.5,-15.7,70.3,-32.3,64.1C-48.9,57.9,-63,43.7,-68.9,26.5C-74.8,9.3,-72.5,-10.9,-63.4,-27.1C-54.3,-43.3,-38.4,-55.5,-21.5,-62.9C-4.6,-70.3,13.3,-72.9,29.5,-68.5C45.7,-64.1,60.2,-52.7,45.5,-58.3Z" transform="translate(100 100)" />
      </svg>
      <svg className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 opacity-60" viewBox="0 0 200 200">
        <path fill="var(--color-coral)" opacity="0.2" d="M39.9,-51.6C52.9,-42.5,65.3,-31.5,70.2,-17.3C75.1,-3.1,72.5,14.3,64.4,28.6C56.3,42.9,42.7,54.1,27.4,60.6C12.1,67.1,-4.9,68.9,-21.1,64.7C-37.3,60.5,-52.7,50.3,-61.8,35.9C-70.9,21.5,-73.7,2.9,-69.6,-13.5C-65.5,-29.9,-54.5,-44.1,-41,-53.4C-27.5,-62.7,-11.5,-67.1,2.1,-70C15.7,-72.9,26.9,-60.7,39.9,-51.6Z" transform="translate(100 100)" />
      </svg>
      <PawScatter
        className="text-plum-600 opacity-15"
        spots={[
          { top: "6%", right: "8%", rotate: 12, size: 26 },
          { top: "94%", left: "40%", rotate: -16, size: 22 },
        ]}
      />

      <div className="container-wide relative z-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="inline-block font-display text-sm tracking-[0.2em] uppercase text-plum-600 bg-plum-100 px-4 py-1.5 rounded-full mb-5">
              Gallery
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02]">
              Straight from the studio floor.
            </h2>
          </div>
          <p className="text-ink/60 max-w-sm">
            A peek at the transformations, the boutique corner, and the pups who make our purple wall famous.
          </p>
        </Reveal>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {img.gallery.map((src, i) => (
            <Reveal key={src + i} delay={(i % 6) * 0.06} y={20} className="break-inside-avoid">
              <motion.figure
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={captions[i] ?? "AMG groomed pet"}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 sm:from-plum-950/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <figcaption className="text-cream font-semibold text-sm">{captions[i]}</figcaption>
                </div>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
