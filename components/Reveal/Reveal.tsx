"use client";

import { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/hooks/useInView";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export function Reveal({ children, delayMs = 0, className }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[styles.reveal, isInView ? styles.visible : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
