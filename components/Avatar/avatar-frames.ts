// Ritaglio per-frame in pixel dello sprite (1536x1024, griglia 5x3).
// Le celle della griglia non sono un ritaglio utilizzabile: ogni busto e' alto
// ~305-315px contro i 341px di cella e sconfina nella cella sotto, quindi
// mostrando una cella intera si vedeva un pezzo della foto vicina.
// Le 15 pose sono state segmentate dal bounding box dei pixel opachi. Ogni
// frame ha una finestra CROP_W x CROP_H:
//  - ancorata 6px sopra la sommita' dei capelli -> testa sempre alla stessa
//    altezza, lo swap non fa "saltare" il volto;
//  - centrata sul centro orizzontale della sola testa (non delle spalle,
//    altrimenti le pose asimmetriche sposterebbero il volto);
//  - alta 322px = 6 + la posa piu' ALTA (315px) + 1, cioe' abbastanza per
//    contenere ogni busto per intero.
// L'altezza era 303px (6 + la posa piu' CORTA) e tagliava i busti piu' lunghi
// 15-17px prima della fine: al posto della base tondeggiante delle spalle si
// vedeva una linea orizzontale netta, e quei frame sembravano piu' alti perche'
// riempivano il box fino al bordo. Ora nessun frame e' tagliato; le pose piu'
// corte hanno qualche px di sfondo sotto il busto, invisibile perche' il bordo
// del busto e' morbido.
// Verificato che ogni finestra resti nella banda della propria posa: il margine
// piu' stretto e' 4px (posa S), quindi nessun frame pesca la posa vicina.
export const SPRITE_W = 1536;
export const SPRITE_H = 1024;
export const CROP_W = 300;
export const CROP_H = 322;

export type Direction = "idle" | "E" | "NE" | "N" | "NW" | "W" | "SW" | "S" | "SE";

export type Frame = {
  x: number;
  y: number;
  mirror?: boolean;
};

export const FRAMES: Record<Direction, Frame> = {
  idle: { x: 8, y: 33 }, // 1x1 centro
  E: { x: 308, y: 35 }, // 1x2 destra media
  W: { x: 917, y: 34 }, // 1x4 sinistra media
  N: { x: 8, y: 371 }, // 2x1 centro alto
  NE: { x: 300, y: 374 }, // 2x2 destra alto
  S: { x: 917, y: 377 }, // 2x4 centro basso
  SE: { x: 1235, y: 373 }, // 2x5 destra basso
  NW: { x: 1221, y: 698 }, // 3x5 sinistra alto
  SW: { x: 1235, y: 373, mirror: true }, // 2x5 specchiato
};

export const WINK_FRAME: Frame = { x: 610, y: 697 }; // 3x3 occhiolino

// Angolo in gradi (0-360, senso orario, 0 = destra), coerente con atan2(dy, dx).
export const DIRECTION_ANGLES: Record<Exclude<Direction, "idle">, number> = {
  E: 0,
  SE: 45,
  S: 90,
  SW: 135,
  W: 180,
  NW: 225,
  N: 270,
  NE: 315,
};
