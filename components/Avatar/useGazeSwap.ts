"use client";

import { RefObject, useEffect, useState } from "react";
import { DIRECTION_ANGLES, Direction } from "./avatar-frames";
import { GAZE_DEAD_ZONE_PX, GAZE_DEBOUNCE_MS, GAZE_SWITCH_DEG } from "./avatar-config";

function angularDistance(a: number, b: number): number {
  const diff = Math.abs(a - b) % 360;
  return diff > 180 ? 360 - diff : diff;
}

function nearestDirection(angleDeg: number): Direction {
  let best: Direction = "E";
  let bestDistance = Infinity;
  for (const [direction, angle] of Object.entries(DIRECTION_ANGLES) as [Direction, number][]) {
    const distance = angularDistance(angleDeg, angle);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = direction;
    }
  }
  return best;
}

export function useGazeSwap(avatarRef: RefObject<HTMLElement | null>, enabled: boolean): Direction {
  const [direction, setDirection] = useState<Direction>("idle");

  useEffect(() => {
    if (!enabled) return;

    const avatar = avatarRef.current;
    if (!avatar) return;

    let center = { x: 0, y: 0 };
    const updateCenter = () => {
      const rect = avatar.getBoundingClientRect();
      center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    };
    updateCenter();

    let latestPointer = center;
    let rafId: number | null = null;
    let committed: Direction = "idle";
    let pending: Direction | null = null;
    let pendingTimer: ReturnType<typeof setTimeout> | null = null;

    // La posa cambia solo se il cursore resta nello stesso settore per
    // GAZE_DEBOUNCE_MS. Senza questo, attraversando lo schermo si innescavano
    // piu' swap consecutivi e l'avatar sembrava scattare.
    const request = (next: Direction) => {
      if (next === committed) {
        if (pendingTimer) clearTimeout(pendingTimer);
        pendingTimer = null;
        pending = null;
        return;
      }
      // Timer gia' in corso per lo stesso settore: non ripartire da zero,
      // altrimenti muovendo il mouse in continuo non scatterebbe mai.
      if (next === pending) return;
      pending = next;
      if (pendingTimer) clearTimeout(pendingTimer);
      pendingTimer = setTimeout(() => {
        pendingTimer = null;
        pending = null;
        committed = next;
        setDirection(next);
      }, GAZE_DEBOUNCE_MS);
    };

    const compute = () => {
      rafId = null;
      const dx = latestPointer.x - center.x;
      const dy = latestPointer.y - center.y;
      const distance = Math.hypot(dx, dy);

      if (distance < GAZE_DEAD_ZONE_PX) {
        request("idle");
        return;
      }

      let angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
      if (angleDeg < 0) angleDeg += 360;

      // Isteresi: finche' il puntatore resta entro GAZE_SWITCH_DEG dall'angolo
      // della posa attuale si tiene quella, anche se un'altra e' leggermente
      // piu' vicina. Senza, lungo il confine tra due settori le pose si
      // alternavano ad ogni pixel di movimento.
      if (committed !== "idle") {
        const held = angularDistance(angleDeg, DIRECTION_ANGLES[committed]);
        if (held <= GAZE_SWITCH_DEG) {
          request(committed);
          return;
        }
      }

      request(nearestDirection(angleDeg));
    };

    const onMove = (event: MouseEvent) => {
      latestPointer = { x: event.clientX, y: event.clientY };
      if (rafId === null) rafId = requestAnimationFrame(compute);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", updateCenter);
    window.addEventListener("scroll", updateCenter, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", updateCenter);
      window.removeEventListener("scroll", updateCenter);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (pendingTimer) clearTimeout(pendingTimer);
    };
  }, [avatarRef, enabled]);

  return enabled ? direction : "idle";
}
