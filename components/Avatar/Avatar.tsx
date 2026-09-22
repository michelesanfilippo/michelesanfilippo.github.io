"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { usePerfFlag } from "@/components/Debug/perf-flags";
import { FRAMES, WINK_FRAME } from "./avatar-frames";
import { FRAME_SETTLE_MS, FRAME_SETTLE_SCALE, WINK_DURATION_MS } from "./avatar-config";
import { useTilt } from "./useTilt";
import { useGazeSwap } from "./useGazeSwap";
import styles from "./Avatar.module.css";

export function Avatar() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const [winking, setWinking] = useState(false);
  const winkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const noHover = useMediaQuery("(hover: none), (pointer: coarse)");
  const motionEnabled = !reduceMotion && !noHover;

  // I due flag sono sempre true fuori dalla diagnosi (li muove solo PerfHud).
  const tiltFlag = usePerfFlag("tilt");
  const gazeFlag = usePerfFlag("gaze");

  useTilt(wrapperRef, motionEnabled && tiltFlag);
  const direction = useGazeSwap(wrapperRef, motionEnabled && gazeFlag);

  useEffect(() => {
    const onClick = () => {
      setWinking(true);
      if (winkTimer.current) clearTimeout(winkTimer.current);
      winkTimer.current = setTimeout(() => setWinking(false), WINK_DURATION_MS);
    };

    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
      if (winkTimer.current) clearTimeout(winkTimer.current);
    };
  }, []);

  const frame = winking ? WINK_FRAME : FRAMES[direction];

  // Un solo layer: il frame cambia riposizionando il background, quindi non
  // esiste nessun istante in cui due pose sono visibili insieme.
  const style: CSSProperties = {
    "--fx": String(frame.x),
    "--fy": String(frame.y),
    transform: frame.mirror ? "scaleX(-1)" : "none",
  } as CSSProperties;

  // Micro-assestamento al cambio posa. Via Web Animations invece che CSS perche'
  // riparte da sola ad ogni chiamata: con una transizione o un'animazione CSS
  // servirebbe rimontare l'elemento per far ripartire la curva.
  const shownFrameRef = useRef(frame);
  useEffect(() => {
    if (frame === shownFrameRef.current) return;
    shownFrameRef.current = frame;
    if (!motionEnabled || FRAME_SETTLE_MS === 0) return;

    const base = frame.mirror ? "scaleX(-1) " : "";
    layerRef.current?.animate(
      [
        { transform: `${base}scale(${FRAME_SETTLE_SCALE})` },
        { transform: `${base}scale(1)` },
      ],
      { duration: FRAME_SETTLE_MS, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
  }, [frame, motionEnabled]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.spriteBox} role="img" aria-label="Avatar">
        <div ref={layerRef} className={styles.layer} style={style} />
      </div>
    </div>
  );
}
