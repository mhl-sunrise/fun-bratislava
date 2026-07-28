// ---------------------------------------------------------------------------
// Translations. Keys are the Slovak source strings, so the markup needs no
// data-i18n attributes and Slovak renders with zero lookups. Anything missing
// here simply falls through to Slovak instead of showing an empty string.
//
// Add a language: add a block below and an entry in FB_LOCALE, then add the
// link to the .langs switcher in index.html and re-run scratchpad/genpages.sh.
// ---------------------------------------------------------------------------
window.FB_LOCALE = { sk: 'sk-SK', en: 'en-GB', de: 'de-DE' };

window.FB_I18N = {
en: {
  // --- head / nav
  'Fun Bratislava — zážitky pre skupiny v Bratislave': 'Fun Bratislava — group experiences in Bratislava',
  'Beer bike, bubble football, archery tag a ďalších päť aktivít pre teambuilding, rozlúčku so slobodou alebo víkend s partiou. Zostavte si plán, cenu vidíte hneď.': 'Beer bike, bubble football, archery tag and five more activities for team building, stag and hen parties or a weekend with friends. Build your plan and see the price straight away.',
  'Aktivity': 'Activities',
  'Príležitosti': 'Occasions',
  'Ako to funguje': 'How it works',
  'Recenzie': 'Reviews',
  'Rezervácia': 'Book now',
  'Fun Bratislava — domov': 'Fun Bratislava — home',
  'Menu': 'Menu',

  // --- hero
  'Bratislava · skupinové zážitky': 'Bratislava · group experiences',
  'Zážitky pre skupiny v Bratislave': 'Group experiences in Bratislava',
  'Osem aktivít pre partie od 2 do 30 ľudí. Nastavte veľkosť skupiny a príležitosť — ceny sa prepočítajú a odporučíme, čo sadne.': 'Eight activities for groups of 2 to 30. Set your group size and occasion — prices update instantly and we suggest what fits.',
  'Bez platby vopred': 'No prepayment',
  'Odpoveď do 24 hodín': 'Reply within 24 hours',
  'SK / EN / DE': 'SK / EN / DE',

  // --- planner
  'Koľko vás bude': 'How many of you',
  'Menej ľudí': 'Fewer people',
  'Viac ľudí': 'More people',
  'Na akú príležitosť': 'What is the occasion',
  'Teambuilding': 'Team building',
  'Rozlúčka so slobodou': 'Stag & hen',
  'Oslava': 'Celebration',
  'Víkend s partiou': 'Weekend',
  'Kedy': 'When',
  'Vyberte dátum': 'Pick a date',
  'Zobraziť aktivity': 'See activities',
  'Zobraziť len odporúčané': 'Recommended only',
  'Odporúčame': 'Recommended',

  // --- activity cards
  'Pridajte si jednu alebo viac do plánu. Bežne sa stíhajú dve za popoludnie.': 'Add one or more to your plan. Two in an afternoon is a comfortable pace.',
  'Na kolesách': 'On wheels',
  'Súťažné': 'Competitive',
  'Objavovanie': 'Exploring',
  'Remeslo': 'Craft',
  'Bar na kolesách so šoférom. Šliapete, čapované pivo tečie, hudba hrá — hodinu uličkami Starého Mesta.': 'A bar on wheels with its own driver. You pedal, the beer flows, the music plays — an hour through the Old Town.',
  'To isté kolo, iná nálada. Namiesto piva prosecco — pre oslavy a rozlúčky, kde majú sedieť aj fotky.': 'Same bike, different mood. Prosecco instead of beer — for celebrations and parties where the photos matter too.',
  'Futbal, v ktorom je faul najlepšia časť. Najspoľahlivejší ľadolamec z celej ponuky.': 'Football where the foul is the best part. The most reliable icebreaker we offer.',
  'Obrovský terč a lopta so suchým zipsom. Nevyhráva najlepší futbalista — vyhráva ten, kto trafí.': 'A giant target and a velcro ball. The best footballer does not win — the best aim does.',
  'Lukostreľba proti sebe, s mäkkými hrotmi a maskou. Adrenalín paintballu bez modrín a bez farby.': 'Archery against each other, with soft tips and a face mask. Paintball adrenaline without the bruises or the paint.',
  'Šifrovačka po Starom Meste na tablete. Jediná aktivita z ponuky, ktorá funguje aj v obleku.': 'A tablet-led treasure hunt through the Old Town. The one activity that works in a suit.',
  'Sekera, drevený terč a prekvapivo upokojujúci zvuk zásahu. Inštruktor vás naučí hod za päť minút.': 'An axe, a wooden target and a surprisingly calming thud. The instructor has you throwing within five minutes.',
  'Hodina za pípou s pivovarníkom: hladinka, šnyt, mlieko. Pokojnejšia alternatíva k športu.': 'An hour behind the tap with a brewer: the three classic Czech-style pours. A calmer alternative to sport.',
  '60 min': '60 min',
  'max 14 / bicykel': 'max 14 / bike',
  'šofér v cene': 'driver included',
  'tímy 5 na 5': 'teams of 5',
  'vonku': 'outdoors',
  'výstroj v cene': 'gear included',
  'tímovo': 'team based',
  'nízka náročnosť': 'easy going',
  'vonku aj vnútri': 'indoors or out',
  'tímy 4–6': 'teams of 4–6',
  'Staré Mesto': 'Old Town',
  'tablet v cene': 'tablet included',
  'vnútri': 'indoors',
  'celoročne': 'all year round',
  'inštruktor': 'instructor',
  'degustácia': 'tasting',
  '270 € / jazda': '€270 / ride',
  '38 € / osoba': '€38 / person',
  '41 € / osoba': '€41 / person',
  '33 € / osoba': '€33 / person',
  'cena na vyžiadanie': 'price on request',
  'Pridať do plánu': 'Add to plan',
  'V pláne': 'In plan',
  'Detail': 'Details',
  'Pre túto príležitosť nemáme priame odporúčanie — vypnite filter a pozrite si všetkých osem, alebo nám napíšte a poradíme.': 'We have no direct match for this occasion — switch the filter off to see all eight, or write to us and we will advise.',

  // --- occasions
  'Komu to sadne': 'Who it suits',
  'Firmy': 'Companies',
  'Faktúra, program na mieru a jeden kontakt na všetko. Bežne kombinujeme dve aktivity za popoludnie.': 'An invoice, a tailored programme and one contact for everything. We usually combine two activities in an afternoon.',
  'Partia': 'Friends',
  'Bicykel ako otvárací ťah večera. Trasa vedie okolo podnikov, kde sa dá pokračovať.': 'The bike as the opening move of the evening. The route passes bars where the night can carry on.',
  'Narodeniny': 'Birthdays',
  'Skupinová cena, žiadne minimum na osobu pri bicykloch. Doplnky doobjednáte pri rezervácii.': 'A group price with no per-person minimum on the bikes. Add extras when you book.',
  'Turisti': 'Visitors',
  'Sprevádzame po slovensky, anglicky aj nemecky. Všetko v dosahu peši od Hlavného námestia.': 'We guide in Slovak, English and German. Everything is within walking distance of the main square.',

  // --- how it works
  'Pošlete plán': 'Send your plan',
  'Vyberiete aktivity, doplníte dátum a kontakt. Nič neplatíte vopred.': 'Pick the activities, add a date and your contact details. Nothing is paid up front.',
  'Potvrdíme dostupnosť': 'We confirm availability',
  'Ozveme sa do 24 hodín s voľnými časmi a finálnou cenou vrátane doplnkov.': 'We reply within 24 hours with available times and a final price including extras.',
  'Prídete a bavíte sa': 'You show up and enjoy it',
  'Na mieste vás preberie inštruktor alebo šofér. Výstroj, pivo aj hudba sú pripravené.': 'An instructor or driver takes over on site. Gear, drinks and music are ready.',

  // --- reviews
  'Brali sme beer bike na firemné popoludnie, 13 ľudí. Organizácia bez jediného telefonátu navyše, šofér vtipný, hodina ubehla strašne rýchlo.': 'We booked the beer bike for a company afternoon, 13 of us. Organised without a single extra phone call, the driver was funny, and the hour flew by.',
  'office manager, IT firma': 'office manager, IT company',
  'Rozlúčka so slobodou — prosecco bike a večer archery tag. Presne to, čo sme chceli: nikto neriešil program, všetko bolo dohodnuté dopredu.': 'A hen party — prosecco bike and archery tag in the evening. Exactly what we wanted: nobody had to sort out the programme, it was all agreed in advance.',
  'Wir haben die Schnitzeljagd mit dem iPad gemacht — tolle Art, die Altstadt kennenzulernen. Betreuung auf Deutsch, alles reibungslos.': 'We did the iPad treasure hunt — a great way to get to know the Old Town. Guided in German, all completely smooth.',
  'Bratislava': 'Bratislava',
  'Wien': 'Vienna',

  // --- booking
  'Pošlite nám plán': 'Send us your plan',
  'Nezáväzne. Ozveme sa do 24 hodín s voľnými časmi a finálnou cenou.': 'No obligation. We reply within 24 hours with available times and a final price.',
  'Váš plán': 'Your plan',
  'Zatiaľ ste nevybrali žiadnu aktivitu. Pridajte ju vyššie — alebo nám len napíšte a poradíme.': 'You have not picked an activity yet. Add one above — or just write to us and we will advise.',
  'Odhad spolu': 'Estimated total',
  'Meno': 'Name',
  'Email': 'Email',
  'Telefón': 'Phone',
  'Príležitosť': 'Occasion',
  'Neuvedené': 'Not specified',
  'Dátum': 'Date',
  'Počet ľudí': 'Number of people',
  'Poznámka': 'Note',
  'Približný čas, doplnky, špeciálne požiadavky…': 'Rough time, extras, special requests…',
  'Súhlasím so spracovaním osobných údajov na účel vybavenia tejto požiadavky. Viac v': 'I agree to my personal data being processed in order to handle this enquiry. More in the',
  'zásadách ochrany osobných údajov': 'privacy policy',
  'Odoslať požiadavku': 'Send enquiry',

  // --- footer / dock / dialogs
  'Skupinové aktivity a zážitky v centre Bratislavy. Slovensky, anglicky, nemecky.': 'Group activities and experiences in central Bratislava. In Slovak, English and German.',
  'Kontakt': 'Contact',
  'Dokumenty': 'Documents',
  'Všeobecné podmienky': 'Terms and conditions',
  'Ochrana osobných údajov': 'Privacy policy',
  'Zásady používania cookies': 'Cookie policy',
  'Prevádzkovateľ: Remeli, s.r.o., Hlavná 121/62, 976 68 Heľpa · IČO 46150501': 'Operator: Remeli, s.r.o., Hlavná 121/62, 976 68 Heľpa · Reg. no. 46150501',
  'Vyprázdniť': 'Clear',
  'Pokračovať': 'Continue',
  'Chcete k tomu niečo doplniť? Doplnky viete zmeniť aj neskôr.': 'Want to add anything? You can change extras later.',
  'Zrušiť': 'Cancel',
  'Súbory cookie': 'Cookies',
  'Nevyhnutné cookies držia web pri živote. Analytické zapneme len s vaším súhlasom — viac v': 'Essential cookies keep the site running. We only enable analytics with your consent — more in the',
  'Prijať všetko': 'Accept all',
  'Len nevyhnutné': 'Essential only',
  'Napíšte nám na WhatsApp': 'Message us on WhatsApp',
  'Nastavenia cookies': 'Cookie settings',

  // --- image alt text
  'Skupina na beer biku v centre Bratislavy': 'A group on the beer bike in central Bratislava',
  'Prosecco bike počas jazdy Starým Mestom': 'The prosecco bike riding through the Old Town',
  'Hráči v nafukovacích bublinách počas zápasu': 'Players in inflatable bubbles during a match',
  'Nafukovací terč a futbalové lopty počas footdarts': 'An inflatable target and footballs during footdarts',
  'Archery tag — hráči s lukmi a maskami': 'Archery tag — players with bows and masks',
  'Tím s tabletom počas šifrovačky v Starom Meste': 'A team with a tablet during the Old Town treasure hunt',
  'Hod sekerou do dreveného terča': 'Throwing an axe at a wooden target',
  'Čapovanie piva počas školy čapovania': 'Pouring beer during the tapping course',

  // --- runtime strings (built in JS, not present in the markup)
  'Zatiaľ ste nevybrali žiadnu aktivitu.': 'You have not picked an activity yet.',
  'Cenu potvrdíme do 24 hodín': 'We confirm the price within 24 hours',
  'na vyžiadanie': 'on request',
  'dohodou': 'by agreement',
  'za {n} ľudí': 'for {n} people',
  '{n} bicykle naraz': '{n} bikes at once',
  'na osobu': 'per person',
  'aktivita': 'activity',
  'aktivity': 'activities',
  'aktivít': 'activities',
  'pre': 'for',
  'ľudí': 'people',
  'Pre {n} ľudí vyhovuje všetkých 8 aktivít.': 'All 8 activities suit a group of {n}.',
  'Pre {n} ľudí vypravíme na bicykloch {k} kolá naraz.': 'For {n} people we run {k} bikes at once.',
  'Odstrániť {x} z plánu': 'Remove {x} from the plan',
  'Pridať {x} do plánu': 'Add {x} to the plan',
  'Ďakujeme, máme to. Ozveme sa do 24 hodín.': 'Thank you, we have it. We will be in touch within 24 hours.',
  'Predchádzajúci mesiac': 'Previous month',
  'Nasledujúci mesiac': 'Next month',
  'Zmazať': 'Clear',
  'Dnes': 'Today',
  'Všetky aktivity': 'All activities',
  'Trvanie': 'Duration',
  'Skupina': 'Group',
  'Cena': 'Price',
  'Čo je v cene': 'What is included',
  'Čo sa dá pridať': 'What you can add',
  'Ďalšie aktivity': 'More activities',
  'Chcete to naplánovať?': 'Ready to plan it?',
  'Napíšte nám počet ľudí a termín. Ozveme sa do 24 hodín s voľnými časmi a finálnou cenou. Nič neplatíte vopred.': 'Tell us how many of you there are and when. We reply within 24 hours with times and a final price. Nothing is paid up front.',
  'Poslať dopyt': 'Send enquiry',
  'Pridať do plánu': 'Add to plan',

  // --- activity pages
  'Škola čapovania': 'Beer Tapping Course',
  'Škola čapovania — Fun Bratislava': 'Beer Tapping Course — Fun Bratislava',
  'Škola čapovania v Bratislave': 'Beer tapping course in Bratislava',
  '2 – 14 na bicykel': '2 – 14 per bike',
  '4 – 16 ľudí': '4 – 16 people',
  '4 – 20 ľudí': '4 – 20 people',
  '4 – 24 ľudí': '4 – 24 people',
  '4 – 30 ľudí': '4 – 30 people',
  '6 – 24 ľudí': '6 – 24 people',
  '6 – 30 ľudí': '6 – 30 people',
  '60 minút': '60 minutes',
  '60 – 90 minút': '60 – 90 minutes',
  '90 – 120 minút': '90 – 120 minutes',
  'Na vyžiadanie': 'On request',

  'Bar na kolesách so šoférom': 'A bar on wheels with a driver',
  'Šliapete, čapované pivo tečie, hudba hrá. Hodina uličkami Starého Mesta s vlastným šoférom — vy sa staráte len o playlist a o to, aby pohár nebol prázdny. Pre väčšie partie vieme vypraviť dva bicykle naraz.': 'You pedal, the beer flows, the music plays. An hour through the Old Town with your own driver — all you handle is the playlist and keeping your glass full. For larger groups we can run two bikes at once.',
  'Šofér počas celej jazdy': 'A driver for the whole ride',
  '30 l čapovaného piva v cene': '30 l of draught beer included',
  'Ozvučenie s pripojením na váš telefón': 'Sound system you can connect your phone to',
  'Trasa centrom podľa dohody': 'A city-centre route agreed with you',
  'Sud navyše (30 l)': 'Extra keg (30 l)',
  'Nealko balíček': 'Soft drinks package',
  'Fotograf na trase': 'Photographer along the route',
  'Odchod od Hlavného námestia, po dohode aj inde v centre. Jazdíme celoročne, v zime s plachtou a dekami.': 'Departure from the main square, or elsewhere in the centre by arrangement. We ride all year — in winter with a cover and blankets.',

  'To isté kolo, iná nálada': 'Same bike, different mood',
  'Namiesto piva prosecco, namiesto rockového playlistu čokoľvek, na čo sa dá spievať. Obľúbená voľba na rozlúčky a oslavy — a áno, na fotky je to výrazne lepšie ako pivný sud.': 'Prosecco instead of beer, and instead of a rock playlist anything you can sing along to. A favourite for parties and celebrations — and yes, it photographs far better than a beer keg.',
  '6 fliaš prosecca v cene': '6 bottles of prosecco included',
  'Poháre a chladenie': 'Glasses and chilling',
  'Fľaša prosecca navyše': 'Extra bottle of prosecco',
  'Slané chuťovky': 'Savoury snacks',
  'Praclíky': 'Pretzels',
  'Čiapky pre partiu': 'Hats for the group',
  'Odchod od Hlavného námestia, po dohode aj inde v centre. Trasa vedie okolo podnikov, kde sa dá pokračovať.': 'Departure from the main square, or elsewhere in the centre by arrangement. The route passes bars where the night can carry on.',

  'Futbal, v ktorom je faul najlepšia časť': 'Football where the foul is the best part',
  'Nafúknete sa do bubliny a hráte futbal, ktorý s futbalom nemá veľa spoločného. Najspoľahlivejší ľadolamec z celej ponuky — po piatich minútach sa smejú aj tí, čo prišli s tým, že sa zúčastňovať nebudú.': 'You climb into an inflatable bubble and play football that has little to do with football. The most reliable icebreaker we offer — after five minutes even the ones who came to sit it out are laughing.',
  'Bubliny a všetok výstroj': 'Bubbles and all the gear',
  'Rozhodca a organizácia zápasov': 'A referee and match organisation',
  'Ihrisko v Bratislave': 'A pitch in Bratislava',
  'Voda pre hráčov': 'Water for the players',
  'Predĺženie o 30 minút': 'Extra 30 minutes',
  'Fotograf': 'Photographer',
  'Hrá sa na ihrisku v Bratislave, dostupnom MHD. Odporúčame športovú obuv a oblečenie, ktoré vám nie je ľúto.': 'Played on a pitch in Bratislava reachable by public transport. Bring trainers and clothes you do not mind getting dirty.',

  'Šípky, ktoré kopete': 'Darts you kick',
  'Nafukovací terč vysoký ako dom a futbalové lopty so suchým zipsom. Pravidlá pochopíte za tridsať sekúnd, trafiť stred vám potrvá podstatne dlhšie. Funguje aj pre partie, kde polovica nikdy nešportovala.': 'An inflatable target as tall as a house and footballs with velcro. You will grasp the rules in thirty seconds; hitting the bullseye takes considerably longer. It works even for groups where half have never played a sport.',
  'Terč, lopty a kompletný výstroj': 'Target, balls and all the gear',
  'Organizátor a bodovanie': 'An organiser and scoring',
  'Kombinácia s bubble footballom': 'Combine with bubble football',
  'Hrá sa vonku aj v hale — podľa počasia a termínu. Vhodné pre všetky vekové kategórie od 12 rokov.': 'Played outdoors or in a hall, depending on the weather and the date. Suitable for ages 12 and up.',

  'Lukostreľba, kde sa strieľa po sebe': 'Archery where you shoot at each other',
  'Luky, šípy s penovým hrotom a maska na tvár. Bezpečné, ale adrenalínu je v tom prekvapivo dosť — hlavne keď zistíte, že súper mieri na vás. Tímová hra s jasnými pravidlami a rozhodcom.': 'Bows, foam-tipped arrows and a face mask. Safe, but with a surprising amount of adrenaline — especially once you notice an opponent aiming at you. A team game with clear rules and a referee.',
  'Luky, šípy a ochranné masky': 'Bows, arrows and protective masks',
  'Rozhodca a réžia hry': 'A referee running the game',
  'Prekážky a hracie pole': 'Obstacles and a playing field',
  'Hrá sa na ihrisku v Bratislave. Šípy majú penový hrot, ochranná maska je povinná a je v cene.': 'Played on a pitch in Bratislava. The arrows have foam tips, and the protective mask is compulsory and included.',

  'Šifrovačka Starým Mestom': 'A treasure hunt through the Old Town',
  'Tímy s tabletom, úlohy na mape a mesto ako hracia doska. Prejdete miesta, okolo ktorých ste chodili roky a nevšimli si ich. Na konci je vyhodnotenie — a obvykle aj prekvapenie, ktorý tím vyhral.': 'Teams with a tablet, tasks on a map and the city as the board. You will walk past places you have passed for years without noticing. It ends with the results — and usually a surprise about which team won.',
  'Tablety pre všetky tímy': 'Tablets for every team',
  'Trasa a úlohy pripravené vopred': 'Route and tasks prepared in advance',
  'Sprievodca na štarte a v cieli': 'A guide at the start and the finish',
  'Vyhodnotenie a diplom pre víťazov': 'Results and a certificate for the winners',
  'Sprevádzanie v angličtine alebo nemčine': 'Guiding in English or German',
  'Štart aj cieľ v Starom Meste, všetko v dosahu peši. Funguje za každého počasia — pri daždi upravíme trasu.': 'Start and finish in the Old Town, all within walking distance. It runs in any weather — if it rains we adjust the route.',

  'Hod sekerou do dreveného terča': 'Throwing an axe at a wooden target',
  'Znie to divokejšie, než to je. Naučíte sa techniku, hádžete do dreveného terča a súťažíte v tímoch. Po prvom zásahu do stredu už neprestanete — a inštruktor dohliada na to, aby všetko ostalo bezpečné.': 'It sounds wilder than it is. You learn the technique, throw at a wooden target and compete in teams. After the first bullseye you will not want to stop — and an instructor keeps everything safe.',
  'Sekery a terče': 'Axes and targets',
  'Inštruktor a bezpečnostné poučenie': 'An instructor and a safety briefing',
  'Turnaj a bodovanie': 'A tournament with scoring',
  'Nápoj v cene': 'A drink included',
  'Hádže sa v krytom priestore, takže počasie nerozhoduje. Minimálny vek 18 rokov, uzavretá obuv povinná.': 'Throwing takes place indoors, so the weather does not matter. Minimum age 18, closed shoes required.',

  'Naučte sa natočiť pivo poriadne': 'Learn to pour a beer properly',
  'Hodina za výčapom s človekom, ktorý to robí roky. Naučíte sa hladinku, šnyt aj mlieko, dozviete sa, prečo záleží na uhle pohára — a všetko, čo natočíte, aj vypijete.': 'An hour behind the tap with someone who has done it for years. You will learn the three classic pours, find out why the angle of the glass matters — and drink everything you pour.',
  'Školiteľ a výčap': 'A trainer and the tap',
  'Pivo, ktoré počas kurzu natočíte': 'The beer you pour during the course',
  'Poháre a príslušenstvo': 'Glasses and equipment',
  'Certifikát na záver': 'A certificate at the end',
  'Prebieha v podniku v centre Bratislavy. Vhodné aj ako doplnok k inej aktivite — bežne sa kombinuje s bicyklom.': 'Held in a venue in central Bratislava. It also works as an add-on to another activity — most often combined with a bike ride.',
},

de: {
  // --- head / nav
  'Fun Bratislava — zážitky pre skupiny v Bratislave': 'Fun Bratislava — Gruppenerlebnisse in Bratislava',
  'Beer bike, bubble football, archery tag a ďalších päť aktivít pre teambuilding, rozlúčku so slobodou alebo víkend s partiou. Zostavte si plán, cenu vidíte hneď.': 'Bierbike, Bubble Football, Archery Tag und fünf weitere Aktivitäten für Teambuilding, Junggesellenabschied oder ein Wochenende mit Freunden. Stellen Sie Ihr Programm zusammen — den Preis sehen Sie sofort.',
  'Aktivity': 'Aktivitäten',
  'Príležitosti': 'Anlässe',
  'Ako to funguje': 'So funktioniert es',
  'Recenzie': 'Bewertungen',
  'Rezervácia': 'Buchen',
  'Fun Bratislava — domov': 'Fun Bratislava — Startseite',
  'Menu': 'Menü',

  // --- hero
  'Bratislava · skupinové zážitky': 'Bratislava · Gruppenerlebnisse',
  'Zážitky pre skupiny v Bratislave': 'Gruppenerlebnisse in Bratislava',
  'Osem aktivít pre partie od 2 do 30 ľudí. Nastavte veľkosť skupiny a príležitosť — ceny sa prepočítajú a odporučíme, čo sadne.': 'Acht Aktivitäten für Gruppen von 2 bis 30 Personen. Gruppengröße und Anlass einstellen — die Preise passen sich sofort an und wir empfehlen, was passt.',
  'Bez platby vopred': 'Keine Vorauszahlung',
  'Odpoveď do 24 hodín': 'Antwort binnen 24 Stunden',
  'SK / EN / DE': 'SK / EN / DE',

  // --- planner
  'Koľko vás bude': 'Wie viele sind Sie',
  'Menej ľudí': 'Weniger Personen',
  'Viac ľudí': 'Mehr Personen',
  'Na akú príležitosť': 'Zu welchem Anlass',
  'Teambuilding': 'Teambuilding',
  'Rozlúčka so slobodou': 'Junggesellenabschied',
  'Oslava': 'Feier',
  'Víkend s partiou': 'Wochenende',
  'Kedy': 'Wann',
  'Vyberte dátum': 'Datum wählen',
  'Zobraziť aktivity': 'Aktivitäten ansehen',
  'Zobraziť len odporúčané': 'Nur Empfehlungen',
  'Odporúčame': 'Empfohlen',

  // --- activity cards
  'Pridajte si jednu alebo viac do plánu. Bežne sa stíhajú dve za popoludnie.': 'Fügen Sie eine oder mehrere hinzu. Zwei an einem Nachmittag sind gut machbar.',
  'Na kolesách': 'Auf Rädern',
  'Súťažné': 'Wettkampf',
  'Objavovanie': 'Entdecken',
  'Remeslo': 'Handwerk',
  'Bar na kolesách so šoférom. Šliapete, čapované pivo tečie, hudba hrá — hodinu uličkami Starého Mesta.': 'Eine Bar auf Rädern mit eigenem Fahrer. Sie treten, das Bier fließt, die Musik spielt — eine Stunde durch die Altstadt.',
  'To isté kolo, iná nálada. Namiesto piva prosecco — pre oslavy a rozlúčky, kde majú sedieť aj fotky.': 'Dasselbe Rad, andere Stimmung. Prosecco statt Bier — für Feiern und Abschiede, bei denen auch die Fotos stimmen sollen.',
  'Futbal, v ktorom je faul najlepšia časť. Najspoľahlivejší ľadolamec z celej ponuky.': 'Fußball, bei dem das Foul das Beste ist. Der zuverlässigste Eisbrecher im Angebot.',
  'Obrovský terč a lopta so suchým zipsom. Nevyhráva najlepší futbalista — vyhráva ten, kto trafí.': 'Eine riesige Zielscheibe und ein Klettball. Nicht der beste Fußballer gewinnt, sondern wer trifft.',
  'Lukostreľba proti sebe, s mäkkými hrotmi a maskou. Adrenalín paintballu bez modrín a bez farby.': 'Bogenschießen gegeneinander, mit weichen Spitzen und Gesichtsmaske. Paintball-Adrenalin ohne blaue Flecken und ohne Farbe.',
  'Šifrovačka po Starom Meste na tablete. Jediná aktivita z ponuky, ktorá funguje aj v obleku.': 'Eine Schnitzeljagd mit dem Tablet durch die Altstadt. Die einzige Aktivität, die auch im Anzug funktioniert.',
  'Sekera, drevený terč a prekvapivo upokojujúci zvuk zásahu. Inštruktor vás naučí hod za päť minút.': 'Eine Axt, eine Holzscheibe und ein überraschend beruhigendes Geräusch beim Treffer. Der Trainer bringt es Ihnen in fünf Minuten bei.',
  'Hodina za pípou s pivovarníkom: hladinka, šnyt, mlieko. Pokojnejšia alternatíva k športu.': 'Eine Stunde am Zapfhahn mit einem Brauer: die drei klassischen Zapfarten. Die ruhigere Alternative zum Sport.',
  '60 min': '60 Min',
  'max 14 / bicykel': 'max. 14 / Rad',
  'šofér v cene': 'Fahrer inklusive',
  'tímy 5 na 5': 'Teams zu fünft',
  'vonku': 'draußen',
  'výstroj v cene': 'Ausrüstung inklusive',
  'tímovo': 'im Team',
  'nízka náročnosť': 'leicht',
  'vonku aj vnútri': 'drinnen und draußen',
  'tímy 4–6': 'Teams zu 4–6',
  'Staré Mesto': 'Altstadt',
  'tablet v cene': 'Tablet inklusive',
  'vnútri': 'drinnen',
  'celoročne': 'ganzjährig',
  'inštruktor': 'Trainer',
  'degustácia': 'Verkostung',
  '270 € / jazda': '270 € / Fahrt',
  '38 € / osoba': '38 € / Person',
  '41 € / osoba': '41 € / Person',
  '33 € / osoba': '33 € / Person',
  'cena na vyžiadanie': 'Preis auf Anfrage',
  'Pridať do plánu': 'Hinzufügen',
  'V pláne': 'Hinzugefügt',
  'Detail': 'Details',
  'Pre túto príležitosť nemáme priame odporúčanie — vypnite filter a pozrite si všetkých osem, alebo nám napíšte a poradíme.': 'Für diesen Anlass haben wir keine direkte Empfehlung — schalten Sie den Filter aus, um alle acht zu sehen, oder schreiben Sie uns.',

  // --- occasions
  'Komu to sadne': 'Für wen es passt',
  'Firmy': 'Firmen',
  'Faktúra, program na mieru a jeden kontakt na všetko. Bežne kombinujeme dve aktivity za popoludnie.': 'Rechnung, maßgeschneidertes Programm und ein Ansprechpartner für alles. Meist kombinieren wir zwei Aktivitäten an einem Nachmittag.',
  'Partia': 'Freundeskreis',
  'Bicykel ako otvárací ťah večera. Trasa vedie okolo podnikov, kde sa dá pokračovať.': 'Das Rad als Auftakt des Abends. Die Route führt an Lokalen vorbei, in denen es weitergehen kann.',
  'Narodeniny': 'Geburtstage',
  'Skupinová cena, žiadne minimum na osobu pri bicykloch. Doplnky doobjednáte pri rezervácii.': 'Gruppenpreis, bei den Rädern ohne Mindestteilnehmerzahl. Extras buchen Sie bei der Reservierung dazu.',
  'Turisti': 'Besucher',
  'Sprevádzame po slovensky, anglicky aj nemecky. Všetko v dosahu peši od Hlavného námestia.': 'Wir führen auf Slowakisch, Englisch und Deutsch. Alles ist vom Hauptplatz aus zu Fuß erreichbar.',

  // --- how it works
  'Pošlete plán': 'Plan senden',
  'Vyberiete aktivity, doplníte dátum a kontakt. Nič neplatíte vopred.': 'Aktivitäten wählen, Datum und Kontakt ergänzen. Sie zahlen nichts im Voraus.',
  'Potvrdíme dostupnosť': 'Wir bestätigen die Verfügbarkeit',
  'Ozveme sa do 24 hodín s voľnými časmi a finálnou cenou vrátane doplnkov.': 'Wir melden uns binnen 24 Stunden mit freien Terminen und dem Endpreis inklusive Extras.',
  'Prídete a bavíte sa': 'Sie kommen und haben Spaß',
  'Na mieste vás preberie inštruktor alebo šofér. Výstroj, pivo aj hudba sú pripravené.': 'Vor Ort übernimmt Sie ein Trainer oder Fahrer. Ausrüstung, Getränke und Musik stehen bereit.',

  // --- reviews
  'Brali sme beer bike na firemné popoludnie, 13 ľudí. Organizácia bez jediného telefonátu navyše, šofér vtipný, hodina ubehla strašne rýchlo.': 'Wir hatten das Bierbike für einen Firmennachmittag, 13 Personen. Organisiert ohne ein einziges zusätzliches Telefonat, der Fahrer war witzig, und die Stunde verging wie im Flug.',
  'office manager, IT firma': 'Office Managerin, IT-Firma',
  'Rozlúčka so slobodou — prosecco bike a večer archery tag. Presne to, čo sme chceli: nikto neriešil program, všetko bolo dohodnuté dopredu.': 'Junggesellinnenabschied — Prosecco Bike und abends Archery Tag. Genau das, was wir wollten: niemand musste sich ums Programm kümmern, alles war vorher abgesprochen.',
  'Wir haben die Schnitzeljagd mit dem iPad gemacht — tolle Art, die Altstadt kennenzulernen. Betreuung auf Deutsch, alles reibungslos.': 'Wir haben die Schnitzeljagd mit dem iPad gemacht — tolle Art, die Altstadt kennenzulernen. Betreuung auf Deutsch, alles reibungslos.',
  'Bratislava': 'Bratislava',
  'Wien': 'Wien',

  // --- booking
  'Pošlite nám plán': 'Senden Sie uns Ihren Plan',
  'Nezáväzne. Ozveme sa do 24 hodín s voľnými časmi a finálnou cenou.': 'Unverbindlich. Wir melden uns binnen 24 Stunden mit freien Terminen und dem Endpreis.',
  'Váš plán': 'Ihr Plan',
  'Zatiaľ ste nevybrali žiadnu aktivitu. Pridajte ju vyššie — alebo nám len napíšte a poradíme.': 'Sie haben noch keine Aktivität gewählt. Fügen Sie oben eine hinzu — oder schreiben Sie uns einfach.',
  'Odhad spolu': 'Geschätzt gesamt',
  'Meno': 'Name',
  'Email': 'E-Mail',
  'Telefón': 'Telefon',
  'Príležitosť': 'Anlass',
  'Neuvedené': 'Keine Angabe',
  'Dátum': 'Datum',
  'Počet ľudí': 'Personenzahl',
  'Poznámka': 'Anmerkung',
  'Približný čas, doplnky, špeciálne požiadavky…': 'Ungefähre Uhrzeit, Extras, besondere Wünsche…',
  'Súhlasím so spracovaním osobných údajov na účel vybavenia tejto požiadavky. Viac v': 'Ich stimme der Verarbeitung meiner personenbezogenen Daten zur Bearbeitung dieser Anfrage zu. Mehr in den',
  'zásadách ochrany osobných údajov': 'Datenschutzbestimmungen',
  'Odoslať požiadavku': 'Anfrage senden',

  // --- footer / dock / dialogs
  'Skupinové aktivity a zážitky v centre Bratislavy. Slovensky, anglicky, nemecky.': 'Gruppenaktivitäten und Erlebnisse im Zentrum von Bratislava. Auf Slowakisch, Englisch und Deutsch.',
  'Kontakt': 'Kontakt',
  'Dokumenty': 'Dokumente',
  'Všeobecné podmienky': 'Allgemeine Geschäftsbedingungen',
  'Ochrana osobných údajov': 'Datenschutz',
  'Zásady používania cookies': 'Cookie-Richtlinie',
  'Prevádzkovateľ: Remeli, s.r.o., Hlavná 121/62, 976 68 Heľpa · IČO 46150501': 'Betreiber: Remeli, s.r.o., Hlavná 121/62, 976 68 Heľpa · IdNr. 46150501',
  'Vyprázdniť': 'Leeren',
  'Pokračovať': 'Weiter',
  'Chcete k tomu niečo doplniť? Doplnky viete zmeniť aj neskôr.': 'Möchten Sie etwas ergänzen? Extras können Sie später ändern.',
  'Zrušiť': 'Abbrechen',
  'Súbory cookie': 'Cookies',
  'Nevyhnutné cookies držia web pri živote. Analytické zapneme len s vaším súhlasom — viac v': 'Notwendige Cookies halten die Website am Laufen. Analyse-Cookies aktivieren wir nur mit Ihrer Zustimmung — mehr in der',
  'Prijať všetko': 'Alle akzeptieren',
  'Len nevyhnutné': 'Nur notwendige',
  'Napíšte nám na WhatsApp': 'Schreiben Sie uns auf WhatsApp',
  'Nastavenia cookies': 'Cookie-Einstellungen',

  // --- image alt text
  'Skupina na beer biku v centre Bratislavy': 'Eine Gruppe auf dem Bierbike im Zentrum von Bratislava',
  'Prosecco bike počas jazdy Starým Mestom': 'Das Prosecco Bike auf der Fahrt durch die Altstadt',
  'Hráči v nafukovacích bublinách počas zápasu': 'Spieler in aufblasbaren Bubbles während eines Spiels',
  'Nafukovací terč a futbalové lopty počas footdarts': 'Aufblasbare Zielscheibe und Fußbälle beim Footdarts',
  'Archery tag — hráči s lukmi a maskami': 'Archery Tag — Spieler mit Bögen und Masken',
  'Tím s tabletom počas šifrovačky v Starom Meste': 'Ein Team mit Tablet bei der Schnitzeljagd in der Altstadt',
  'Hod sekerou do dreveného terča': 'Axtwurf auf eine Holzscheibe',
  'Čapovanie piva počas školy čapovania': 'Bierzapfen beim Zapfkurs',

  // --- runtime strings (built in JS, not present in the markup)
  'Zatiaľ ste nevybrali žiadnu aktivitu.': 'Sie haben noch keine Aktivität gewählt.',
  'Cenu potvrdíme do 24 hodín': 'Den Preis bestätigen wir binnen 24 Stunden',
  'na vyžiadanie': 'auf Anfrage',
  'dohodou': 'nach Absprache',
  'za {n} ľudí': 'für {n} Personen',
  '{n} bicykle naraz': '{n} Räder gleichzeitig',
  'na osobu': 'pro Person',
  'aktivita': 'Aktivität',
  'aktivity': 'Aktivitäten',
  'aktivít': 'Aktivitäten',
  'pre': 'für',
  'ľudí': 'Personen',
  'Pre {n} ľudí vyhovuje všetkých 8 aktivít.': 'Für {n} Personen passen alle 8 Aktivitäten.',
  'Pre {n} ľudí vypravíme na bicykloch {k} kolá naraz.': 'Für {n} Personen setzen wir {k} Räder gleichzeitig ein.',
  'Odstrániť {x} z plánu': '{x} aus dem Plan entfernen',
  'Pridať {x} do plánu': '{x} zum Plan hinzufügen',
  'Ďakujeme, máme to. Ozveme sa do 24 hodín.': 'Vielen Dank, wir haben es. Wir melden uns binnen 24 Stunden.',
  'Predchádzajúci mesiac': 'Vorheriger Monat',
  'Nasledujúci mesiac': 'Nächster Monat',
  'Zmazať': 'Löschen',
  'Dnes': 'Heute',
  'Všetky aktivity': 'Alle Aktivitäten',
  'Trvanie': 'Dauer',
  'Skupina': 'Gruppe',
  'Cena': 'Preis',
  'Čo je v cene': 'Was inklusive ist',
  'Čo sa dá pridať': 'Was dazu buchbar ist',
  'Ďalšie aktivity': 'Weitere Aktivitäten',
  'Chcete to naplánovať?': 'Sollen wir es einplanen?',
  'Napíšte nám počet ľudí a termín. Ozveme sa do 24 hodín s voľnými časmi a finálnou cenou. Nič neplatíte vopred.': 'Schreiben Sie uns Personenzahl und Termin. Wir melden uns binnen 24 Stunden mit Zeiten und Endpreis. Sie zahlen nichts im Voraus.',
  'Poslať dopyt': 'Anfrage senden',

  // --- activity pages
  'Škola čapovania': 'Zapfkurs',
  'Škola čapovania — Fun Bratislava': 'Zapfkurs — Fun Bratislava',
  'Škola čapovania v Bratislave': 'Zapfkurs in Bratislava',
  '2 – 14 na bicykel': '2 – 14 pro Rad',
  '4 – 16 ľudí': '4 – 16 Personen',
  '4 – 20 ľudí': '4 – 20 Personen',
  '4 – 24 ľudí': '4 – 24 Personen',
  '4 – 30 ľudí': '4 – 30 Personen',
  '6 – 24 ľudí': '6 – 24 Personen',
  '6 – 30 ľudí': '6 – 30 Personen',
  '60 minút': '60 Minuten',
  '60 – 90 minút': '60 – 90 Minuten',
  '90 – 120 minút': '90 – 120 Minuten',
  'Na vyžiadanie': 'Auf Anfrage',

  'Bar na kolesách so šoférom': 'Eine Bar auf Rädern mit Fahrer',
  'Šliapete, čapované pivo tečie, hudba hrá. Hodina uličkami Starého Mesta s vlastným šoférom — vy sa staráte len o playlist a o to, aby pohár nebol prázdny. Pre väčšie partie vieme vypraviť dva bicykle naraz.': 'Sie treten, das Bier fließt, die Musik spielt. Eine Stunde durch die Altstadt mit eigenem Fahrer — Sie kümmern sich nur um die Playlist und darum, dass das Glas nicht leer bleibt. Für größere Gruppen setzen wir zwei Räder gleichzeitig ein.',
  'Šofér počas celej jazdy': 'Ein Fahrer während der ganzen Fahrt',
  '30 l čapovaného piva v cene': '30 l Fassbier inklusive',
  'Ozvučenie s pripojením na váš telefón': 'Soundanlage mit Anschluss für Ihr Handy',
  'Trasa centrom podľa dohody': 'Route durch das Zentrum nach Absprache',
  'Sud navyše (30 l)': 'Zusätzliches Fass (30 l)',
  'Nealko balíček': 'Alkoholfreies Paket',
  'Fotograf na trase': 'Fotograf entlang der Route',
  'Odchod od Hlavného námestia, po dohode aj inde v centre. Jazdíme celoročne, v zime s plachtou a dekami.': 'Abfahrt am Hauptplatz, nach Absprache auch anderswo im Zentrum. Wir fahren ganzjährig — im Winter mit Plane und Decken.',

  'To isté kolo, iná nálada': 'Dasselbe Rad, andere Stimmung',
  'Namiesto piva prosecco, namiesto rockového playlistu čokoľvek, na čo sa dá spievať. Obľúbená voľba na rozlúčky a oslavy — a áno, na fotky je to výrazne lepšie ako pivný sud.': 'Prosecco statt Bier und statt Rock-Playlist alles, wozu man mitsingen kann. Eine beliebte Wahl für Abschiede und Feiern — und ja, auf Fotos macht es deutlich mehr her als ein Bierfass.',
  '6 fliaš prosecca v cene': '6 Flaschen Prosecco inklusive',
  'Poháre a chladenie': 'Gläser und Kühlung',
  'Fľaša prosecca navyše': 'Zusätzliche Flasche Prosecco',
  'Slané chuťovky': 'Herzhafte Snacks',
  'Praclíky': 'Brezeln',
  'Čiapky pre partiu': 'Mützen für die Gruppe',
  'Odchod od Hlavného námestia, po dohode aj inde v centre. Trasa vedie okolo podnikov, kde sa dá pokračovať.': 'Abfahrt am Hauptplatz, nach Absprache auch anderswo im Zentrum. Die Route führt an Lokalen vorbei, in denen es weitergehen kann.',

  'Futbal, v ktorom je faul najlepšia časť': 'Fußball, bei dem das Foul das Beste ist',
  'Nafúknete sa do bubliny a hráte futbal, ktorý s futbalom nemá veľa spoločného. Najspoľahlivejší ľadolamec z celej ponuky — po piatich minútach sa smejú aj tí, čo prišli s tým, že sa zúčastňovať nebudú.': 'Sie steigen in eine aufblasbare Bubble und spielen Fußball, der mit Fußball wenig zu tun hat. Der zuverlässigste Eisbrecher im Angebot — nach fünf Minuten lachen auch die, die eigentlich nur zuschauen wollten.',
  'Bubliny a všetok výstroj': 'Bubbles und die komplette Ausrüstung',
  'Rozhodca a organizácia zápasov': 'Schiedsrichter und Spielorganisation',
  'Ihrisko v Bratislave': 'Ein Platz in Bratislava',
  'Voda pre hráčov': 'Wasser für die Spieler',
  'Predĺženie o 30 minút': 'Verlängerung um 30 Minuten',
  'Fotograf': 'Fotograf',
  'Hrá sa na ihrisku v Bratislave, dostupnom MHD. Odporúčame športovú obuv a oblečenie, ktoré vám nie je ľúto.': 'Gespielt wird auf einem Platz in Bratislava, der mit öffentlichen Verkehrsmitteln erreichbar ist. Bringen Sie Sportschuhe und Kleidung mit, um die es Ihnen nicht leid tut.',

  'Šípky, ktoré kopete': 'Darts, die Sie schießen',
  'Nafukovací terč vysoký ako dom a futbalové lopty so suchým zipsom. Pravidlá pochopíte za tridsať sekúnd, trafiť stred vám potrvá podstatne dlhšie. Funguje aj pre partie, kde polovica nikdy nešportovala.': 'Eine haushohe aufblasbare Zielscheibe und Fußbälle mit Klettverschluss. Die Regeln verstehen Sie in dreißig Sekunden, die Mitte zu treffen dauert deutlich länger. Funktioniert auch in Gruppen, in denen die Hälfte nie Sport gemacht hat.',
  'Terč, lopty a kompletný výstroj': 'Zielscheibe, Bälle und komplette Ausrüstung',
  'Organizátor a bodovanie': 'Organisator und Wertung',
  'Kombinácia s bubble footballom': 'Kombination mit Bubble Football',
  'Hrá sa vonku aj v hale — podľa počasia a termínu. Vhodné pre všetky vekové kategórie od 12 rokov.': 'Gespielt wird draußen oder in der Halle — je nach Wetter und Termin. Geeignet ab 12 Jahren.',

  'Lukostreľba, kde sa strieľa po sebe': 'Bogenschießen, bei dem aufeinander geschossen wird',
  'Luky, šípy s penovým hrotom a maska na tvár. Bezpečné, ale adrenalínu je v tom prekvapivo dosť — hlavne keď zistíte, že súper mieri na vás. Tímová hra s jasnými pravidlami a rozhodcom.': 'Bögen, Pfeile mit Schaumstoffspitze und Gesichtsmaske. Sicher, aber mit überraschend viel Adrenalin — vor allem, wenn Sie merken, dass ein Gegner auf Sie zielt. Ein Teamspiel mit klaren Regeln und Schiedsrichter.',
  'Luky, šípy a ochranné masky': 'Bögen, Pfeile und Schutzmasken',
  'Rozhodca a réžia hry': 'Schiedsrichter und Spielleitung',
  'Prekážky a hracie pole': 'Hindernisse und Spielfeld',
  'Hrá sa na ihrisku v Bratislave. Šípy majú penový hrot, ochranná maska je povinná a je v cene.': 'Gespielt wird auf einem Platz in Bratislava. Die Pfeile haben Schaumstoffspitzen, die Schutzmaske ist Pflicht und inklusive.',

  'Šifrovačka Starým Mestom': 'Eine Schnitzeljagd durch die Altstadt',
  'Tímy s tabletom, úlohy na mape a mesto ako hracia doska. Prejdete miesta, okolo ktorých ste chodili roky a nevšimli si ich. Na konci je vyhodnotenie — a obvykle aj prekvapenie, ktorý tím vyhral.': 'Teams mit Tablet, Aufgaben auf der Karte und die Stadt als Spielbrett. Sie kommen an Orte, an denen Sie jahrelang vorbeigegangen sind, ohne sie zu bemerken. Am Ende steht die Auswertung — und meist eine Überraschung, welches Team gewonnen hat.',
  'Tablety pre všetky tímy': 'Tablets für alle Teams',
  'Trasa a úlohy pripravené vopred': 'Route und Aufgaben im Voraus vorbereitet',
  'Sprievodca na štarte a v cieli': 'Begleitung am Start und im Ziel',
  'Vyhodnotenie a diplom pre víťazov': 'Auswertung und Urkunde für die Sieger',
  'Sprevádzanie v angličtine alebo nemčine': 'Begleitung auf Englisch oder Deutsch',
  'Štart aj cieľ v Starom Meste, všetko v dosahu peši. Funguje za každého počasia — pri daždi upravíme trasu.': 'Start und Ziel in der Altstadt, alles zu Fuß erreichbar. Findet bei jedem Wetter statt — bei Regen passen wir die Route an.',

  'Hod sekerou do dreveného terča': 'Axtwurf auf eine Holzscheibe',
  'Znie to divokejšie, než to je. Naučíte sa techniku, hádžete do dreveného terča a súťažíte v tímoch. Po prvom zásahu do stredu už neprestanete — a inštruktor dohliada na to, aby všetko ostalo bezpečné.': 'Es klingt wilder, als es ist. Sie lernen die Technik, werfen auf eine Holzscheibe und treten in Teams gegeneinander an. Nach dem ersten Treffer in die Mitte hören Sie nicht mehr auf — und ein Trainer sorgt dafür, dass alles sicher bleibt.',
  'Sekery a terče': 'Äxte und Zielscheiben',
  'Inštruktor a bezpečnostné poučenie': 'Trainer und Sicherheitseinweisung',
  'Turnaj a bodovanie': 'Turnier und Wertung',
  'Nápoj v cene': 'Ein Getränk inklusive',
  'Hádže sa v krytom priestore, takže počasie nerozhoduje. Minimálny vek 18 rokov, uzavretá obuv povinná.': 'Geworfen wird in einem überdachten Raum, das Wetter spielt also keine Rolle. Mindestalter 18 Jahre, geschlossene Schuhe erforderlich.',

  'Naučte sa natočiť pivo poriadne': 'Lernen Sie, Bier richtig zu zapfen',
  'Hodina za výčapom s človekom, ktorý to robí roky. Naučíte sa hladinku, šnyt aj mlieko, dozviete sa, prečo záleží na uhle pohára — a všetko, čo natočíte, aj vypijete.': 'Eine Stunde am Zapfhahn mit jemandem, der das seit Jahren macht. Sie lernen die drei klassischen Zapfarten, erfahren, warum der Winkel des Glases zählt — und trinken alles, was Sie zapfen.',
  'Školiteľ a výčap': 'Trainer und Zapfanlage',
  'Pivo, ktoré počas kurzu natočíte': 'Das Bier, das Sie im Kurs zapfen',
  'Poháre a príslušenstvo': 'Gläser und Zubehör',
  'Certifikát na záver': 'Zertifikat zum Abschluss',
  'Prebieha v podniku v centre Bratislavy. Vhodné aj ako doplnok k inej aktivite — bežne sa kombinuje s bicyklom.': 'Findet in einem Lokal im Zentrum von Bratislava statt. Auch als Ergänzung zu einer anderen Aktivität geeignet — meist kombiniert mit einer Radtour.',
}
};

// ---------------------------------------------------------------------------
// Runtime. Loaded in <head> so window.t() exists before any page script runs.
// ---------------------------------------------------------------------------
(() => {
  const KEY = 'fb-lang';
  const supported = ['sk', 'en', 'de'];
  const fromUrl = new URLSearchParams(location.search).get('lang');
  let lang = 'sk';
  try { lang = fromUrl || localStorage.getItem(KEY) || 'sk'; } catch { lang = fromUrl || 'sk'; }
  if (!supported.includes(lang)) lang = 'sk';
  if (fromUrl) { try { localStorage.setItem(KEY, lang); } catch {} }

  window.FB_LANG = lang;
  window.FB_LOCALE_TAG = window.FB_LOCALE[lang] || 'sk-SK';
  const dict = window.FB_I18N[lang] || null;

  // t('Pre {n} ľudí…', {n: 12}) — unknown keys fall through to the Slovak source
  window.t = (s, vars) => {
    let out = (dict && dict[s]) || s;
    if (vars) for (const k in vars) out = out.split('{' + k + '}').join(vars[k]);
    return out;
  };

  // Attributes worth translating; anything else is left alone.
  const ATTRS = ['placeholder', 'aria-label', 'title', 'alt', 'content'];
  const SKIP = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE']);

  window.translateDom = (root = document.body) => {
    if (!dict) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => SKIP.has(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const pending = [];
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const raw = n.nodeValue, key = raw.trim();
      if (!key || !dict[key]) continue;
      // keep the original leading/trailing whitespace so inline layout is unchanged
      pending.push([n, raw.replace(key, dict[key])]);
    }
    pending.forEach(([n, v]) => { n.nodeValue = v; });

    root.querySelectorAll('*').forEach(el => {
      ATTRS.forEach(a => {
        const v = el.getAttribute(a);
        if (v && dict[v.trim()]) el.setAttribute(a, dict[v.trim()]);
      });
    });
  };

  const apply = () => {
    document.documentElement.lang = lang;
    if (dict) {
      translateDom(document.body);
      const title = document.querySelector('title');
      if (title && dict[title.textContent.trim()]) title.textContent = dict[title.textContent.trim()];
    }
    // switcher: mark the current language, keep the others as plain links
    document.querySelectorAll('.langs a').forEach(a => {
      const code = a.textContent.trim().toLowerCase();
      if (!supported.includes(code)) return;
      a.setAttribute('href', '?lang=' + code);
      if (code === lang) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
      // store on click too: some contexts drop the query string on navigation
      a.addEventListener('click', () => { try { localStorage.setItem(KEY, code); } catch {} });
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
