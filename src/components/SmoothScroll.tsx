"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

/**
 * Handles `href="#section"` links through Lenis so they glide instead of
 * jumping. Lenis' built-in `anchors` option lets the browser's native anchor
 * jump run as well, which can flash the target position for a frame before
 * the animation starts, so the default action is cancelled here instead.
 */
const AnchorScroll = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = (event.target as Element | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      const hash = link?.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      event.preventDefault();
      // The navbar stays pinned to the top, so stop short of the target by
      // its height to keep section headings clear of it.
      lenis.scrollTo(target, { offset: -72 });
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
};

/**
 * Lenis smooth scrolling for the whole site.
 *
 * It runs on top of native scroll, so `position: sticky` (the pinned video
 * sections), `useScroll`, GSAP ScrollTrigger and the `scroll` listeners in
 * ScrollVideo all keep receiving real scroll events. `respectReducedMotion`
 * (on by default) disables the smoothing for users who ask for it.
 */
const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
      <AnchorScroll />
    </ReactLenis>
  );
};

export default SmoothScroll;
