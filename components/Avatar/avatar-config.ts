export const MAX_TILT_DEG = 11;
// Costante di tempo dell'inseguimento, in ms: l'avatar copre ~63% della distanza
// dal bersaglio ogni TILT_TAU_MS e arriva in ~3 volte tanto (~130ms).
// Espressa in tempo e non in "quota per frame": la quota per frame dipende dal
// refresh dello schermo (su 120Hz l'inseguimento andava al doppio della velocita'
// e dopo un frame perso rimaneva indietro), il tempo no.
// Piu' basso = piu' attaccato al cursore; sotto ~25 diventa nervoso.
export const TILT_TAU_MS = 42;
// Raggio in px entro cui il tilt raggiunge l'escursione massima. Prima il
// riferimento era mezza finestra (~960px su un 1920), quindi muovere il mouse di
// 100px cambiava l'angolo di 1 grado: il movimento c'era ma non si leggeva come
// inseguimento. Con 520px la risposta e' quasi il doppio.
export const TILT_RANGE_PX = 520;
// Traslazione massima dell'avatar verso il cursore. Le pose sono discrete, la
// rotazione e' l'unico movimento continuo: aggiungere uno scorrimento da' un
// secondo canale continuo e l'inseguimento si legge molto piu' fluido. A 0 resta
// solo la rotazione.
export const TILT_SHIFT_PX = 7;
export const GAZE_DEAD_ZONE_PX = 70;
// Il cambio posa si conferma solo se il cursore resta nel nuovo settore per
// questo tempo: evita la raffica di swap durante i movimenti rapidi del mouse.
// E' latenza volontaria, quindi tenuta al minimo utile (l'isteresi sotto fa il
// grosso del lavoro anti-oscillazione).
export const GAZE_DEBOUNCE_MS = 40;
// Isteresi: il puntatore deve allontanarsi di almeno questi gradi dall'angolo
// della posa attuale prima di cambiarla (i settori sono ampi 45 gradi, quindi
// serve entrare di ~10 gradi in quello nuovo). Evita l'oscillazione ai confini.
export const GAZE_SWITCH_DEG = 32;
// Nessuna dissolvenza tra le pose: le foto hanno sagome diverse, quindi durante
// qualsiasi fade le due pose sono entrambe visibili (si vedeva un pezzo del
// frame precedente lungo capelli e spalle). Il cambio e' un taglio secco su un
// unico layer, poi accompagnato da questo micro-assestamento: una scala che
// rientra in pochi frame. L'occhio legge un movimento invece di un salto, e in
// ogni istante e' visibile una sola posa. A 0 il cambio resta istantaneo e
// nudo.
export const FRAME_SETTLE_MS: number = 140;
export const FRAME_SETTLE_SCALE = 0.982;
export const WINK_DURATION_MS = 600;
