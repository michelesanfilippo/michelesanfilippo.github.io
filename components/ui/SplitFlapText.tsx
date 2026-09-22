"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/lib/hooks/useInView";
import styles from "./SplitFlapText.module.css";

// Ispirato a reactbits.dev/text-animations/split-flap-text: ogni lettera e' una
// tessera che sfoglia caratteri a caso prima di fermarsi su quella giusta, con
// uno sfasamento crescente da sinistra a destra (come un tabellone aeroportuale
// split-flap). Parte da solo quando il testo entra in vista.
const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

type SplitFlapTextProps = {
  text: string;
  className?: string;
};

export function SplitFlapText({ text, className }: SplitFlapTextProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>(0.5);
  const [chars, setChars] = useState<string[]>(() => text.split("").map((c) => (c === " " ? " " : " ")));
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (reduce) {
      timers.push(setTimeout(() => setChars(text.split("")), 0));
      return () => timers.forEach(clearTimeout);
    }

    text.split("").forEach((target, index) => {
      if (target === " ") return;
      const steps = 7 + Math.floor(Math.random() * 5);
      const stagger = index * 65;
      for (let step = 0; step < steps; step++) {
        timers.push(
          setTimeout(
            () => {
              setChars((prev) => {
                const next = [...prev];
                next[index] = step === steps - 1 ? target : randomChar();
                return next;
              });
            },
            stagger + step * 45,
          ),
        );
      }
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView, text]);

  return (
    <span ref={ref} className={[styles.row, className].filter(Boolean).join(" ")} role="text" aria-label={text}>
      {chars.map((char, index) => (
        <span key={index} className={char === " " ? styles.space : styles.flap} aria-hidden="true">
          {char !== " " && <span className={styles.hinge} />}
          {char}
        </span>
      ))}
    </span>
  );
}
