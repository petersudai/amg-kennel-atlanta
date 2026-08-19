import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import PawScatter from "./PawScatter";
import { img } from "../lib/images";

const products = [
  {
    title: "Collars & Leads",
    desc: "Everyday and statement pieces, sized for every breed that walks through our door.",
    image: img.shopCollars,
  },
  {
    title: "Treats & Chews",
    desc: "Vet-friendly favorites we actually recommend to our own grooming clients.",
    image: img.shopTreats,
  },
  {
    title: "Toys",
    desc: "Durable, chew-tested picks for pups with something to prove.",
    image: img.shopToys,
  },
  {
    title: "Bandanas & Bows",
    desc: "The finishing touch after a fresh groom, in colors picked for the season.",
    image: img.shopBandanas,
  },
];

export default function Shop() {
  return (
    <section id="shop" className="relative bg-plum-950 py-28 md:py-36 overflow-hidden grain">
      <div className="pointer-events-none absolute top-0 left-1/3 w-96 h-96 rounded-full bg-yellow/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-coral/10 blur-[110px]" />
      <PawScatter
        className="text-gold-light opacity-40"
        spots={[
          { top: "8%", right: "5%", rotate: -14, size: 30 },
          { top: "92%", left: "8%", rotate: 18, size: 26 },
        ]}
      />

      <div className="container-wide relative z-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="inline-block font-display text-sm tracking-[0.2em] uppercase text-gold-light bg-plum-800 px-4 py-1.5 rounded-full mb-5">
              Boutique Shop
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-[1.02]">
              Everything on the shelf, picked for real pets.
            </h2>
          </div>
          <a
            href="#visit"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-gold/20 shrink-0"
          >
            Visit In-Store
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="group h-full">
                <div className="h-full rounded-[1.75rem] bg-plum-900 border border-cream/10 overflow-hidden">
                  <div className="relative aspect-square">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-cream mb-1.5">{p.title}</h3>
                    <p className="text-plum-200/75 text-sm leading-relaxed">{p.desc}</p>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-gold-light text-sm font-semibold">
                      Available In-Store
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8">
          <div className="rounded-[1.75rem] bg-gold/10 border border-gold/30 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              <img
                src={img.puppyFirst}
                alt="Yorkie puppy available at AMG Kennel Atlanta"
                className="w-16 h-16 rounded-2xl object-cover shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-xl text-cream">Yorkie Litters</h3>
                <p className="text-plum-200/75 text-sm mt-1">
                  Occasional litters raised in-house. Ask us about current availability.
                </p>
              </div>
            </div>
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="shrink-0 inline-flex items-center gap-2 border border-gold/50 hover:bg-gold hover:text-ink text-gold-light font-semibold px-5 py-3 rounded-full transition-colors duration-300"
            >
              Inquire About a Litter
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 mt-14 border-y border-cream/10 py-3">
        <Marquee
          className="font-display text-sm sm:text-base tracking-wide text-cream/70 uppercase"
          items={["New Arrivals", "Boutique Picks", "Groomer Approved", "Local Pickup Available"]}
        />
      </div>
    </section>
  );
}
