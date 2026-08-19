interface Props {
  items: string[];
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ items, reverse, className = "" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0 px-6">
            <span className="whitespace-nowrap">{item}</span>
            <span className="ml-6 text-gold text-2xl leading-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
