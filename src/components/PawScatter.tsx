import Paw from "./Paw";

interface Spot {
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  size: number;
}

interface Props {
  spots: Spot[];
  className?: string;
}

export default function PawScatter({ spots, className = "text-gold-light opacity-70" }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {spots.map((s, i) => (
        <Paw
          key={i}
          className={`absolute ${className}`}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            transform: `rotate(${s.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
