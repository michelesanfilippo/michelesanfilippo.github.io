"use client";

import { useSyncExternalStore } from "react";

// Interruttori temporanei per isolare la causa del lag: si spengono da tastiera
// senza ricaricare la pagina, cosi' si confrontano i frame time a parita' di
// tutto il resto. Da rimuovere insieme a PerfHud a diagnosi chiusa.
export type PerfFlag = "tilt" | "gaze";

const state: Record<PerfFlag, boolean> = { tilt: true, gaze: true };
const listeners = new Set<() => void>();

export function togglePerfFlag(flag: PerfFlag) {
  state[flag] = !state[flag];
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function usePerfFlag(flag: PerfFlag) {
  return useSyncExternalStore(
    subscribe,
    () => state[flag],
    () => true,
  );
}
