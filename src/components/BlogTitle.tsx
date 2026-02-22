import { useEffect, useRef, useState } from "react";

interface BlogTitleProps {
  title: string;
}

export function BlogTitle({ title }: BlogTitleProps) {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [overflowAmount, setOverflowAmount] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const overflow = text.scrollWidth - container.clientWidth;

    if (overflow > 0) {
      setOverflowAmount(overflow);
    }
  }, [title]);

  const handleMouseEnter = () => {
    if (!textRef.current || overflowAmount <= 0) return;

    textRef.current.style.transitionDuration = "2000ms";
    textRef.current.style.transform = `translateX(-${overflowAmount}px)`;
  };

  const handleMouseLeave = () => {
    if (!textRef.current) return;

    textRef.current.style.transitionDuration = "400ms";
    textRef.current.style.transform = "translateX(0)";
  };

  return (
    <h1
      ref={containerRef}
      className="relative lg:overflow-hidden lg:whitespace-nowrap lg:truncate text-text text-2xl"
    >
      <span
        ref={textRef}
        className="inline-block transition-transform ease-linear"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </span>
    </h1>
  );
}
