"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { Phone, NotePencil } from "@phosphor-icons/react";
import { CONTACT } from "@/lib/content";

export function FloatingCta() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 480);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? false : { y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: 96, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-x-3 bottom-3 z-50 md:inset-x-0 md:bottom-6 md:mx-auto md:w-fit"
        >
          <div className="flex items-center gap-2 rounded-2xl border border-line bg-white/90 p-2 shadow-2xl shadow-brand-950/15 backdrop-blur-md md:rounded-full md:pl-5">
            <p className="hidden pr-2 text-sm font-semibold md:block">
              9월·10월 잔여 3팀 내외
            </p>
            <a
              href={CONTACT.telHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors hover:border-ink-faint active:scale-[0.98] md:flex-none md:rounded-full"
            >
              <Phone weight="fill" className="size-4 text-brand-600" aria-hidden />
              전화 상담
            </a>
            <a
              href="#quote"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-bold whitespace-nowrap text-brand-950 transition-colors hover:bg-brand-700 hover:text-white active:scale-[0.98] md:flex-none md:rounded-full"
            >
              <NotePencil weight="fill" className="size-4" aria-hidden />
              무료 견적 접수
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
