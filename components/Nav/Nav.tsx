"use client";

import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { smoothScrollTo } from "./smooth-scroll";
import styles from "./Nav.module.css";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [active, setActive] = useState(links[0].id);
  // Riquadro dell'indicatore: posizione e larghezza in px della voce attiva. Sono
  // misurate e non dedotte dall'indice perche' le voci hanno larghezze diverse.
  const [box, setBox] = useState<{ left: number; width: number } | null>(null);
  // Durante lo scroll da click l'observer va zittito: attraversando le sezioni
  // intermedie riporterebbe l'indicatore indietro, e la selezione arriverebbe a
  // destinazione con due movimenti invece di uno.
  const lockRef = useRef(false);

  const measure = useCallback((id: string) => {
    const item = itemRefs.current[id];
    const list = listRef.current;
    if (!item || !list) return;
    setBox({
      left: item.offsetLeft,
      width: item.offsetWidth,
    });
  }, []);

  useEffect(() => {
    measure(active);
  }, [active, measure]);

  useEffect(() => {
    const onResize = () => measure(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, measure]);

  // Quale sezione e' in vista: la voce attiva si aggiorna anche quando si scrolla
  // a mano, non solo al click. Soglia alta e rootMargin che esclude la fascia
  // sotto la barra, cosi' l'attivazione avviene quando la sezione occupa davvero
  // lo schermo e non appena spunta dal bordo.
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (lockRef.current) return;
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const onClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    // L'indicatore si sposta subito, senza aspettare l'observer: altrimenti il
    // riquadro partirebbe a metà dello scroll.
    setActive(id);
    lockRef.current = true;
    smoothScrollTo(target, () => {
      lockRef.current = false;
    });
  };

  return (
    <header className={styles.bar}>
      <nav className={styles.pill} aria-label="Sezioni">
        <ul ref={listRef} className={styles.list}>
          {/* L'indicatore e' un solo elemento che trasla, non un fondo su ogni
              voce: cosi' il passaggio da una voce all'altra e' un movimento
              continuo. aria-hidden perche' lo stato lo comunica aria-current. */}
          {box && (
            <li
              aria-hidden="true"
              className={styles.indicator}
              style={{ transform: `translateX(${box.left}px)`, width: `${box.width}px` }}
            />
          )}
          {links.map((link) => (
            <li key={link.id}>
              <a
                ref={(el) => {
                  itemRefs.current[link.id] = el;
                }}
                href={`#${link.id}`}
                className={styles.link}
                aria-current={active === link.id ? "true" : undefined}
                onClick={(event) => onClick(event, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.switchSlot}>
        <ThemeSwitch />
      </div>
    </header>
  );
}
