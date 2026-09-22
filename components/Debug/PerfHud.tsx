"use client";

import { useEffect, useState } from "react";
import { togglePerfFlag, usePerfFlag } from "./perf-flags";
import styles from "./PerfHud.module.css";

// Overlay di diagnosi: fps medio sull'ultimo secondo, frame peggiore e numero di
// frame oltre 20ms (quelli che si vedono come scatto). Tasti 1/2/3 per spegnere
// una interazione alla volta e capire quale costa.
// Temporaneo: renderizzato solo in dev, da rimuovere a diagnosi chiusa.
export function PerfHud() {
  const [fps, setFps] = useState(0);
  const [worst, setWorst] = useState(0);
  const [janky, setJanky] = useState(0);
  const tilt = usePerfFlag("tilt");
  const gaze = usePerfFlag("gaze");
  const [navBlur, setNavBlur] = useState(false);

  useEffect(() => {
    let rafId = requestAnimationFrame(tick);
    let last = performance.now();
    let windowStart = last;
    let frames = 0;
    let worstDelta = 0;
    let jankyCount = 0;

    function tick(now: number) {
      const delta = now - last;
      last = now;
      frames += 1;
      if (delta > worstDelta) worstDelta = delta;
      if (delta > 20) jankyCount += 1;

      if (now - windowStart >= 1000) {
        setFps(Math.round((frames * 1000) / (now - windowStart)));
        setWorst(Math.round(worstDelta));
        setJanky(jankyCount);
        windowStart = now;
        frames = 0;
        worstDelta = 0;
        jankyCount = 0;
      }

      rafId = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "1") togglePerfFlag("tilt");
      if (event.key === "2") togglePerfFlag("gaze");
      if (event.key === "3") {
        const root = document.documentElement;
        const next = root.dataset.navBlur !== "on";
        if (next) root.dataset.navBlur = "on";
        else delete root.dataset.navBlur;
        setNavBlur(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onOff = (value: boolean) => (value ? "ON " : "off");

  return (
    <div className={styles.hud}>
      {`${fps} fps   worst ${worst}ms   >20ms: ${janky}
[1] tilt      ${onOff(tilt)}
[2] gaze      ${onOff(gaze)}
[3] nav blur  ${onOff(navBlur)}`}
    </div>
  );
}
