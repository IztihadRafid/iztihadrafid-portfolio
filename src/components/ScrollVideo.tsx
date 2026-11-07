"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type VideoSource = {
  src: string;
  poster?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
const useSectionScrub = (
  sectionRef: RefObject<HTMLElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
  enabled: boolean,
  frameRate = 24,
) => {
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.pause();
    if (!enabled) return;
    let duration = 0;
    let target = 0;
    let current = -1;
    let frame: number | null = null;
    let unlocked = false;
    let lastTick = 0;

    // Exponential smoothing tuned for 60fps. `alpha` is re-derived from the
    // real frame delta so 120Hz screens and dropped frames settle at the same
    // speed, which is what keeps the scrub from feeling rubbery.
    const SMOOTHING = 0.22;
    // Both clips are 24fps, so positions are snapped to real frame boundaries.
    const frameStep = 1 / (frameRate > 0 ? frameRate : 24);

    const readDuration = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        duration = video.duration;
      }
    };

    const readProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      return clamp(-rect.top / scrollable, 0, 1);
    };

    const tick = (now: number) => {
      frame = null;
      if (!duration) return;

      const delta = lastTick ? clamp(now - lastTick, 1, 64) : 1000 / 60;
      lastTick = now;

      const diff = target - current;
      if (Math.abs(diff) < 0.0005) {
        current = target;
      } else {
        const alpha = 1 - Math.pow(1 - SMOOTHING, delta / (1000 / 60));
        current += diff * alpha;
      }

      const lastFrame = Math.max(duration - 0.05, 0);
      const time = clamp(current * duration, 0, lastFrame);
      const desiredFrame = Math.round(time / frameStep);
      const shownFrame = Math.round(video.currentTime / frameStep);

      // Only seek when the picture would actually change, and never while a
      // previous seek is still decoding. Overlapping seeks make the browser
      // abort and re-order frames, which reads as vibration on clips with a
      // lot of motion (the hero clip moves much faster than the About one).
      if (!video.seeking && desiredFrame !== shownFrame) {
        try {
          video.currentTime = clamp(desiredFrame * frameStep, 0, lastFrame);
        } catch {
          // Seeking can throw before metadata is ready; skip this frame.
        }
      }

      if (current !== target) {
        frame = requestAnimationFrame(tick);
      } else {
        lastTick = 0;
      }
    };

    const onScroll = () => {
      target = readProgress();
      // Snap to the section's starting frame instead of easing in from zero.
      if (current < 0) current = target;
      if (frame === null) frame = requestAnimationFrame(tick);
    };
    const onSeeked = () => {
      // A seek may have been skipped while another one was in flight; finish
      // the interpolation on the frame it actually landed on.
      if (frame === null) frame = requestAnimationFrame(tick);
    };
    const onMetadata = () => {
      readDuration();
      onScroll();
    };
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      const attempt = video.play();
      if (attempt) {
        attempt
          .then(() => {
            video.pause();
            // Undo any frames the browser advanced while unlocking.
            if (frame === null) frame = requestAnimationFrame(tick);
          })
          .catch(() => undefined);
      }
    };

    readDuration();
    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("durationchange", onMetadata);
    video.addEventListener("seeked", onSeeked);
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const resizeObserver = new ResizeObserver(onScroll);
    resizeObserver.observe(section);

    onScroll();

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("durationchange", onMetadata);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      resizeObserver.disconnect();
    };
  }, [sectionRef, videoRef, enabled, frameRate]);
};

const VideoLayer = ({
  videoRef,
  src,
  poster,
  className,
}: VideoSource & {
  videoRef: RefObject<HTMLVideoElement | null>;
  className?: string;
}) => (
  <video
    ref={videoRef}
    src={src}
    poster={poster}
    muted
    playsInline
    preload="auto"
    disablePictureInPicture
    tabIndex={-1}
    aria-hidden="true"
    className={cn(
      "absolute inset-0 h-full w-full object-cover select-none transform-gpu will-change-transform [backface-visibility:hidden]",
      className,
    )}
  />
);

type ScrollVideoHeroProps = VideoSource & {
  children?: ReactNode;
  scrollScreens?: number;
  /** Frame rate of the clip in public/videos (24 for both current clips). */
  frameRate?: number;
  className?: string;
};

export function ScrollVideoHero({
  src,
  poster,
  children,
  scrollScreens = 1.5,
  frameRate,
  className,
}: ScrollVideoHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useSectionScrub(sectionRef, videoRef, !reduceMotion, frameRate);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={cn("relative", className)}
      style={
        reduceMotion
          ? undefined
          : { height: `calc(${1 + scrollScreens} * 100svh)` }
      }
    >
      <div
        className={cn(
          "w-full overflow-hidden",
          reduceMotion ? "relative min-h-[100svh]" : "sticky top-0 h-[100svh]",
        )}
      >
        <VideoLayer videoRef={videoRef} src={src} poster={poster} />

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black-1/70 via-black-1/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black-1/75 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black-1 via-black-1/45 to-transparent" />

        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </section>
  );
}

type ScrollVideoSectionProps = VideoSource & {
  id?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
  /** Frame rate of the clip in public/videos (24 for both current clips). */
  frameRate?: number;
};

export function ScrollVideoSection({
  id,
  src,
  poster,
  children,
  className,
  contentClassName,
  overlayClassName,
  frameRate,
}: ScrollVideoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useSectionScrub(sectionRef, videoRef, !reduceMotion, frameRate);

  return (
    <section id={id} ref={sectionRef} className={cn("relative", className)}>
      <div
        className={cn(
          "w-full overflow-hidden",
          reduceMotion ? "absolute inset-0" : "sticky top-0 h-[100svh]",
        )}
      >
        <VideoLayer videoRef={videoRef} src={src} poster={poster} />

        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-black-1/50",
            overlayClassName,
          )}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-black-1 via-black-1/25 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black-1 via-black-1/25 to-transparent" />
      </div>

      <div
        className={cn(
          "relative z-10",
          !reduceMotion && "-mt-[100svh]",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
