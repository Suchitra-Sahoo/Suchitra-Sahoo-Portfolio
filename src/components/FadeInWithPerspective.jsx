import { useEffect, useRef, useState } from "react";

export default function FadeInWithPerspective({ children }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out delay-500 transform-gpu perspective-[1000px] ${
        isVisible
          ? "opacity-100 rotate-y-0"
          : "opacity-0 rotate-y-[40deg]"
      }`}
    >
      {children}
    </div>
  );
}
