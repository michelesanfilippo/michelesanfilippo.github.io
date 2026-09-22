"use client";

import { ReactNode, useRef } from "react";
import styles from "./BorderGlowCard.module.css";

// Ispirato a reactbits.dev/components/border-glow: un alone che insegue il
// cursore ma resta visibile solo sul bordo, non sull'intera card. Il trucco e'
// un layer assoluto con un gradiente radiale centrato su --x/--y (aggiornate a
// mano via mousemove, niente libreria di stato per due variabili) e una mask
// "content-box XOR border-box": cio' che resta visibile e' solo l'anello di
// spessore pari al padding, cioe' il bordo.
type BorderGlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function BorderGlowCard({ children, className }: BorderGlowCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={[styles.card, className].filter(Boolean).join(" ")}
      onMouseMove={onMouseMove}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}
