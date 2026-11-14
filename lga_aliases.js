/**
 * Sheet LGA spelling -> boundary LGA spelling.
 *
 * Keys are normalised on both sides: uppercase, punctuation and spaces
 * stripped, joined as "STATE|LGA" (see normKey()/lgaKeyFor() in
 * dashboard.html). Only spellings that fail to join a geoBoundaries polygon
 * need an entry here — everything else matches after normalisation.
 *
 * The current sheet already spells LGAs the way the boundary files do, so
 * this map is empty. Add entries as new spellings appear in the sheet:
 *
 *   window.LGA_ALIASES['KANO|DALLA'] = 'DALA';
 */
window.LGA_ALIASES = {};
