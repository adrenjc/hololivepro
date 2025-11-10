type CloneTickerProps = {
  text: string;
  repeat?: number;
  className?: string;
};

export const CloneTicker = ({
  text,
  repeat = 6,
  className = "",
}: CloneTickerProps) => (
  <div className={`clonebox ${className}`.trim()}>
    {Array.from({ length: repeat }).map((_, idx) => (
      <span key={`${text}-${idx}`}>{text}</span>
    ))}
  </div>
);
