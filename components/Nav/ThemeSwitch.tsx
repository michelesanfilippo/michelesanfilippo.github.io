"use client";

import { useEffect, useState } from "react";
import SquishSwitch from "@/components/ui/SquishSwitch";
import styles from "./ThemeSwitch.module.css";

// Il tema vive su <html data-theme>, non in un context: i colori sono tutti
// custom properties definite in globals.css, quindi cambiare l'attributo basta e
// nessun componente ha bisogno di sapere del tema.
export function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.dataset.theme = "dark";
    else delete root.dataset.theme;
  }, [dark]);

  return (
    <span className={styles.wrap}>
      <SquishSwitch
        height={35}
        speed={85}
        checked={dark}
        onChange={setDark}
        // Grigio chiaro da spento, blu d'accento da acceso. Il pomello resta
        // bianco in entrambi gli stati: il default del componente lo tinge in
        // base al colore della pista e sul grigio chiaro sparirebbe.
        trackColor="#d1d1d6"
        trackOnColor="#0071e3"
        thumbColor="#ffffff"
        thumbOnColor="#ffffff"
        ariaLabel="Modalita' notte"
      />
      {/* SquishSwitch accetta solo un'etichetta testuale: le icone sole/luna
          stanno accanto, non dentro il componente. Le emoji rese dal font di
          sistema erano incoerenti da piattaforma a piattaforma; queste sono
          due semplici SVG monocromatiche a tratto, come il resto dell'icona. */}
      <span className={styles.icon} aria-hidden="true">
        {dark ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
          </svg>
        )}
      </span>
    </span>
  );
}
