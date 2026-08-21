import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Paw from "./Paw";

interface Print {
  id: number;
  x: number;
  y: number;
  rotate: number;
  tone: "light-bg" | "dark-bg";
}

// Fixed alternating offset/rotation, not derived from mouse direction.
// Real cursor movement is jittery, so reacting to instantaneous travel
// angle made prints spin erratically. A simple toggle reads as a much
// calmer, more deliberate trail.
const VARIANTS = [
  { dx: -8, dy: -5, rotate: -12 },
  { dx: 8, dy: 5, rotate: 10 },
];

// Sections with a cream background need a dark print, everything else
// (the purple/chalkboard sections) needs the gold print, or it vanishes.
const LIGHT_SECTIONS = new Set(["story", "gallery", "book"]);

const MIN_SPAWN_DISTANCE = 110; // px the cursor must travel before a new print drops
const PRINT_SIZE = 28;
const MAX_PRINTS = 6;
const FADE_DURATION = 1.7;

export default function CursorTrail() {
  const [prints, setPrints] = useState<Print[]>([]);
  const lastSpawn = useRef<{ x: number; y: number } | null>(null);
  const variantIndex = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function toneAt(x: number, y: number): Print["tone"] {
      const el = document.elementFromPoint(x, y);
      const section = el?.closest("section[id]");
      const id = section?.id ?? "";
      return LIGHT_SECTIONS.has(id) ? "light-bg" : "dark-bg";
    }

    function spawnAt(x: number, y: number) {
      const last = lastSpawn.current;
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        if (Math.hypot(dx, dy) < MIN_SPAWN_DISTANCE) return;

        const v = VARIANTS[variantIndex.current];
        variantIndex.current = (variantIndex.current + 1) % VARIANTS.length;

        const id = idRef.current++;
        const tone = toneAt(x, y);
        setPrints((prev) => {
          const next = [...prev, { id, x: x + v.dx, y: y + v.dy, rotate: v.rotate, tone }];
          return next.length > MAX_PRINTS ? next.slice(next.length - MAX_PRINTS) : next;
        });
        window.setTimeout(() => {
          setPrints((prev) => prev.filter((p) => p.id !== id));
        }, FADE_DURATION * 1000);
      }
      lastSpawn.current = { x, y };
    }

    function onMove(e: MouseEvent) {
      spawnAt(e.clientX, e.clientY);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {prints.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.65, scale: 0.85 }}
            animate={{ opacity: 0, scale: 1.05, y: p.y - 12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_DURATION, ease: "easeOut" }}
            className="absolute"
            style={{
              left: p.x - PRINT_SIZE / 2,
              top: p.y - PRINT_SIZE / 2,
              width: PRINT_SIZE,
              height: PRINT_SIZE,
              rotate: p.rotate,
            }}
          >
            <Paw
              className={
                p.tone === "light-bg"
                  ? "text-plum-700 drop-shadow-[0_1px_2px_rgba(250,243,230,0.5)]"
                  : "text-gold-light drop-shadow-[0_1px_3px_rgba(58,18,64,0.4)]"
              }
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
