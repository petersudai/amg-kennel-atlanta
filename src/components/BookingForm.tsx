import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Paw from "./Paw";

const SERVICES = [
  "Full-Service Grooming",
  "Creative Styling & Color",
  "Puppy's First Groom",
  "Senior / Anxious Pet Care",
  "Not sure yet",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative bg-cream py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-yellow/20 blur-[100px]" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start max-w-5xl mx-auto">
          <Reveal>
            <span className="inline-block font-display text-sm tracking-[0.2em] uppercase text-plum-600 bg-plum-100 px-4 py-1.5 rounded-full mb-5">
              Book Now
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-ink leading-[1.02]">
              Let's get your pet on the books.
            </h2>
            <p className="mt-5 text-ink/60 leading-relaxed">
              Fill this out and our team will confirm your appointment window. Prefer to just walk in?
              We take walk-ins Wednesday&ndash;Saturday until 2pm, no form required.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-ink/50">
              <Paw className="text-plum-600 shrink-0" style={{ width: 18, height: 18 }} />
              Most groomers reply within one business day.
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="rounded-[2.5rem] bg-plum-900 grain relative overflow-hidden p-8 sm:p-10 shadow-2xl shadow-plum-900/30">
              <AnimatePresence initial={false}>
                {!submitted ? (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, scale: 0.96 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 grid sm:grid-cols-2 gap-5"
                  >
                    <Field label="Your Name" name="owner" placeholder="Jasmine Rivera" required />
                    <Field label="Pet's Name" name="pet" placeholder="Luna" required />
                    <Field label="Phone" name="phone" type="tel" placeholder="(404) 555-0132" required />
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-plum-300 mb-2">
                        Service
                      </label>
                      <select
                        name="service"
                        required
                        className="w-full bg-plum-800 border border-cream/15 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Field label="Preferred Date" name="date" type="date" required />
                    <Field label="Preferred Time" name="time" type="time" />
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wide text-plum-300 mb-2">
                        Notes for your groomer
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="Anxious around dryers, prefers a short summer cut..."
                        className="w-full bg-plum-800 border border-cream/15 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-plum-400 focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 mt-2 bg-gold hover:bg-gold-light text-ink font-bold py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Request Appointment
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 flex flex-col items-center text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                      className="mb-4"
                    >
                      <Paw className="text-gold-light" style={{ width: 56, height: 56 }} />
                    </motion.div>
                    <h3 className="font-display text-3xl text-cream mb-2">Request sent!</h3>
                    <p className="text-plum-200 max-w-sm">
                      Thanks! We'll text or call to confirm your appointment window shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-gold-light font-semibold text-sm hover:text-gold transition-colors"
                    >
                      Book another pet &rarr;
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wide text-plum-300 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-plum-800 border border-cream/15 rounded-xl px-4 py-3 text-cream text-sm placeholder:text-plum-400 focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
