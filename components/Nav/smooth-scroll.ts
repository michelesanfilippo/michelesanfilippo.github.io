// Scroll animato a mano invece di scrollIntoView({ behavior: "smooth" }): la
// curva del browser non e' controllabile ne' nella durata ne' nella decelerazione,
// e serviva un arrivo che rallenta in modo netto. easeOutQuart percorre gia' il
// 68% nel primo quarto del tempo e si appoggia sull'ultimo tratto.
const EASE_OUT_QUART = (t: number) => 1 - Math.pow(1 - t, 4);
const DURATION_MS = 900;

export function smoothScrollTo(target: HTMLElement, onDone?: () => void) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // scroll-margin-top delle sezioni (globals.css) tiene conto della barra: qui
  // basta la posizione del bersaglio nel documento.
  const style = getComputedStyle(target);
  const offset = parseFloat(style.scrollMarginTop) || 0;
  const to = target.getBoundingClientRect().top + window.scrollY - offset;
  const from = window.scrollY;
  const distance = to - from;

  if (reduce || Math.abs(distance) < 2) {
    window.scrollTo(0, to);
    onDone?.();
    return;
  }

  let start: number | null = null;
  const step = (now: number) => {
    if (start === null) start = now;
    const t = Math.min((now - start) / DURATION_MS, 1);
    window.scrollTo(0, from + distance * EASE_OUT_QUART(t));
    if (t < 1) requestAnimationFrame(step);
    else onDone?.();
  };
  requestAnimationFrame(step);
}
