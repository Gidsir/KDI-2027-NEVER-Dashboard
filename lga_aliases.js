/**
 * Sheet LGA spelling -> boundary LGA spelling.
 *
 * Keys are normalised on both sides: uppercase, punctuation and spaces
 * stripped, joined as "STATE|LGA" (see normKey()/lgaKeyFor() in
 * dashboard.html), so "Federal Capital Territory" + "Abuja" becomes
 * "ABUJAFEDERALCAPITALTERRITORY|ABUJA". Values are the same normalised form
 * of the name the geoBoundaries file uses.
 *
 * Only spellings that fail to join a polygon need an entry here; everything
 * else matches after normalisation. Every pair below was found by reading the
 * sheet against the 37 boundary files, with the row count it covers:
 *
 *   Abuja        16   the sheet's name for Abuja Municipal (AMAC)
 *   Otukpo       10   boundary file spells it Oturkpo
 *   Ilesa West    8   boundary file spells it Ilesha West
 *   Ilesa East   10   boundary file spells it Ilesha East
 *   Ayedaade      1   boundary file spells it Ayedade
 *   Danko-Wasagu  7   boundary file spells it Wasagu-Danko
 *   Bagudo        3   boundary file spells it Bagudu
 *   Yenagoa       6   boundary file spells it Yenegoa
 *   Emohua        3   boundary file spells it Emuoha
 *   Wamako        2   boundary file spells it Wamakko
 *   Igueben       2   boundary file spells it Iguegben
 *   Shongom       1   boundary file spells it Shomgom
 *   Obi Ngwa      1   boundary file spells it Obi Nwga
 *   Nasarawa      1   boundary file spells it Nassarawa
 *   Mbaitoli      1   boundary file spells it Mbatoli
 *
 * Not fixable here: Ngaski (2 Kebbi rows) has no polygon in kebbi.geojson —
 * its sliver falls on the Niger side of the border and sits in niger.geojson.
 */
window.LGA_ALIASES = {
  'ABUJAFEDERALCAPITALTERRITORY|ABUJA': 'MUNICIPALAREACOUNCIL',
  'BENUE|OTUKPO': 'OTURKPO',
  'OSUN|ILESAWEST': 'ILESHAWEST',
  'OSUN|ILESAEAST': 'ILESHAEAST',
  'OSUN|AYEDAADE': 'AYEDADE',
  'KEBBI|DANKOWASAGU': 'WASAGUDANKO',
  'KEBBI|BAGUDO': 'BAGUDU',
  'BAYELSA|YENAGOA': 'YENEGOA',
  'RIVERS|EMOHUA': 'EMUOHA',
  'SOKOTO|WAMAKO': 'WAMAKKO',
  'EDO|IGUEBEN': 'IGUEGBEN',
  'GOMBE|SHONGOM': 'SHOMGOM',
  'ABIA|OBINGWA': 'OBINWGA',
  'KANO|NASARAWA': 'NASSARAWA',
  'IMO|MBAITOLI': 'MBATOLI'
};
