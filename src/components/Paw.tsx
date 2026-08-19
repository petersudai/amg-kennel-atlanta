import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function Paw({ className = "", style }: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style} aria-hidden="true">
      <ellipse cx="32" cy="41" rx="16" ry="13" />
      <ellipse cx="13" cy="21" rx="7.2" ry="9.2" transform="rotate(-24 13 21)" />
      <ellipse cx="26.5" cy="9.5" rx="7.6" ry="9.6" transform="rotate(-7 26.5 9.5)" />
      <ellipse cx="41" cy="9.5" rx="7.6" ry="9.6" transform="rotate(7 41 9.5)" />
      <ellipse cx="52.5" cy="21" rx="7.2" ry="9.2" transform="rotate(24 52.5 21)" />
    </svg>
  );
}
