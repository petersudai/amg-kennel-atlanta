import Reveal from "./Reveal";
import PawScatter from "./PawScatter";

const hours = [
  { label: "Pet Store", value: "Mon–Fri · 10am–6pm" },
  { label: "Grooming (Mon–Tue)", value: "Appointments Only" },
  { label: "Grooming (Wed–Sat)", value: "10am–6pm" },
  { label: "Walk-Ins", value: "Wed–Sat, until 2pm" },
];

const payments = ["Cash", "Card", "Zelle", "Apple Pay"];

export default function Visit() {
  return (
    <section id="visit" className="relative chalkboard grain py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 left-0 w-80 h-80 rounded-full bg-plum-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[120px]" />
      <PawScatter
        className="text-gold-light opacity-50"
        spots={[
          { top: "10%", right: "10%", rotate: 20, size: 30 },
          { top: "50%", left: "4%", rotate: -25, size: 22 },
          { top: "85%", right: "22%", rotate: 10, size: 26 },
        ]}
      />

      <div className="container-wide relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-display text-sm tracking-[0.2em] uppercase text-gold-light bg-plum-800 px-4 py-1.5 rounded-full mb-5">
            Hours &amp; Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-[1.02]">
            Come see the purple wall.
          </h2>
          <p className="mt-4 text-plum-200/80">
            Straight off our studio chalkboard, the same one our regulars text a photo of when they forget the hours.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 max-w-5xl mx-auto">
          <Reveal className="relative rounded-[2rem] border-2 border-dashed border-gold/40 bg-plum-900/50 p-8 sm:p-10">
            <p className="font-display text-2xl text-gold-light mb-6">Studio Hours</p>
            <ul className="space-y-4">
              {hours.map((h) => (
                <li key={h.label} className="flex items-center justify-between gap-4 border-b border-cream/10 pb-3">
                  <span className="text-cream/80 font-medium text-sm sm:text-base">{h.label}</span>
                  <span className="font-display text-lg sm:text-xl text-cream text-right">{h.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-plum-300">Late fee applies for pickups after 6pm.</p>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1} className="rounded-[2rem] border-2 border-dashed border-teal/40 bg-plum-900/50 p-8 sm:p-10">
              <p className="font-display text-2xl text-teal mb-4">Find Us</p>
              <p className="text-cream/90 font-semibold">Atlanta, GA</p>
              <p className="text-plum-300 text-sm mt-1">Exact studio address shared at booking confirmation.</p>
              <a
                href="tel:+14045730317"
                className="inline-flex mt-5 items-center gap-2 text-gold-light font-display text-xl hover:text-gold transition-colors"
              >
                (404) 573-0317
              </a>
            </Reveal>

            <Reveal delay={0.2} className="rounded-[2rem] border-2 border-dashed border-coral/40 bg-plum-900/50 p-8 sm:p-10">
              <p className="font-display text-2xl text-coral mb-4">We Accept</p>
              <div className="flex flex-wrap gap-2">
                {payments.map((p) => (
                  <span key={p} className="bg-cream/10 text-cream text-sm font-semibold px-4 py-2 rounded-full">
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
