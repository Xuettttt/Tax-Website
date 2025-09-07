type UnderlineWaveProps = {
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

export default function UnderlineWave({
  color = "#78a5e6",
  strokeWidth = 30,
  duration = 2.8,
  delay = 0.3,
  className = "",
}: UnderlineWaveProps) {
  const animate = duration > 0;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 965 152"
      preserveAspectRatio="none"
      className={`absolute left-0 bottom-0 w-full h-[0.28em] ${className}`}
    >
      <path
        d="
          M 0 110
          C 160 140, 320 70, 480 110
          S 800 140, 965 110
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={animate ? 1 : undefined}
        strokeDashoffset={animate ? 1 : undefined}
      >
        {animate && (
          <animate
            attributeName="stroke-dashoffset"
            from="1"
            to="0"
            dur={`${duration}s`}
            begin={`${delay}s`}
            fill="freeze"
            repeatCount="indefinite"
          />
        )}
      </path>
    </svg>
  );
}