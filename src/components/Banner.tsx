"use client";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import ButtonHire from "./ButtonHire";
import SplitText from "./SplitText";
import TextType from "./TextType";
import SocialCard from "./SocialCard";
import { ScrollVideoHero } from "./ScrollVideo";
import { cn } from "@/lib/utils";

const Banner = () => {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const copyOpacity = useTransform(scrollY, [0, 80, 560], [1, 1, 0]);
  const copyY = useTransform(scrollY, [0, 80, 560], [0, 0, -72]);
  const socialOpacity = useTransform(scrollY, [560, 720], [0, 1]);
  const socialY = useTransform(scrollY, [560, 720], [32, 0]);
  const [copyHidden, setCopyHidden] = useState(false);
  const copyHiddenRef = useRef(false);
  const [socialHidden, setSocialHidden] = useState(true);
  const socialHiddenRef = useRef(true);

  useMotionValueEvent(copyOpacity, "change", (value) => {
    const hidden = value <= 0.02;
    if (hidden === copyHiddenRef.current) return;
    copyHiddenRef.current = hidden;
    setCopyHidden(hidden);
  });

  useMotionValueEvent(socialOpacity, "change", (value) => {
    const hidden = value <= 0.02;
    if (hidden === socialHiddenRef.current) return;
    socialHiddenRef.current = hidden;
    setSocialHidden(hidden);
  });

  const disableCopy = !reduceMotion && copyHidden;
  const disableSocial = !reduceMotion && socialHidden;

  return (
    <ScrollVideoHero
      src="/videos/hero.mp4"
      poster="/videos/hero-poster.jpg"
      scrollScreens={2.5}
      className="-mt-[72px]"
    >
      <div className="mx-auto flex h-full w-full max-w-8xl flex-col pt-[72px]">
        <div className="flex flex-1 items-center px-6 py-6 md:px-10 md:py-10">
          <div className="flex w-full items-center justify-between gap-10">
            <section className="max-w-2xl rounded-3xl p-5 md:bg-transparent md:p-0">
              <motion.div
                style={
                  reduceMotion ? undefined : { opacity: copyOpacity, y: copyY }
                }
                className={cn(disableCopy && "pointer-events-none")}
              >
                <SplitText
                  text="Hi, I`m"
                  className="text-5xl md:text-7xl font-semibold text-red-1"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
                <div>
                  <h1 className="mb-6 text-center text-4xl font-semibold text-white md:text-left lg:text-7xl">
                    Md. Iztihad Rafid
                  </h1>
                </div>

                <div className="mt-7 flex items-center justify-center md:mt-10 md:justify-start">
                  <ButtonHire
                    text="Hire Me"
                    target="_blank"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=iztihadrafid10@gmail.com"
                  />
                </div>
              </motion.div>
            </section>
          </div>
        </div>
        <div className="text-center lg:text-left md:mb-14 lg:mb-0">
          <TextType
            className="text-3xl text-gray-1"
            text={["Frontend Developer", "MERN Stack Developer", "QA Tester"]}
            typingSpeed={70}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </div>
        <motion.div
          style={
            reduceMotion ? undefined : { opacity: socialOpacity, y: socialY }
          }
          className={cn(
            "flex justify-center pb-4 md:pb-10",
            disableSocial && "pointer-events-none",
          )}
        >
          <SocialCard></SocialCard>
        </motion.div>
      </div>
    </ScrollVideoHero>
  );
};

export default Banner;
