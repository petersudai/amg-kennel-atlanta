import Reveal from "./Reveal";
import PawScatter from "./PawScatter";
import { img } from "../lib/images";

const testimonials = [
  {
    quote:
      "My rescue is terrified of new places, but the team here was so patient with her. First groom without a single meltdown.",
    name: "Jasmine R.",
    pet: "Owner of Luna",
    avatar: img.avatars[0],
  },
  {
    quote:
      "Asked for a bold seasonal color on my poodle and it came out exactly like the inspo photo. Pet-safe, vibrant, no irritation.",
    name: "Marcus T.",
    pet: "Owner of Biscuit",
    avatar: img.avatars[1],
  },
  {
    quote:
      "Our senior boy has bad hips and needs a gentle touch. They adjusted everything for his comfort without being asked twice.",
    name: "Dana W.",
    pet: "Owner of Tank",
    avatar: img.avatars[2],
  },
  {
    quote:
      "Walked in Saturday with zero appointment, out in under two hours looking like a show dog. Boutique shop is a fun bonus.",
    name: "Priya K.",
    pet: "Owner of Milo",
    avatar: img.avatars[0],
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-plum-950 py-28 md:py-36 overflow-hidden grain">
      <PawScatter
        className="text-gold-light opacity-40"
        spots={[
          { top: "6%", left: "5%", rotate: -18, size: 28 },
          { top: "88%", right: "6%", rotate: 22, size: 32 },
        ]}
      />
      <div className="container-wide relative z-10">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block font-display text-sm tracking-[0.2em] uppercase text-gold-light bg-plum-800 px-4 py-1.5 rounded-full mb-5">
            Client Love
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-[1.02]">
            Loved by pups and their people, every visit.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full flex flex-col justify-between bg-plum-900 border border-cream/10 rounded-3xl p-6 rotate-[var(--r)]" style={{ ["--r" as string]: `${i % 2 === 0 ? -1.5 : 1.5}deg` }}>
                <div>
                  <span className="font-display text-4xl text-gold leading-none">&ldquo;</span>
                  <p className="text-plum-100 text-sm leading-relaxed mt-1">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <img src={t.avatar} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-gold/50" loading="lazy" />
                  <div>
                    <p className="text-cream font-semibold text-sm">{t.name}</p>
                    <p className="text-plum-300 text-xs">{t.pet}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
