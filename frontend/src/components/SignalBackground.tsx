import { motion, useReducedMotion } from "framer-motion";

export function SignalBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(158,247,214,0.07),transparent_28%),radial-gradient(circle_at_66%_42%,rgba(214,179,106,0.055),transparent_30%),linear-gradient(145deg,#08090b_0%,#101419_50%,#0a0b0d_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(232,237,242,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(232,237,242,0.05)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(circle_at_50%_45%,black,transparent_68%)]" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(115deg,transparent_0%,transparent_49%,rgba(158,247,214,0.10)_50%,transparent_51%,transparent_100%)] [background-size:240px_240px]" />
      <div className="absolute inset-0 opacity-[0.055] [background-image:radial-gradient(rgba(158,247,214,0.2)_1px,transparent_1px)] [background-size:34px_34px]" />
      <motion.div
        className="absolute left-[58%] top-[-30%] h-[56rem] w-[14rem] -translate-x-1/2 rotate-[31deg] rounded-full bg-[linear-gradient(90deg,transparent,rgba(158,247,214,0.105),rgba(214,179,106,0.04),transparent)] blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-42, 46, -42],
                opacity: [0.12, 0.22, 0.12],
              }
        }
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-[14%] top-[46%] h-[16rem] w-[16rem] rounded-full bg-signal-gold/[0.026] blur-3xl"
        animate={reduceMotion ? undefined : { y: [12, -10, 12], opacity: [0.09, 0.16, 0.09] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-graphite-950 via-graphite-950/80 to-transparent" />
    </div>
  );
}
