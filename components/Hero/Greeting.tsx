"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import styles from "./Greeting.module.css";

const LINES = ["Hi there", "I'm Michele."];
const FULL = LINES.join("\n");

const TYPE_MS = 135;
const ERASE_MS = 75;
const HOLD_MS = 3600;
const RESTART_MS = 1200;

export function Greeting() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [count, setCount] = useState(0);
  const [erasing, setErasing] = useState(false);

  // Ciclo: scrive un carattere alla volta -> pausa -> cancella -> ricomincia.
  useEffect(() => {
    if (reduceMotion) return;

    let timer: ReturnType<typeof setTimeout>;
    if (!erasing) {
      timer =
        count < FULL.length
          ? setTimeout(() => setCount(count + 1), TYPE_MS)
          : setTimeout(() => setErasing(true), HOLD_MS);
    } else {
      timer =
        count > 0
          ? setTimeout(() => setCount(count - 1), ERASE_MS)
          : setTimeout(() => setErasing(false), RESTART_MS);
    }
    return () => clearTimeout(timer);
  }, [count, erasing, reduceMotion]);

  const text = reduceMotion ? FULL : FULL.slice(0, count);
  const onSecondLine = text.includes("\n");
  const [first, second = ""] = text.split("\n");

  return (
    <div className={styles.greeting}>
      <h1 className={styles.text} aria-label={LINES.join(" ")}>
        <span className={styles.line} aria-hidden="true">
          {first}
          {!onSecondLine && <i className={styles.caret} />}
        </span>
        <span className={styles.line} aria-hidden="true">
          {second}
          {onSecondLine && <i className={styles.caret} />}
        </span>
      </h1>
    </div>
  );
}
