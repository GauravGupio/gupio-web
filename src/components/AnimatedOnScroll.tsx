import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
  durationMs?: number;
  once?: boolean;
  animateOut?: boolean;
  initialAnimate?: boolean;
  enabled?: boolean;
};

/**
 * Applies Tailwind's `animate-fade-in-up` to children when the wrapper enters the viewport.
 * Initial state is hidden using `opacity-0` to avoid pre-animation flashes.
 */
export const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  className,
  as = "div",
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  delayMs = 0,
  durationMs = 1200,
  once = false,
  animateOut = false,
  initialAnimate = false,
  enabled = false,
}) => {
  const Wrapper = as as any;
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined" || !elementRef.current) return;

    const node = elementRef.current;
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const run = () => {
              node.classList.remove("opacity-0");
              node.style.animationDelay = `${Math.max(delayMs, 0)}ms`;
              node.style.animationDuration = `${Math.max(durationMs, 0)}ms`;
              node.classList.add("animate-fade-in-up");
            };
            // Do not animate immediately on initial load if already in view
            if (!initialAnimate && window.scrollY === 0) {
              node.classList.remove("opacity-0");
              node.classList.remove("animate-fade-in-up");
            } else {
              if (delayMs > 0) {
                window.setTimeout(run, delayMs);
              } else {
                run();
              }
            }

            if (once) {
              observer.unobserve(node);
              observer.disconnect();
            }
          } else if (!entry.isIntersecting) {
            if (!once) {
              if (animateOut) {
                // Animate out smoothly, then hide
                node.classList.remove("animate-fade-in-up");
                node.style.animationDelay = "0ms";
                node.style.animationDuration = `${Math.max(durationMs, 0)}ms`;
                node.classList.add("animate-fade-down");

                const handleEnd = () => {
                  node.classList.remove("animate-fade-down");
                  node.classList.add("opacity-0");
                  node.removeEventListener("animationend", handleEnd);
                };
                node.addEventListener("animationend", handleEnd);
              } else {
                // Reset so it can animate again when re-entering
                node.classList.remove("animate-fade-in-up");
                node.classList.add("opacity-0");
              }
              hasAnimated = false;
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delayMs, once, enabled]);

  return (
    <Wrapper
      ref={elementRef}
      className={cn(enabled ? "opacity-0 will-change-transform" : "", className)}
    >
      {children}
    </Wrapper>
  );
};

export default AnimatedOnScroll;

