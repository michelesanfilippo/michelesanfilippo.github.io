"use client";

import { RefObject, useEffect } from "react";
import {
  MAX_TILT_DEG,
  TILT_RANGE_PX,
  TILT_SHIFT_PX,
  TILT_TAU_MS,
} from "./avatar-config";

const clamp = (value: number) => Math.max(-1, Math.min(1, value));

// Il tilt segue il puntatore su tutta la pagina, non solo in hover sull'avatar.
// E' l'unico movimento continuo disponibile: le pose dello sprite sono discrete
// e senza questo accompagnamento lo swap di frame si legge come uno scatto
// secco. Con la rotazione che si muove sempre, il cambio posa passa quasi
// inosservato.
export function useTilt(wrapperRef: RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !enabled) return;

    let pointer: { x: number; y: number } | null = null;
    // Posizione del cursore normalizzata (-1..1) rispetto al centro dell'avatar.
    // Rotazione e traslazione derivano entrambe da questi due valori, cosi' i due
    // movimenti restano sempre in fase.
    let curNx = 0;
    let curNy = 0;
    let rafId: number | null = null;
    let lastTime = 0;

    // Il centro e' in cache e ricalcolato solo su scroll/resize: leggere
    // getBoundingClientRect dentro il loop forzava un reflow sincrono ad ogni
    // frame, cioe' esattamente il lavoro che fa scattare l'animazione.
    let centerX = 0;
    let centerY = 0;

    // Il centro va misurato senza la trasformazione: getBoundingClientRect sul
    // wrapper restituisce il box GIA' ruotato e traslato, quindi il centro
    // dipenderebbe dalla trasformazione che sta calcolando (retroazione). Gli
    // offset di layout e il rect dell'antenato, che non e' trasformato, danno la
    // posizione a riposo.
    const measure = () => {
      const parent = wrapper.offsetParent as HTMLElement | null;
      const base = parent?.getBoundingClientRect();
      centerX = (base?.left ?? 0) + wrapper.offsetLeft + wrapper.offsetWidth / 2;
      centerY = (base?.top ?? 0) + wrapper.offsetTop + wrapper.offsetHeight / 2;
    };
    measure();

    const tick = (now: number) => {
      // Il passo dipende dal tempo trascorso, non dal numero di frame: stessa
      // velocita' a 60 e a 120Hz, e un frame perso non lascia indietro
      // l'inseguimento. Il tetto a 50ms evita il salto dopo un cambio di tab.
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;

      let targetNx = 0;
      let targetNy = 0;
      if (pointer) {
        targetNx = clamp((pointer.x - centerX) / TILT_RANGE_PX);
        targetNy = clamp((pointer.y - centerY) / TILT_RANGE_PX);
      }

      const k = 1 - Math.exp(-dt / TILT_TAU_MS);
      curNx += (targetNx - curNx) * k;
      curNy += (targetNy - curNy) * k;

      // transform scritta diretta invece che via custom property: una custom
      // property si eredita, quindi cambiarla invalidava lo stile dei figli
      // (che calcolano il background con var()) ad ogni frame. Questa proprieta'
      // invece e' solo compositing, non tocca i discendenti.
      wrapper.style.transform =
        `perspective(900px) translate3d(${(curNx * TILT_SHIFT_PX).toFixed(2)}px, ` +
        `${(curNy * TILT_SHIFT_PX).toFixed(2)}px, 0) ` +
        `rotateX(${(-curNy * MAX_TILT_DEG).toFixed(3)}deg) ` +
        `rotateY(${(curNx * MAX_TILT_DEG).toFixed(3)}deg)`;

      const settled =
        Math.abs(targetNx - curNx) < 0.0008 && Math.abs(targetNy - curNy) < 0.0008;

      rafId = settled ? null : requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId === null) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };

    const onMove = (event: MouseEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      start();
    };

    const onLeaveWindow = () => {
      pointer = null;
      start();
    };

    const onLayoutChange = () => {
      measure();
      start();
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onLayoutChange, { passive: true });
    window.addEventListener("resize", onLayoutChange);
    document.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onLayoutChange);
      window.removeEventListener("resize", onLayoutChange);
      document.removeEventListener("mouseleave", onLeaveWindow);
      if (rafId !== null) cancelAnimationFrame(rafId);
      wrapper.style.transform = "";
    };
  }, [wrapperRef, enabled]);
}
