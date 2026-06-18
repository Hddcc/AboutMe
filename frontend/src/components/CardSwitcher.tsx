import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { ContactCard as ContactCardData } from "../types";
import { ContactCard } from "./ContactCard";

type CardSwitcherProps = {
  cards: ContactCardData[];
};

export function CardSwitcher({ cards }: CardSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const activeCard = cards[activeIndex];
  const total = cards.length;

  function move(nextDirection: 1 | -1) {
    setDirection(nextDirection);
    setActiveIndex((current) => (current + nextDirection + total) % total);
  }

  return (
    <section className="w-[min(22rem,calc(100vw-2rem))] sm:w-[24.5rem]" aria-label="Contact cards">
      <div className="mb-3 flex items-center justify-end pr-2 sm:mb-4 sm:pr-3">
        <div className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.035] p-1 shadow-[0_14px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl">
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-graphite-900/70 text-signal-ink transition-colors hover:border-signal-mint/50 hover:text-signal-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-mint sm:h-9 sm:w-9"
            onClick={() => move(-1)}
            aria-label="Show previous card"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-graphite-900/70 text-signal-ink transition-colors hover:border-signal-mint/50 hover:text-signal-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-mint sm:h-9 sm:w-9"
            onClick={() => move(1)}
            aria-label="Show next card"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="relative h-[17.75rem] w-full overflow-hidden rounded-[1.35rem] border border-white/[0.055] bg-white/[0.025] p-1 shadow-[0_40px_150px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:h-[22rem] sm:rounded-[1.6rem]">
        <div className="absolute -inset-4 rounded-[1.5rem] bg-signal-mint/[0.05] blur-2xl" />
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={activeCard.id}
            custom={direction}
            variants={reduceMotion ? reducedVariants : variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              reduceMotion
                ? { duration: 0.12 }
                : { type: "spring", stiffness: 360, damping: 34, mass: 0.8 }
            }
            className="absolute inset-1 h-[calc(17.75rem-0.5rem)] w-[calc(100%-0.5rem)] sm:h-[calc(22rem-0.5rem)]"
          >
            <ContactCard card={activeCard} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 96 : -96,
    opacity: 0,
    rotateY: direction > 0 ? -8 : 8,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -96 : 96,
    opacity: 0,
    rotateY: direction > 0 ? 8 : -8,
    scale: 0.96,
  }),
};

const reducedVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};
