import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#services", label: "Services" },
  { href: "#shop", label: "Shop" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`container-wide flex items-center justify-between transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center gap-3 rounded-full transition-all duration-500 ${
            scrolled ? "bg-plum-900/90 backdrop-blur-md px-5 py-2.5 shadow-lg shadow-plum-950/30" : "px-0 py-0"
          }`}
        >
          <a
            href="#top"
            onClick={(e) => handleClick(e, "#top")}
            className="font-display text-2xl tracking-wide text-cream flex items-center gap-2"
          >
            <span className="text-gold-light">AMG</span>
            <span className="hidden sm:inline text-xs font-sans font-medium tracking-[0.2em] uppercase text-plum-300 mt-1">
              Kennel Atl
            </span>
          </a>
        </div>

        <nav
          className={`hidden lg:flex items-center gap-1 rounded-full transition-all duration-500 ${
            scrolled ? "bg-plum-900/90 backdrop-blur-md px-2 py-2 shadow-lg shadow-plum-950/30" : ""
          }`}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="relative px-4 py-2 text-sm font-semibold text-cream/85 hover:text-gold-light transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            onClick={(e) => handleClick(e, "#book")}
            className="hidden sm:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold text-sm px-5 py-3 rounded-full transition-all duration-300 shadow-lg shadow-gold/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30"
          >
            Book Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-full transition-colors ${
              scrolled ? "bg-plum-900/90" : "bg-plum-900/40"
            }`}
          >
            <span
              className={`block w-5 h-0.5 bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block w-5 h-0.5 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block w-5 h-0.5 bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden mx-4 mt-3 rounded-3xl bg-plum-900/95 backdrop-blur-md"
          >
            <div className="flex flex-col p-4 gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className="px-4 py-3 text-cream font-semibold rounded-xl hover:bg-plum-800"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={(e) => handleClick(e, "#book")}
                className="mt-2 text-center bg-gold text-ink font-bold px-5 py-3 rounded-xl"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
