import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface Props {
  to: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({ to, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <motion.span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
