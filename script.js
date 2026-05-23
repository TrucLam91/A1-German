// ════════════════════════════════════════
//  DEUTSCH A1 – script.js
// ════════════════════════════════════════

// ── TOPICS DATA ──
const T=[
{id:1,emoji:'👋',title:'Sich vorstellen',sub:'Greetings & Introductions',color:'#e74c3c',light:'#fdecea',
key:'Hallo! Ich heiße ___. Ich komme aus ___. Ich bin ___ Jahre alt.',ytId:'M7bJMFhcqcI',
vocab:[
{de:'der Name (-n)',vi:'name',ex:'Mein Name ist Linh.',cat:'1. Name 🏷️'},
{de:'der Vorname (-n)',vi:'first name',ex:'Mein Vorname ist Linh.',cat:'1. Name 🏷️'},
{de:'der Nachname (-n)',vi:'surname / last name',ex:'Mein Nachname ist Nguyen.',cat:'1. Name 🏷️'},
{de:'der Familienname (-n)',vi:'family name',ex:'Wie ist Ihr Familienname?',cat:'1. Name 🏷️'},
{de:'das Alter',vi:'age',ex:'Wie alt bist du?',cat:'2. Alter 🎂'},
{de:'der Geburtstag (-e)',vi:'birthday',ex:'Wann ist dein Geburtstag?',cat:'2. Alter 🎂'},
{de:'geboren',vi:'born',ex:'Ich bin 2000 geboren.',cat:'2. Alter 🎂'},
{de:'das Land (Länder)',vi:'country',ex:'Aus welchem Land kommst du?',cat:'3. Land / Herkunft 🌍'},
{de:'der Geburtsort (-e)',vi:'place of birth',ex:'Mein Geburtsort ist Hanoi.',cat:'3. Land / Herkunft 🌍'},
{de:'der Wohnort (-e)',vi:'place of residence',ex:'Mein Wohnort ist Berlin.',cat:'4. Wohnort / Adresse 🏠'},
{de:'die Adresse (-n)',vi:'address',ex:'Wie ist Ihre Adresse?',cat:'4. Wohnort / Adresse 🏠'},
{de:'die Straße (-n)',vi:'street',ex:'Ich wohne in der Hauptstraße.',cat:'4. Wohnort / Adresse 🏠'},
{de:'die Hausnummer (-n)',vi:'house number',ex:'Die Hausnummer ist 5.',cat:'4. Wohnort / Adresse 🏠'},
{de:'die Postleitzahl / PLZ',vi:'postal / zip code',ex:'Die PLZ ist 10115.',cat:'4. Wohnort / Adresse 🏠'},
{de:'wohnen / leben',vi:'to live / to reside',ex:'Ich wohne in Ho-Chi-Minh-Stadt.',cat:'4. Wohnort / Adresse 🏠'},
{de:'die Sprache (-n)',vi:'language',ex:'Welche Sprachen sprechen Sie?',cat:'5. Sprachen 🗣️'},
{de:'die Muttersprache (-n)',vi:'mother tongue',ex:'Meine Muttersprache ist Vietnamesisch.',cat:'5. Sprachen 🗣️'},
{de:'sprechen',vi:'to speak',ex:'Ich spreche Deutsch und Englisch.',cat:'5. Sprachen 🗣️'},
{de:'Deutsch',vi:'German (language)',ex:'Ich lerne Deutsch.',cat:'5. Sprachen 🗣️'},
{de:'Englisch',vi:'English (language)',ex:'Ich spreche Englisch.',cat:'5. Sprachen 🗣️'},
{de:'Vietnamesisch',vi:'Vietnamese',ex:'Meine Muttersprache ist Vietnamesisch.',cat:'5. Sprachen 🗣️'},
{de:'der Beruf (-e)',vi:'job / profession',ex:'Was sind Sie von Beruf?',cat:'6. Beruf 💼'},
{de:'arbeiten',vi:'to work',ex:'Ich arbeite in einem Büro.',cat:'6. Beruf 💼'},
{de:'studieren',vi:'to study (uni)',ex:'Ich studiere Informatik.',cat:'6. Beruf 💼'},
{de:'der Student / die Studentin',vi:'university student',ex:'Ich bin Student.',cat:'6. Beruf 💼'},
{de:'der Schüler / die Schülerin',vi:'school student',ex:'Ich bin Schüler.',cat:'6. Beruf 💼'},
{de:'der Familienstand',vi:'marital status',ex:'Wie ist Ihr Familienstand?',cat:'7. Familienstand 💍'},
{de:'ledig / Single',vi:'single',ex:'Ich bin ledig.',cat:'7. Familienstand 💍'},
{de:'verheiratet',vi:'married',ex:'Ich bin verheiratet.',cat:'7. Familienstand 💍'},
{de:'geschieden',vi:'divorced',ex:'Er ist geschieden.',cat:'7. Familienstand 💍'},
{de:'die Geschwister (PL)',vi:'siblings',ex:'Ich habe zwei Geschwister.',cat:'7. Familienstand 💍'},
{de:'das Kind (-er)',vi:'child / children',ex:'Ich habe ein Kind.',cat:'7. Familienstand 💍'},
{de:'das Hobby (-s)',vi:'hobby',ex:'Mein Hobby ist Lesen.',cat:'8. Hobbys ⚽'},
{de:'die Freizeit',vi:'free time',ex:'In meiner Freizeit lese ich.',cat:'8. Hobbys ⚽'},
{de:'schwimmen',vi:'to swim',ex:'Ich schwimme gern.',cat:'8. Hobbys ⚽'},
{de:'lesen',vi:'to read',ex:'Ich lese gern Bücher.',cat:'8. Hobbys ⚽'},
{de:'Musik hören',vi:'to listen to music',ex:'Ich höre gern Musik.',cat:'8. Hobbys ⚽'},
{de:'kochen',vi:'to cook',ex:'Ich koche gern.',cat:'8. Hobbys ⚽'},
{de:'reisen',vi:'to travel',ex:'Ich reise gern.',cat:'8. Hobbys ⚽'},
{de:'Fußball spielen',vi:'to play football',ex:'Ich spiele gern Fußball.',cat:'8. Hobbys ⚽'},
{de:'Gitarre spielen',vi:'to play guitar',ex:'Ich spiele gern Gitarre.',cat:'8. Hobbys ⚽'},
{de:'fernsehen',vi:'to watch TV',ex:'Ich sehe gern fern.',cat:'8. Hobbys ⚽'},
],
reading:{title:'Gespräch: Nicos erster Tag 🇩🇪',
text:'Nico: Hallo! Ich bin Nico. Ich komme aus Spanien.\nSofia: Hi! Ich heiße Sofia. Ich komme aus Russland. Wo wohnst du?\nNico: Ich wohne jetzt in München. Und du?\nSofia: Ich wohne in Hamburg. Wie alt bist du, Nico?\nNico: Ich bin 22 Jahre alt. Und du?\nSofia: Ich bin auch 22! Schön, dich kennenzulernen!\nNico: Schön, dich kennenzulernen, Sofia!',
qs:[{q:'Woher kommt Nico?',a:'Nico kommt aus Spanien.'},{q:'Wo wohnt Sofia?',a:'Sofia wohnt in Hamburg.'},{q:'Wie alt ist Nico?',a:'Nico ist 22 Jahre alt.'}]},
speaking:['Hallo! Ich heiße ___.','Ich komme aus ___.','Ich wohne in ___.','Ich bin ___ Jahre alt.','Schön, dich kennenzulernen!'],
speakGroups:[
{cat:'1. Name 🏷️',items:[{q:'Wie heißen Sie? / Wie heißt du?',a:'Ich heiße ___. / Mein Name ist ___.'},{q:'Wie ist Ihr/dein Name?',a:'Mein Name ist ___.'},{q:'Können Sie Ihren Namen buchstabieren?',a:'Ja, natürlich: ___.'}]},
{cat:'2. Alter 🎂',items:[{q:'Wie alt sind Sie? / Wie alt bist du?',a:'Ich bin ___ Jahre alt.'},{q:'Wann sind Sie geboren?',a:'Ich bin am ___ geboren.'},{q:'Wann hast du Geburtstag?',a:'Mein Geburtstag ist am ___.'}]},
{cat:'3. Herkunft 🌍',items:[{q:'Woher kommen Sie? / Woher kommst du?',a:'Ich komme aus ___.'}]},
{cat:'4. Wohnort 🏠',items:[{q:'Wo wohnen Sie? / Wo wohnst du?',a:'Ich wohne in ___.'},{q:'Wie ist Ihre Adresse / Telefonnummer?',a:'Meine Adresse ist ___. Meine Nummer ist ___.'}]},
{cat:'5. Sprachen 🗣️',items:[{q:'Welche Sprachen sprechen Sie?',a:'Ich spreche ___ und ein bisschen Deutsch.'}]},
{cat:'6. Beruf 💼',items:[{q:'Was sind Sie von Beruf?',a:'Ich bin ___. / Ich arbeite als ___.'},{q:'Arbeitest oder studierst du?',a:'Ich studiere ___. / Ich arbeite bei ___.'}]},
{cat:'7. Familienstand 💍',items:[{q:'Wie ist Ihr Familienstand?',a:'Ich bin ledig / verheiratet / geschieden.'},{q:'Hast du Kinder / Geschwister?',a:'Ja, ich habe ___ Kinder / Geschwister.'}]},
{cat:'8. Hobbys ⚽',items:[{q:'Was sind Ihre Hobbys?',a:'Mein Hobby ist ___.'},{q:'Was machst du in deiner Freizeit?',a:'In meiner Freizeit ___ ich gern.'}]},
],
writing:{task:'Schreib 3–5 Sätze über dich! ✍️',tmpl:'Ich heiße ___. Ich komme aus ___. Ich wohne in ___. Ich bin ___ Jahre alt.',ex:'Ich heiße Minh. Ich komme aus Vietnam. Ich wohne in Ho-Chi-Minh-Stadt. Ich bin 24 Jahre alt. Ich bin Student.'},
quiz:[
{q:'What is the German word for "Hello"?',o:['Danke','Hallo','Bitte','Tschüss'],a:1},
{q:'"Wie heißt du?" asks for your ___.',o:['age','name','job','hometown'],a:1},
{q:'Fill in: Ich ___ aus Vietnam.',o:['bin','heiße','komme','wohne'],a:2},
{q:'What does "Auf Wiedersehen" mean?',o:['Hello','Goodbye (formal)','Thank you','Please'],a:1},
{q:'How do you ask for someone\'s age?',o:['Woher kommst du?','Wie alt bist du?','Wie heißt du?','Wo wohnst du?'],a:1},
]},

{id:2,emoji:'👨‍👩‍👧‍👦',title:'Familie',sub:'Family',color:'#e67e22',light:'#fdf5ec',
key:'Das ist meine Familie. Mein Vater heißt Klaus. Meine Mutter heißt Petra.',ytId:'gMxLXBcCY_c',
vocab:[
{de:'die Familie (-n)',vi:'family',ex:'Meine Familie ist groß.'},
{de:'der Vater (Väter)',vi:'father',ex:'Mein Vater ist Arzt.'},
{de:'die Mutter (Mütter)',vi:'mother',ex:'Meine Mutter ist Lehrerin.'},
{de:'der Bruder (Brüder)',vi:'brother',ex:'Ich habe einen Bruder.'},
{de:'die Schwester (-n)',vi:'sister',ex:'Meine Schwester heißt Lisa.'},
{de:'der Großvater',vi:'grandfather',ex:'Mein Großvater ist 75 Jahre alt.'},
{de:'die Großmutter',vi:'grandmother',ex:'Meine Großmutter kocht gut.'},
{de:'das Kind (-er)',vi:'child/children',ex:'Sie haben zwei Kinder.'},
{de:'verheiratet',vi:'married',ex:'Meine Eltern sind verheiratet.'},
{de:'ledig',vi:'single',ex:'Ich bin ledig.'},
],
reading:{title:'Annas Familie 👨‍👩‍👧',
text:'Das ist meine Familie. Mein Vater heißt Thomas und meine Mutter heißt Sabine. Ich habe eine Schwester. Sie heißt Laura und ist 16 Jahre alt. Mein Bruder heißt Max. Er ist 20 Jahre alt und studiert in Berlin. Meine Großeltern wohnen in Bayern. Meine Familie ist sehr groß und lustig!',
qs:[{q:'Wie heißt Annas Mutter?',a:'Annas Mutter heißt Sabine.'},{q:'Wie alt ist Laura?',a:'Laura ist 16 Jahre alt.'},{q:'Wo studiert Max?',a:'Max studiert in Berlin.'}]},
speaking:['Das ist mein Vater. Er heißt ___.','Meine Mutter heißt ___.','Ich habe ___ Geschwister.','Meine Familie ist klein/groß.','Meine Eltern wohnen in ___.'],
writing:{task:'Beschreib deine Familie! ✍️',tmpl:'Mein Vater heißt ___. Meine Mutter heißt ___. Ich habe ___ Bruder/Schwester.',ex:'Mein Vater heißt Minh. Meine Mutter heißt Lan. Ich habe eine Schwester. Sie heißt Hoa und ist 19 Jahre alt.'},
quiz:[
{q:'What is the German word for "mother"?',o:['Vater','Bruder','Mutter','Schwester'],a:2},
{q:'Possessive pronoun (masculine): ___ Vater',o:['mein','meine','meinen','meiner'],a:0},
{q:'Possessive pronoun (feminine): ___ Mutter',o:['mein','meine','meinen','meiner'],a:1},
{q:'What does "Geschwister" mean?',o:['grandparents','parents','siblings','children'],a:2},
{q:'He is not married. He is ___.',o:['verheiratet','ledig','groß','jung'],a:1},
]},

{id:3,emoji:'🔢',title:'Zahlen & Datum',sub:'Numbers & Dates',color:'#27ae60',light:'#edfaf1',
key:'Heute ist der 3. März. Ich bin am 15. August geboren.',ytId:'lVW4a_IVGAo',
vocab:[
{de:'eins / eine',vi:'one',ex:'Ich habe eine Katze.'},
{de:'zehn',vi:'ten',ex:'Es ist zehn Uhr.'},
{de:'zwanzig',vi:'twenty',ex:'Er ist zwanzig Jahre alt.'},
{de:'hundert',vi:'one hundred',ex:'Das kostet hundert Euro.'},
{de:'der Montag',vi:'Monday',ex:'Am Montag arbeite ich.'},
{de:'der Freitag',vi:'Friday',ex:'Am Freitag gehe ich aus.'},
{de:'das Wochenende',vi:'weekend',ex:'Am Wochenende schlafe ich lang.'},
{de:'der Monat (-e)',vi:'month',ex:'Es gibt zwölf Monate.'},
{de:'der Geburtstag (-e)',vi:'birthday',ex:'Wann ist dein Geburtstag?'},
{de:'das Jahr (-e)',vi:'year',ex:'Das Jahr hat 365 Tage.'},
],
reading:{title:'Sophias Geburtstag 🎂',
text:'Heute ist der 20. April. Das ist Sophias Geburtstag! Sie wird 25 Jahre alt. Die Party ist am Samstag, dem 22. April, um 19 Uhr. Sophia lädt viele Freunde ein. Es kommen 15 Personen. Sie kauft 3 Kuchen und 2 Liter Saft. Was für ein toller Tag!',
qs:[{q:'Wann ist Sophias Geburtstag?',a:'Sophias Geburtstag ist am 20. April.'},{q:'Wie alt wird Sophia?',a:'Sophia wird 25 Jahre alt.'},{q:'Wie viele Personen kommen?',a:'Es kommen 15 Personen.'}]},
speaking:['Heute ist der ___ (Datum).','Ich bin am ___ geboren.','Es ist ___ Uhr.','Das kostet ___ Euro.','Meine Telefonnummer ist ___.'],
writing:{task:'Schreib dein Geburtsdatum! ✍️',tmpl:'Ich bin am ___ geboren. Ich wohne in ___. Meine Telefonnummer ist ___.',ex:'Ich bin am 5. März 2000 geboren. Ich wohne in Ho-Chi-Minh-Stadt. Meine Telefonnummer ist 0901234567.'},
quiz:[
{q:'How much is 15 + 7?',o:['22','21','23','20'],a:0},
{q:'Which day comes after Wednesday?',o:['Dienstag','Donnerstag','Freitag','Montag'],a:1},
{q:'Which month comes after July?',o:['Juni','August','September','Oktober'],a:1},
{q:'How do you write "20" in German?',o:['zehn','zwanzig','dreißig','zwölf'],a:1},
{q:'What does "Geburtstag" mean?',o:['birthday','date','Monday','June'],a:0},
]},

{id:4,emoji:'🍕',title:'Essen & Trinken',sub:'Food & Drinks',color:'#f39c12',light:'#fefbf0',
key:'Ich möchte einen Kaffee, bitte. Was kostet das Schnitzel?',ytId:'KLkGurBLb4Q',
vocab:[
{de:'das Brot (-e)',vi:'bread',ex:'Ich esse Brot zum Frühstück.'},
{de:'der Kaffee (-s)',vi:'coffee',ex:'Ich trinke gern Kaffee.'},
{de:'das Wasser (-)',vi:'water',ex:'Ein Wasser, bitte!'},
{de:'das Fleisch',vi:'meat',ex:'Ich esse kein Fleisch.'},
{de:'das Gemüse',vi:'vegetables',ex:'Ich esse viel Gemüse.'},
{de:'die Speisekarte (-n)',vi:'menu',ex:'Die Speisekarte, bitte!'},
{de:'möchten',vi:'to want (polite)',ex:'Ich möchte ein Schnitzel.'},
{de:'kosten',vi:'to cost',ex:'Was kostet das?'},
{de:'lecker',vi:'delicious/tasty',ex:'Das Essen ist sehr lecker!'},
{de:'die Rechnung (-en)',vi:'bill/check',ex:'Die Rechnung, bitte!'},
],
reading:{title:'Im Restaurant 🍽️',
text:'Kellner: Guten Tag! Was möchten Sie trinken?\nKunde: Ich möchte ein Wasser, bitte. Was empfehlen Sie?\nKellner: Das Schnitzel mit Salat ist sehr gut. Es kostet 14 Euro.\nKunde: Prima! Ich nehme das Schnitzel. Meine Frau möchte die Suppe.\nKellner: Die Suppe kostet 8 Euro. Möchten Sie auch Dessert?\nKunde: Nein, danke. Nur die Rechnung, bitte.\nKellner: Zusammen macht das 22 Euro.',
qs:[{q:'Was kostet das Schnitzel?',a:'Das Schnitzel kostet 14 Euro.'},{q:'Was möchte die Frau essen?',a:'Die Frau möchte die Suppe.'},{q:'Wie viel kosten beide zusammen?',a:'Zusammen kostet es 22 Euro.'}]},
speaking:['Ich möchte ___, bitte.','Was kostet ___?','Das schmeckt sehr lecker!','Die Rechnung, bitte!','Haben Sie vegetarische Gerichte?'],
writing:{task:'Was isst du zum Frühstück? ✍️',tmpl:'Zum Frühstück esse ich ___. Ich trinke ___. Das ist sehr lecker!',ex:'Zum Frühstück esse ich Brot mit Butter und Marmelade. Ich trinke Kaffee mit Milch. Das ist sehr lecker!'},
quiz:[
{q:'Ich ___ ein Wasser, bitte. (politely)',o:['will','möchte','nehme','esse'],a:1},
{q:'What does "lecker" mean?',o:['expensive','delicious','cheap','full'],a:1},
{q:'"Die Rechnung, bitte!" – When do you say this?',o:['When ordering','When paying','When arriving','When reading the menu'],a:1},
{q:'"das Brot" – which article type?',o:['der (masculine)','die (feminine)','das (neuter)','die (plural)'],a:2},
{q:'Which drink is this? ☕',o:['Wasser','Saft','Kaffee','Milch'],a:2},
]},

{id:5,emoji:'🏠',title:'Wohnen',sub:'Housing',color:'#1abc9c',light:'#edfaf7',
key:'Ich wohne in einer Wohnung. Sie hat 3 Zimmer, eine Küche und ein Bad.',ytId:'g1AQMJB0nRw',
vocab:[
{de:'die Wohnung (-en)',vi:'apartment',ex:'Meine Wohnung ist groß.'},
{de:'das Haus (Häuser)',vi:'house',ex:'Wir wohnen in einem Haus.'},
{de:'das Zimmer (-)',vi:'room',ex:'Die Wohnung hat 3 Zimmer.'},
{de:'die Küche (-n)',vi:'kitchen',ex:'Die Küche ist modern.'},
{de:'das Badezimmer',vi:'bathroom',ex:'Das Bad ist klein aber schön.'},
{de:'das Wohnzimmer',vi:'living room',ex:'Im Wohnzimmer steht ein Sofa.'},
{de:'das Schlafzimmer',vi:'bedroom',ex:'Mein Schlafzimmer ist ruhig.'},
{de:'groß / klein',vi:'big / small',ex:'Die Wohnung ist groß.'},
{de:'die Miete (-n)',vi:'rent',ex:'Die Miete ist 800 Euro.'},
{de:'im Erdgeschoss',vi:'on the ground floor',ex:'Ich wohne im Erdgeschoss.'},
],
reading:{title:'Luises neue Wohnung 🏡',
text:'Luise hat eine neue Wohnung in München. Die Wohnung ist im 2. Stock. Sie hat drei Zimmer: ein Schlafzimmer, ein Wohnzimmer und ein Arbeitszimmer. Die Küche und das Bad sind modern. Die Wohnung ist 65 Quadratmeter groß. Die Miete ist 1.200 Euro pro Monat. Das ist teuer, aber die Wohnung ist sehr schön! Die Nachbarn sind auch nett.',
qs:[{q:'Im welchen Stock ist Luises Wohnung?',a:'Die Wohnung ist im 2. Stock.'},{q:'Wie viel Quadratmeter hat die Wohnung?',a:'Die Wohnung hat 65 Quadratmeter.'},{q:'Wie teuer ist die Miete?',a:'Die Miete ist 1.200 Euro pro Monat.'}]},
speaking:['Ich wohne in einer ___.','Die Wohnung hat ___ Zimmer.','Die Miete kostet ___ Euro.','Das Zimmer ist groß/klein.','Ich wohne im ___ Stock.'],
writing:{task:'Beschreib deine Wohnung! ✍️',tmpl:'Ich wohne in ___. Meine Wohnung hat ___. Es gibt ___.',ex:'Ich wohne in einer Wohnung in Ho-Chi-Minh-Stadt. Meine Wohnung hat 2 Zimmer, eine Küche und ein Bad. Es gibt eine große Terrasse.'},
quiz:[
{q:'Where do you cook? In the ___.',o:['Schlafzimmer','Küche','Badezimmer','Wohnzimmer'],a:1},
{q:'What does "die Miete" mean?',o:['electricity bill','rent','food bill','internet bill'],a:1},
{q:'You can sleep in the ___.',o:['Wohnzimmer','Küche','Schlafzimmer','Bad'],a:2},
{q:'What is the opposite of "groß"?',o:['schön','teuer','klein','neu'],a:2},
{q:'Ich wohne ___ 2. Stock.',o:['in','im','an','auf'],a:1},
]},

{id:6,emoji:'⏰',title:'Alltag & Uhrzeiten',sub:'Daily Life & Time',color:'#3498db',light:'#eaf4fd',
key:'Ich stehe um 7 Uhr auf. Um 8 Uhr frühstücke ich.',ytId:'XiKSGsQp7x8',
vocab:[
{de:'aufstehen',vi:'to get up',ex:'Ich stehe um 6 Uhr auf.'},
{de:'frühstücken',vi:'to have breakfast',ex:'Ich frühstücke um 7 Uhr.'},
{de:'zur Arbeit gehen',vi:'to go to work',ex:'Um 8 Uhr gehe ich zur Arbeit.'},
{de:'zu Mittag essen',vi:'to have lunch',ex:'Ich esse um 12 Uhr zu Mittag.'},
{de:'schlafen gehen',vi:'to go to sleep',ex:'Ich gehe um 22 Uhr schlafen.'},
{de:'um ___ Uhr',vi:'at ___ o\'clock',ex:'Um wie viel Uhr kommst du?'},
{de:'Viertel nach',vi:'quarter past',ex:'Es ist Viertel nach drei.'},
{de:'halb',vi:'half (30 min before)',ex:'Es ist halb acht (=7:30).'},
{de:'der Morgen',vi:'morning',ex:'Am Morgen trinke ich Kaffee.'},
{de:'der Abend (-e)',vi:'evening',ex:'Am Abend lese ich ein Buch.'},
],
reading:{title:'Marias Tagesablauf 📅',
text:'Maria hat einen festen Tagesablauf. Um 6:30 Uhr steht sie auf. Um 7:00 Uhr frühstückt sie – sie trinkt Kaffee und isst Brot. Um 8:00 Uhr fährt sie zur Arbeit. Sie arbeitet bis 17:00 Uhr. Um 18:00 Uhr macht sie Sport. Am Abend kocht sie und isst mit ihrem Mann. Um 22:30 Uhr geht sie schlafen. Am Wochenende schläft sie länger!',
qs:[{q:'Wann steht Maria auf?',a:'Maria steht um 6:30 Uhr auf.'},{q:'Bis wann arbeitet Maria?',a:'Maria arbeitet bis 17:00 Uhr.'},{q:'Was macht sie um 18 Uhr?',a:'Um 18 Uhr macht sie Sport.'}]},
speaking:['Ich stehe um ___ Uhr auf.','Um ___ Uhr frühstücke ich.','Wann kommst du?','Es ist ___ Uhr.','Was machst du am Abend?'],
writing:{task:'Beschreib deinen Tagesablauf! ✍️',tmpl:'Um ___ Uhr stehe ich auf. Dann frühstücke ich. Um ___ Uhr ___. Am Abend ___.',ex:'Um 6 Uhr stehe ich auf. Dann frühstücke ich. Um 8 Uhr gehe ich zur Arbeit. Am Abend koche ich und schaue fern.'},
quiz:[
{q:'It\'s 7:30. In German:',o:['Es ist halb sieben.','Es ist halb acht.','Es ist Viertel vor acht.','Es ist sieben Uhr.'],a:1},
{q:'Ich ___ um 6 Uhr auf. (aufstehen)',o:['aufstehe','stehe auf','stehe aufstehe','aufstehen'],a:1},
{q:'What does "Tagesablauf" mean?',o:['timetable','daily routine','day off','weekend'],a:1},
{q:'Viertel nach drei = ___',o:['3:14','3:15','2:45','3:45'],a:1},
{q:'What is the opposite of "aufstehen"?',o:['schlafen gehen','frühstücken','arbeiten','kochen'],a:0},
]},

{id:7,emoji:'⚽',title:'Freizeit & Hobbys',sub:'Leisure & Hobbies',color:'#9b59b6',light:'#f5f0fb',
key:'In meiner Freizeit spiele ich Fußball und lese gern Bücher.',ytId:'IFRYgnFZqQ8',
vocab:[
{de:'lesen',vi:'to read',ex:'Ich lese gern Bücher.'},
{de:'Musik hören',vi:'to listen to music',ex:'Ich höre gern Musik.'},
{de:'Sport treiben',vi:'to do sport',ex:'Ich treibe gern Sport.'},
{de:'kochen',vi:'to cook',ex:'Ich koche am Wochenende.'},
{de:'reisen',vi:'to travel',ex:'Ich reise gern.'},
{de:'Filme sehen',vi:'to watch films',ex:'Ich sehe gern Filme.'},
{de:'gern',vi:'to like doing sth',ex:'Ich tanze gern.'},
{de:'nicht gern',vi:'to not like doing sth',ex:'Ich koche nicht gern.'},
{de:'können',vi:'can / to be able to',ex:'Ich kann Gitarre spielen.'},
{de:'die Freizeit',vi:'free time',ex:'In meiner Freizeit lese ich.'},
],
reading:{title:'Pauls Hobbys 🎸',
text:'Paul hat viele Hobbys. Er spielt gern Gitarre und Fußball. Am Wochenende geht er mit Freunden ins Kino. Er sieht gern Actionfilme. Paul kann auch kochen – er kocht sehr gut! Er macht auch gern Fotos. Sein Lieblingshobbys ist aber Reisen. Er war schon in 15 Ländern! Was macht Paul nicht gern? Er liest nicht gern und er tanzt nicht gern.',
qs:[{q:'Was spielt Paul gern?',a:'Paul spielt gern Gitarre und Fußball.'},{q:'Was ist Pauls Lieblingshobbys?',a:'Pauls Lieblingshobbys ist Reisen.'},{q:'Was macht Paul nicht gern?',a:'Paul liest und tanzt nicht gern.'}]},
speaking:['In meiner Freizeit ___ ich gern.','Ich ___ gern.','Ich kann ___ spielen.','Was machst du in deiner Freizeit?','Ich mag ___ sehr.'],
writing:{task:'Was sind deine Hobbys? ✍️',tmpl:'In meiner Freizeit ___ ich gern. Ich kann auch ___. Am Wochenende ___.',ex:'In meiner Freizeit höre ich gern Musik und lese Bücher. Ich kann auch Volleyball spielen. Am Wochenende koche ich für meine Familie.'},
quiz:[
{q:'Ich lese ___ Bücher. (I like reading books)',o:['nicht','gern','kein','sehr'],a:1},
{q:'Ich ___ Gitarre spielen. (I can play guitar)',o:['möchte','will','kann','muss'],a:2},
{q:'What does "Freizeit" mean?',o:['study time','free time','work time','weekend'],a:1},
{q:'What is the opposite of "gern"?',o:['sehr gern','nicht gern','auch gern','immer gern'],a:1},
{q:'Which is NOT a hobby?',o:['Kochen','Reisen','Lesen','Schlafen gehen'],a:3},
]},

{id:8,emoji:'🛒',title:'Einkaufen',sub:'Shopping',color:'#e91e63',light:'#fdf0f5',
key:'Was kostet das? – Das kostet 5 Euro. Ich nehme das Hemd in Größe M.',ytId:'Z1N-BKZPQ6I',
vocab:[
{de:'der Supermarkt (-märkte)',vi:'supermarket',ex:'Ich gehe in den Supermarkt.'},
{de:'kaufen',vi:'to buy',ex:'Ich kaufe Obst und Gemüse.'},
{de:'kosten',vi:'to cost',ex:'Wie viel kostet das?'},
{de:'die Kasse (-n)',vi:'checkout / till',ex:'Ich bezahle an der Kasse.'},
{de:'die Größe (-n)',vi:'size',ex:'Welche Größe haben Sie?'},
{de:'teuer / billig',vi:'expensive / cheap',ex:'Das ist zu teuer!'},
{de:'bezahlen',vi:'to pay',ex:'Ich bezahle mit Karte.'},
{de:'die Tüte (-n)',vi:'shopping bag',ex:'Brauchen Sie eine Tüte?'},
{de:'das Sonderangebot (-e)',vi:'special offer',ex:'Heute gibt es Sonderangebote.'},
{de:'der Kassenbon (-s)',vi:'receipt',ex:'Hier ist Ihr Kassenbon.'},
],
reading:{title:'Im Kaufhaus 🏬',
text:'Tom kauft ein Hemd. Er geht in die Kleiderabteilung.\nVerkäuferin: Kann ich Ihnen helfen?\nTom: Ja, gern. Ich suche ein Hemd.\nVerkäuferin: Welche Größe?\nTom: Größe M, bitte. Und in blau?\nVerkäuferin: Ja, wir haben das hier. Es kostet 39 Euro.\nTom: Das ist ein bisschen teuer. Haben Sie etwas Günstigeres?\nVerkäuferin: Dieses hier kostet nur 25 Euro. Es ist im Sonderangebot!\nTom: Super! Das nehme ich. Wo kann ich bezahlen?\nVerkäuferin: Die Kasse ist dort drüben.',
qs:[{q:'Was sucht Tom?',a:'Tom sucht ein Hemd.'},{q:'Was kostet das erste Hemd?',a:'Das erste Hemd kostet 39 Euro.'},{q:'Was kostet das Hemd im Sonderangebot?',a:'Das Hemd im Sonderangebot kostet 25 Euro.'}]},
speaking:['Was kostet ___?','Ich nehme ___.','Haben Sie ___ in Größe M?','Das ist zu teuer!','Ich bezahle mit Karte/bar.'],
writing:{task:'Schreib einen Einkaufszettel! ✍️',tmpl:'Ich brauche: ___, ___, ___. Das kostet zusammen ca. ___ Euro.',ex:'Ich brauche: 1 kg Äpfel (2 Euro), 500g Käse (4 Euro), 1 Brot (2,50 Euro). Das kostet zusammen ca. 8,50 Euro.'},
quiz:[
{q:'Wie viel ___ das Hemd?',o:['ist','hat','kostet','macht'],a:2},
{q:'Ich bezahle ___ Karte.',o:['mit','mit der','an','bei'],a:0},
{q:'What is the opposite of "teuer"?',o:['groß','billig','neu','schön'],a:1},
{q:'What does "Sonderangebot" mean?',o:['special offer','special size','new item','old item'],a:0},
{q:'Accusative: Ich kaufe ___ Apfel.',o:['der','die','das','den'],a:3},
]},

{id:9,emoji:'🚂',title:'Unterwegs',sub:'Getting Around',color:'#00bcd4',light:'#e8f9fb',
key:'Wie komme ich zum Bahnhof? – Fahren Sie geradeaus, dann links.',ytId:'4cBfQiXfWkk',
vocab:[
{de:'der Bahnhof (-höfe)',vi:'train station',ex:'Der Bahnhof ist in der Stadtmitte.'},
{de:'der Zug (Züge)',vi:'train',ex:'Der Zug fährt um 9 Uhr ab.'},
{de:'der Bus (-se)',vi:'bus',ex:'Ich fahre mit dem Bus.'},
{de:'das Ticket (-s)',vi:'ticket',ex:'Ich kaufe ein Ticket.'},
{de:'links / rechts',vi:'left / right',ex:'Biegen Sie links ab!'},
{de:'geradeaus',vi:'straight ahead',ex:'Fahren Sie geradeaus.'},
{de:'abbiegen',vi:'to turn',ex:'Hier links abbiegen!'},
{de:'die Haltestelle (-n)',vi:'stop / halt',ex:'Die Haltestelle ist um die Ecke.'},
{de:'der Fahrplan (-pläne)',vi:'timetable',ex:'Wo ist der Fahrplan?'},
{de:'ankommen',vi:'to arrive',ex:'Wir kommen um 15 Uhr an.'},
],
reading:{title:'Wie komme ich dahin? 🗺️',
text:'Tourist: Entschuldigung, wie komme ich zum Hauptbahnhof?\nPassant: Gehen Sie hier geradeaus, dann biegen Sie an der Ampel links ab. Dann sehen Sie schon den Bahnhof.\nTourist: Ist es weit?\nPassant: Nein, etwa 10 Minuten zu Fuß. Oder Sie nehmen die U-Bahn, Linie 3.\nTourist: Und wo ist die U-Bahn-Haltestelle?\nPassant: Hier, 50 Meter auf der rechten Seite.\nTourist: Vielen Dank!\nPassant: Bitte sehr!',
qs:[{q:'Wie weit ist der Bahnhof zu Fuß?',a:'Der Bahnhof ist etwa 10 Minuten zu Fuß entfernt.'},{q:'Welche U-Bahn-Linie kann man nehmen?',a:'Man kann die U-Bahn Linie 3 nehmen.'},{q:'Wohin soll der Tourist an der Ampel?',a:'Er soll links abbiegen.'}]},
speaking:['Wie komme ich zum ___?','Fahren Sie geradeaus.','Biegen Sie links/rechts ab.','Ist es weit?','Eine Fahrkarte nach ___, bitte.'],
writing:{task:'Beschreib den Weg zur Arbeit/Schule! ✍️',tmpl:'Von meinem Haus fahre/gehe ich ___. Dann ___. Nach ___ Minuten bin ich am Ziel.',ex:'Von meinem Haus fahre ich mit dem Bus. Ich steige an der Haltestelle Innenstadt aus. Dann gehe ich 5 Minuten zu Fuß. Nach 30 Minuten bin ich am Ziel.'},
quiz:[
{q:'Wie ___ ich zum Bahnhof?',o:['fahre','komme','gehe','laufe'],a:1},
{q:'Ich fahre ___ dem Zug.',o:['mit','in','an','auf'],a:0},
{q:'What does "geradeaus" mean?',o:['turn left','turn right','straight ahead','turn back'],a:2},
{q:'Der Zug ___ um 9 Uhr ab. (abfahren)',o:['fahrt','fährt','abfährt','abfahrt'],a:1},
{q:'Entschuldigung, ___ Sie mir helfen?',o:['können','müssen','sollen','dürfen'],a:0},
]},

{id:10,emoji:'🏥',title:'Gesundheit',sub:'Health',color:'#ff5722',light:'#fff3f0',
key:'Ich habe Kopfschmerzen. Ich muss zum Arzt gehen.',ytId:'6MQiDEt-eB4',
vocab:[
{de:'der Arzt / die Ärztin',vi:'doctor',ex:'Ich gehe zum Arzt.'},
{de:'das Krankenhaus',vi:'hospital',ex:'Sie ist im Krankenhaus.'},
{de:'Kopfschmerzen haben',vi:'to have a headache',ex:'Ich habe Kopfschmerzen.'},
{de:'krank',vi:'sick / ill',ex:'Ich bin krank und bleibe zu Hause.'},
{de:'gesund',vi:'healthy',ex:'Ich bin wieder gesund!'},
{de:'das Fieber',vi:'fever',ex:'Sie hat hohes Fieber.'},
{de:'die Tablette (-n)',vi:'tablet / pill',ex:'Nehmen Sie 3 Tabletten täglich.'},
{de:'wehtun',vi:'to hurt',ex:'Mein Bauch tut weh.'},
{de:'müssen',vi:'must / to have to',ex:'Ich muss zum Arzt gehen.'},
{de:'der Termin (-e)',vi:'appointment',ex:'Ich brauche einen Arzttermin.'},
],
reading:{title:'Beim Arzt 🩺',
text:'Arzt: Guten Tag! Was fehlt Ihnen?\nPatient: Ich fühle mich nicht gut. Ich habe Kopfschmerzen und Fieber.\nArzt: Seit wann?\nPatient: Seit gestern. Ich habe auch Halsschmerzen.\nArzt: Öffnen Sie bitte den Mund. Ja, der Hals ist rot. Wie hoch ist das Fieber?\nPatient: 38,5 Grad.\nArzt: Ich schreibe Ihnen ein Rezept. Nehmen Sie 3x täglich eine Tablette!\nPatient: Muss ich ins Krankenhaus?\nArzt: Nein. Aber bleiben Sie zu Hause.',
qs:[{q:'Was hat der Patient?',a:'Der Patient hat Kopfschmerzen, Fieber und Halsschmerzen.'},{q:'Wie hoch ist das Fieber?',a:'Das Fieber ist 38,5 Grad.'},{q:'Was soll der Patient machen?',a:'Er soll Tabletten nehmen und zu Hause bleiben.'}]},
speaking:['Ich habe ___schmerzen.','Mein/Meine ___ tut weh.','Ich bin krank.','Ich brauche einen Arzttermin.','Seit wann haben Sie Schmerzen?'],
writing:{task:'Du bist krank – schreib eine Krankmeldung! ✍️',tmpl:'Ich bin leider krank. Ich habe ___. Der Arzt sagt, ich muss ___. Ich komme am ___ wieder.',ex:'Ich bin leider krank. Ich habe Fieber und Kopfschmerzen. Der Arzt sagt, ich muss zu Hause bleiben. Ich komme am Montag wieder.'},
quiz:[
{q:'My head hurts = Ich habe ___.',o:['Bauchschmerzen','Halsschmerzen','Kopfschmerzen','Fieber'],a:2},
{q:'Ich ___ zum Arzt gehen. (obligation)',o:['kann','möchte','muss','darf'],a:2},
{q:'What is the first thing to do at the doctor?',o:['Tabletten kaufen','Einen Termin machen','Ins Krankenhaus gehen','Nach Hause gehen'],a:1},
{q:'What is the opposite of "krank"?',o:['alt','müde','gesund','jung'],a:2},
{q:'Seit ___ bin ich krank.',o:['wann','wie lange','gestern','morgen'],a:2},
]},
];

// ── GRAMMAR DATA ──
const G=[
{id:1,emoji:'🔤',title:'Artikel: der, die, das',sub:'Definite articles',color:'#e74c3c',
explain:'Every German noun has one of 3 genders. You must learn the article together with the noun!',
rules:[
{r:'der (masculine)',ex:['der Mann','der Tisch','der Kaffee','der Hund'],tip:'Days of the week, months, seasons → usually der'},
{r:'die (feminine)',ex:['die Frau','die Blume','die Stadt','die Schule'],tip:'Endings -ung, -heit, -keit, -tion → usually die'},
{r:'das (neuter)',ex:['das Kind','das Buch','das Auto','das Haus'],tip:'Endings -chen, -lein, -um → usually das'},
],
ex:[
{q:'___ Haus ist groß. (neuter)',o:['Der','Die','Das','Ein'],a:2},
{q:'___ Frau ist jung.',o:['Der','Die','Das','Ein'],a:1},
{q:'___ Mann arbeitet viel.',o:['Der','Die','Das','Ein'],a:0},
{q:'___ Kind spielt im Park.',o:['Der','Die','Das','Ein'],a:2},
{q:'___ Stadt ist schön.',o:['Der','Die','Das','Eine'],a:3},
]},
{id:2,emoji:'🏃',title:'sein & haben',sub:'Most important verb conjugations',color:'#3498db',
explain:'sein (to be) and haben (to have) are the 2 most important verbs. You must learn them by heart!',
rules:[
{r:'sein – present tense',ex:['ich bin','du bist','er/sie/es ist','wir sind','ihr seid','sie/Sie sind'],tip:'sein + adjective: Ich bin müde. | sein + noun: Er ist Arzt.'},
{r:'haben – present tense',ex:['ich habe','du hast','er/sie/es hat','wir haben','ihr habt','sie/Sie haben'],tip:'haben + noun: Ich habe ein Auto.'},
],
ex:[
{q:'Ich ___ Student. (sein)',o:['bin','ist','sind','seid'],a:0},
{q:'Er ___ zwei Kinder. (haben)',o:['habe','haben','hat','habt'],a:2},
{q:'Wir ___ müde. (sein)',o:['bin','sind','ist','seid'],a:1},
{q:'Ihr ___ ein schönes Haus. (haben)',o:['haben','hat','hast','habt'],a:3},
{q:'Sie (they) ___ Schüler. (sein)',o:['bist','ist','sind','seid'],a:2},
]},
{id:3,emoji:'✂️',title:'Trennbare Verben',sub:'Separable verbs',color:'#27ae60',
explain:'Many verbs have a prefix that splits off and moves to the END of the sentence!',
rules:[
{r:'Structure: prefix splits to end of sentence',ex:['aufstehen → Ich stehe um 7 Uhr auf.','anrufen → Er ruft seine Mutter an.','einkaufen → Wir kaufen im Supermarkt ein.','fernsehen → Sie sieht abends fern.'],tip:'Common prefixes: auf-, an-, ein-, aus-, mit-, vor-, ab-'},
],
ex:[
{q:'Ich ___ um 6 Uhr ___. (aufstehen)',o:['aufstehe / –','stehe / auf','stehe / aufstehen','stehe auf / –'],a:1},
{q:'Er ___ seine Freundin ___. (anrufen)',o:['anruft / –','ruft / an','ruf / an','anruf / –'],a:1},
{q:'Wir ___ heute im Supermarkt ___. (einkaufen)',o:['einkaufen / –','kaufen / einkaufen','kaufen / ein','kaufe ein / –'],a:2},
{q:'Sie ___ abends gern ___. (fernsehen)',o:['fernsieht / –','sieht / fern','sieht fern / –','fernsiehst / –'],a:1},
{q:'Das Flugzeug ___ um 10 Uhr ___. (abfliegen)',o:['fliegt / ab','abfliegt / –','fliegt abfliegen / –','ab / fliegt'],a:0},
]},
{id:4,emoji:'📌',title:'Nominativ & Akkusativ',sub:'Case 1 & Case 4',color:'#9b59b6',
explain:'Nominativ = subject. Akkusativ = direct object. NOTE: der → den in Akkusativ!',
rules:[
{r:'Nominativ (subject) – Wer?',ex:['Der Mann kauft. (der → der)','Die Frau liest. (die → die)','Das Kind spielt. (das → das)'],tip:'Question: Wer? (Who?)'},
{r:'Akkusativ (direct object) – Wen/Was?',ex:['Ich kaufe den Apfel. (der → den!)','Ich esse die Pizza. (die → die)','Ich sehe das Kind. (das → das)'],tip:'KEY: der → DEN in Akkusativ! die and das stay the same.'},
],
ex:[
{q:'Ich kaufe ___ Apfel. (der Apfel – Akk.)',o:['der','die','das','den'],a:3},
{q:'___ Mann ist nett. (Nom.)',o:['Den','Die','Der','Das'],a:2},
{q:'Er kauft ___ Auto. (das Auto – Akk.)',o:['der','die','das','den'],a:2},
{q:'Sie liest ___ Buch. (das Buch – Akk.)',o:['der','die','das','den'],a:2},
{q:'Ich kenne ___ Frau. (die Frau – Akk.)',o:['der','die','das','den'],a:1},
]},
{id:5,emoji:'🔮',title:'Modalverben',sub:'Modal verbs',color:'#f39c12',
explain:'The modal verb goes in POSITION 2. The main verb goes to the END as an infinitive.',
rules:[
{r:'können – can / to be able to',ex:['Ich kann Deutsch sprechen.','Kannst du kochen?'],tip:'Used for ability or skill'},
{r:'müssen – must / to have to',ex:['Ich muss arbeiten.','Du musst lernen.'],tip:'Used for obligation or necessity'},
{r:'möchten – would like to',ex:['Ich möchte ein Bier.','Möchtest du Kaffee?'],tip:'More polite than "wollen"'},
{r:'dürfen – may / to be allowed to',ex:['Darf ich rauchen?','Hier darf man nicht parken.'],tip:'Used for permission'},
],
ex:[
{q:'Ich ___ Deutsch sprechen. (ability)',o:['muss','darf','kann','möchte'],a:2},
{q:'Du ___ jeden Tag lernen. (obligation)',o:['kannst','musst','darfst','möchtest'],a:1},
{q:'Er ___ einen Kaffee. (polite wish)',o:['kann','muss','darf','möchte'],a:3},
{q:'___ ich hier parken? (permission)',o:['Kann','Muss','Darf','Möchte'],a:2},
{q:'Ich ___ morgen früh aufstehen. (must)',o:['kann','muss','darf','will'],a:1},
]},
{id:6,emoji:'🏗️',title:'Satzstruktur',sub:'German sentence structure',color:'#1abc9c',
explain:'GOLDEN RULE: The verb ALWAYS goes in POSITION 2! When an adverb starts the sentence, subject and verb swap.',
rules:[
{r:'Normal order: Subject → Verb → ...',ex:['Ich lerne Deutsch. ✅','Ich kaufe jeden Tag Kaffee. ✅'],tip:'Verb is always in position 2'},
{r:'Inverted order: Adverb → Verb → Subject → ...',ex:['Jeden Morgen trinke ich Kaffee. ✅','Am Montag arbeite ich nicht. ✅'],tip:'When an adverb leads, subject and verb SWAP!'},
{r:'Yes/No question: Verb → Subject → ...?',ex:['Bist du Student?','Hast du Hunger?','Lernst du Deutsch?'],tip:'Verb comes FIRST in yes/no questions'},
],
ex:[
{q:'True or false? "Heute ich gehe in die Schule."',o:['True ✅','False ❌ → Heute gehe ich in die Schule.'],a:1},
{q:'Correct question: "Are you hungry?"',o:['Du hast Hunger?','Hast du Hunger?','Hast Hunger du?','Du Hunger hast?'],a:1},
{q:'Which sentence is correct?',o:['Heute ich kaufe Brot.','Ich kaufe heute Brot.','Heute kaufe ich Brot.','Kaufe ich heute Brot.'],a:2},
{q:'Form a question: du / lernen / Deutsch',o:['Lernst du Deutsch?','Du lernst Deutsch?','Deutsch lernst du?','Lernst Deutsch du?'],a:0},
{q:'"Jeden Tag" at the start: Jeden Tag ___ ich Kaffee.',o:['ich trinke','trinke ich','ich trinke –','trinke – ich'],a:1},
]},
];

// ── VERB CONJUGATIONS (by topic) ──
const VERBS=[
{tid:1,emoji:'👋',title:'Sich vorstellen',color:'#e74c3c',light:'#fdecea',verbs:[
{inf:'heißen',en:'to be called',type:'regular',conj:{ich:'heiße',du:'heißt',er:'heißt',wir:'heißen',ihr:'heißt',sie:'heißen'}},
{inf:'sein',en:'to be',type:'irregular',conj:{ich:'bin',du:'bist',er:'ist',wir:'sind',ihr:'seid',sie:'sind'}},
{inf:'haben',en:'to have',type:'irregular',conj:{ich:'habe',du:'hast',er:'hat',wir:'haben',ihr:'habt',sie:'haben'}},
{inf:'kommen',en:'to come',type:'regular',conj:{ich:'komme',du:'kommst',er:'kommt',wir:'kommen',ihr:'kommt',sie:'kommen'}},
{inf:'wohnen',en:'to live',type:'regular',conj:{ich:'wohne',du:'wohnst',er:'wohnt',wir:'wohnen',ihr:'wohnt',sie:'wohnen'}},
{inf:'sprechen',en:'to speak',type:'irregular (i)',conj:{ich:'spreche',du:'sprichst',er:'spricht',wir:'sprechen',ihr:'sprecht',sie:'sprechen'}},
]},
{tid:2,emoji:'👨‍👩‍👧‍👦',title:'Familie',color:'#e67e22',light:'#fdf5ec',verbs:[
{inf:'sein',en:'to be',type:'irregular',conj:{ich:'bin',du:'bist',er:'ist',wir:'sind',ihr:'seid',sie:'sind'}},
{inf:'haben',en:'to have',type:'irregular',conj:{ich:'habe',du:'hast',er:'hat',wir:'haben',ihr:'habt',sie:'haben'}},
{inf:'heißen',en:'to be called',type:'regular',conj:{ich:'heiße',du:'heißt',er:'heißt',wir:'heißen',ihr:'heißt',sie:'heißen'}},
{inf:'wohnen',en:'to live',type:'regular',conj:{ich:'wohne',du:'wohnst',er:'wohnt',wir:'wohnen',ihr:'wohnt',sie:'wohnen'}},
{inf:'studieren',en:'to study (uni)',type:'regular',conj:{ich:'studiere',du:'studierst',er:'studiert',wir:'studieren',ihr:'studiert',sie:'studieren'}},
{inf:'arbeiten',en:'to work',type:'regular',conj:{ich:'arbeite',du:'arbeitest',er:'arbeitet',wir:'arbeiten',ihr:'arbeitet',sie:'arbeiten'}},
]},
{tid:3,emoji:'🔢',title:'Zahlen & Datum',color:'#27ae60',light:'#edfaf1',verbs:[
{inf:'sein',en:'to be',type:'irregular',conj:{ich:'bin',du:'bist',er:'ist',wir:'sind',ihr:'seid',sie:'sind'}},
{inf:'haben',en:'to have',type:'irregular',conj:{ich:'habe',du:'hast',er:'hat',wir:'haben',ihr:'habt',sie:'haben'}},
{inf:'kosten',en:'to cost',type:'regular',conj:{ich:'koste',du:'kostest',er:'kostet',wir:'kosten',ihr:'kostet',sie:'kosten'}},
{inf:'kommen',en:'to come',type:'regular',conj:{ich:'komme',du:'kommst',er:'kommt',wir:'kommen',ihr:'kommt',sie:'kommen'}},
{inf:'werden',en:'to become / turn (age)',type:'irregular',conj:{ich:'werde',du:'wirst',er:'wird',wir:'werden',ihr:'werdet',sie:'werden'}},
]},
{tid:4,emoji:'🍕',title:'Essen & Trinken',color:'#f39c12',light:'#fefbf0',verbs:[
{inf:'essen',en:'to eat',type:'irregular (i)',conj:{ich:'esse',du:'isst',er:'isst',wir:'essen',ihr:'esst',sie:'essen'}},
{inf:'trinken',en:'to drink',type:'regular',conj:{ich:'trinke',du:'trinkst',er:'trinkt',wir:'trinken',ihr:'trinkt',sie:'trinken'}},
{inf:'kochen',en:'to cook',type:'regular',conj:{ich:'koche',du:'kochst',er:'kocht',wir:'kochen',ihr:'kocht',sie:'kochen'}},
{inf:'nehmen',en:'to take / order',type:'irregular (i)',conj:{ich:'nehme',du:'nimmst',er:'nimmt',wir:'nehmen',ihr:'nehmt',sie:'nehmen'}},
{inf:'kosten',en:'to cost',type:'regular',conj:{ich:'koste',du:'kostest',er:'kostet',wir:'kosten',ihr:'kostet',sie:'kosten'}},
{inf:'möchten',en:'would like to',type:'modal',conj:{ich:'möchte',du:'möchtest',er:'möchte',wir:'möchten',ihr:'möchtet',sie:'möchten'}},
]},
{tid:5,emoji:'🏠',title:'Wohnen',color:'#1abc9c',light:'#edfaf7',verbs:[
{inf:'wohnen',en:'to live',type:'regular',conj:{ich:'wohne',du:'wohnst',er:'wohnt',wir:'wohnen',ihr:'wohnt',sie:'wohnen'}},
{inf:'leben',en:'to live / reside',type:'regular',conj:{ich:'lebe',du:'lebst',er:'lebt',wir:'leben',ihr:'lebt',sie:'leben'}},
{inf:'sein',en:'to be',type:'irregular',conj:{ich:'bin',du:'bist',er:'ist',wir:'sind',ihr:'seid',sie:'sind'}},
{inf:'haben',en:'to have',type:'irregular',conj:{ich:'habe',du:'hast',er:'hat',wir:'haben',ihr:'habt',sie:'haben'}},
{inf:'kosten',en:'to cost',type:'regular',conj:{ich:'koste',du:'kostest',er:'kostet',wir:'kosten',ihr:'kostet',sie:'kosten'}},
]},
{tid:6,emoji:'⏰',title:'Alltag & Uhrzeiten',color:'#3498db',light:'#eaf4fd',verbs:[
{inf:'aufstehen',en:'to get up',type:'separable',conj:{ich:'stehe auf',du:'stehst auf',er:'steht auf',wir:'stehen auf',ihr:'steht auf',sie:'stehen auf'}},
{inf:'frühstücken',en:'to have breakfast',type:'regular',conj:{ich:'frühstücke',du:'frühstückst',er:'frühstückt',wir:'frühstücken',ihr:'frühstückt',sie:'frühstücken'}},
{inf:'arbeiten',en:'to work',type:'regular',conj:{ich:'arbeite',du:'arbeitest',er:'arbeitet',wir:'arbeiten',ihr:'arbeitet',sie:'arbeiten'}},
{inf:'schlafen',en:'to sleep',type:'irregular (ä)',conj:{ich:'schlafe',du:'schläfst',er:'schläft',wir:'schlafen',ihr:'schlaft',sie:'schlafen'}},
{inf:'fahren',en:'to drive / go',type:'irregular (ä)',conj:{ich:'fahre',du:'fährst',er:'fährt',wir:'fahren',ihr:'fahrt',sie:'fahren'}},
{inf:'anrufen',en:'to call (phone)',type:'separable',conj:{ich:'rufe an',du:'rufst an',er:'ruft an',wir:'rufen an',ihr:'ruft an',sie:'rufen an'}},
]},
{tid:7,emoji:'⚽',title:'Freizeit & Hobbys',color:'#9b59b6',light:'#f5f0fb',verbs:[
{inf:'spielen',en:'to play',type:'regular',conj:{ich:'spiele',du:'spielst',er:'spielt',wir:'spielen',ihr:'spielt',sie:'spielen'}},
{inf:'lesen',en:'to read',type:'irregular (ie)',conj:{ich:'lese',du:'liest',er:'liest',wir:'lesen',ihr:'lest',sie:'lesen'}},
{inf:'sehen',en:'to see / watch',type:'irregular (ie)',conj:{ich:'sehe',du:'siehst',er:'sieht',wir:'sehen',ihr:'seht',sie:'sehen'}},
{inf:'fernsehen',en:'to watch TV',type:'separable',conj:{ich:'sehe fern',du:'siehst fern',er:'sieht fern',wir:'sehen fern',ihr:'seht fern',sie:'sehen fern'}},
{inf:'hören',en:'to listen',type:'regular',conj:{ich:'höre',du:'hörst',er:'hört',wir:'hören',ihr:'hört',sie:'hören'}},
{inf:'reisen',en:'to travel',type:'regular',conj:{ich:'reise',du:'reist',er:'reist',wir:'reisen',ihr:'reist',sie:'reisen'}},
{inf:'können',en:'can / be able to',type:'modal',conj:{ich:'kann',du:'kannst',er:'kann',wir:'können',ihr:'könnt',sie:'können'}},
]},
{tid:8,emoji:'🛒',title:'Einkaufen',color:'#e91e63',light:'#fdf0f5',verbs:[
{inf:'kaufen',en:'to buy',type:'regular',conj:{ich:'kaufe',du:'kaufst',er:'kauft',wir:'kaufen',ihr:'kauft',sie:'kaufen'}},
{inf:'bezahlen',en:'to pay',type:'regular',conj:{ich:'bezahle',du:'bezahlst',er:'bezahlt',wir:'bezahlen',ihr:'bezahlt',sie:'bezahlen'}},
{inf:'kosten',en:'to cost',type:'regular',conj:{ich:'koste',du:'kostest',er:'kostet',wir:'kosten',ihr:'kostet',sie:'kosten'}},
{inf:'suchen',en:'to look for',type:'regular',conj:{ich:'suche',du:'suchst',er:'sucht',wir:'suchen',ihr:'sucht',sie:'suchen'}},
{inf:'nehmen',en:'to take',type:'irregular (i)',conj:{ich:'nehme',du:'nimmst',er:'nimmt',wir:'nehmen',ihr:'nehmt',sie:'nehmen'}},
{inf:'brauchen',en:'to need',type:'regular',conj:{ich:'brauche',du:'brauchst',er:'braucht',wir:'brauchen',ihr:'braucht',sie:'brauchen'}},
]},
{tid:9,emoji:'🚂',title:'Unterwegs',color:'#00bcd4',light:'#e8f9fb',verbs:[
{inf:'fahren',en:'to drive / go',type:'irregular (ä)',conj:{ich:'fahre',du:'fährst',er:'fährt',wir:'fahren',ihr:'fahrt',sie:'fahren'}},
{inf:'gehen',en:'to go (on foot)',type:'regular',conj:{ich:'gehe',du:'gehst',er:'geht',wir:'gehen',ihr:'geht',sie:'gehen'}},
{inf:'kommen',en:'to come',type:'regular',conj:{ich:'komme',du:'kommst',er:'kommt',wir:'kommen',ihr:'kommt',sie:'kommen'}},
{inf:'ankommen',en:'to arrive',type:'separable',conj:{ich:'komme an',du:'kommst an',er:'kommt an',wir:'kommen an',ihr:'kommt an',sie:'kommen an'}},
{inf:'abfahren',en:'to depart',type:'separable',conj:{ich:'fahre ab',du:'fährst ab',er:'fährt ab',wir:'fahren ab',ihr:'fahrt ab',sie:'fahren ab'}},
{inf:'abbiegen',en:'to turn',type:'separable',conj:{ich:'biege ab',du:'biegst ab',er:'biegt ab',wir:'biegen ab',ihr:'biegt ab',sie:'biegen ab'}},
]},
{tid:10,emoji:'🏥',title:'Gesundheit',color:'#ff5722',light:'#fff3f0',verbs:[
{inf:'wehtun',en:'to hurt',type:'separable',conj:{ich:'tue weh',du:'tust weh',er:'tut weh',wir:'tun weh',ihr:'tut weh',sie:'tun weh'}},
{inf:'fühlen',en:'to feel',type:'regular',conj:{ich:'fühle',du:'fühlst',er:'fühlt',wir:'fühlen',ihr:'fühlt',sie:'fühlen'}},
{inf:'bleiben',en:'to stay',type:'regular',conj:{ich:'bleibe',du:'bleibst',er:'bleibt',wir:'bleiben',ihr:'bleibt',sie:'bleiben'}},
{inf:'nehmen',en:'to take (medicine)',type:'irregular (i)',conj:{ich:'nehme',du:'nimmst',er:'nimmt',wir:'nehmen',ihr:'nehmt',sie:'nehmen'}},
{inf:'müssen',en:'must / have to',type:'modal',conj:{ich:'muss',du:'musst',er:'muss',wir:'müssen',ihr:'müsst',sie:'müssen'}},
{inf:'gehen',en:'to go',type:'regular',conj:{ich:'gehe',du:'gehst',er:'geht',wir:'gehen',ihr:'geht',sie:'gehen'}},
]},
];

// ── STATE ──
const S={
  page:'home',topic:null,grammar:null,skill:'vocab',
  progress:{},writing:{},showAns:{},vocabOpen:{},verbOpen:{},
  fc:{idx:0,flipped:false},
  quiz:{questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null},
  quizInit:false,
};
try{const p=localStorage.getItem('da1p');if(p)S.progress=JSON.parse(p);}catch(e){}
try{const w=localStorage.getItem('da1w');if(w)S.writing=JSON.parse(w);}catch(e){}
function saveProg(){try{localStorage.setItem('da1p',JSON.stringify(S.progress));}catch(e){}}
function saveWrite(){try{localStorage.setItem('da1w',JSON.stringify(S.writing));}catch(e){}}

// ── AUDIO ENGINE ──
// iOS requires audio to be created synchronously inside a user-gesture handler.
// We use Web Speech API as primary on mobile, Google TTS as enhancement on desktop.
const audioCache={};let currentAudio=null;

function isMobile(){return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);}

function speak(text){
  if(!text)return;
  const parts=text.split('___').map(p=>p.trim()).filter(p=>p);
  if(!parts.length)return;
  stopAudio();
  // On mobile: use browser TTS directly (more reliable)
  // On desktop: try Google TTS first, fallback to browser TTS
  if(isMobile()){
    speakPartsWithBrowser(parts,0);
  } else {
    speakPartsWithGoogle(parts,0);
  }
}

function stopAudio(){
  if(currentAudio){currentAudio.pause();currentAudio.currentTime=0;currentAudio=null;}
  if(window.speechSynthesis)speechSynthesis.cancel();
}

function speakPartsWithBrowser(parts,i){
  if(i>=parts.length)return;
  const onEnd=i<parts.length-1?()=>setTimeout(()=>speakPartsWithBrowser(parts,i+1),2000):null;
  useBrowserTTS(parts[i],onEnd);
}

function speakPartsWithGoogle(parts,i){
  if(i>=parts.length)return;
  const onEnd=i<parts.length-1?()=>setTimeout(()=>speakPartsWithGoogle(parts,i+1),2000):null;
  speakPart(parts[i],onEnd);
}

function speakPart(text,onEnd){
  try{
    const url=`https://translate.googleapis.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=de&client=gtx&ttsspeed=0.85`;
    const audio=new Audio(url);audio.volume=1.0;
    if(onEnd)audio.addEventListener('ended',onEnd);
    audio.play().catch(()=>useBrowserTTS(text,onEnd));
    currentAudio=audio;
  }catch(e){useBrowserTTS(text,onEnd);}
}

let bestGermanVoice=null;
function loadBestVoice(){
  const voices=speechSynthesis.getVoices();if(!voices.length)return;
  const priority=[
    v=>v.lang==='de-DE'&&v.name.includes('Google'),
    v=>v.lang==='de-DE'&&v.name.includes('Microsoft'),
    v=>v.lang==='de-DE'&&v.name.includes('Anna'),
    v=>v.lang==='de-DE',
    v=>v.lang.startsWith('de'),
  ];
  for(const test of priority){const found=voices.find(test);if(found){bestGermanVoice=found;break;}}
}
if(window.speechSynthesis){
  speechSynthesis.onvoiceschanged=loadBestVoice;
  loadBestVoice();
}
function useBrowserTTS(text,onEnd){
  if(!window.speechSynthesis)return;
  speechSynthesis.cancel();
  setTimeout(()=>{
    const u=new SpeechSynthesisUtterance(text);
    u.lang='de-DE';u.rate=0.80;u.pitch=1.0;u.volume=1.0;
    if(bestGermanVoice)u.voice=bestGermanVoice;
    if(onEnd)u.onend=onEnd;
    speechSynthesis.speak(u);
  },100);
}

// ── HELPERS ──
function parseSgPl(de){
  const m=de.match(/^(der|die|das)\s+(\S+)\s+\((.+)\)$/);
  if(!m)return null;
  const[,art,noun,info]=m;
  const plNoun=info==='-'?noun:info.startsWith('-')?noun+info.slice(1):info;
  return{sg:`${art} ${noun}`,pl:`die ${plNoun}`};
}
function vocabItemHtml(v){
  const p=parseSgPl(v.de);
  return `<div class="vi"><div style="flex:1">
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
      <span style="font-weight:600;font-size:15px">${p?p.sg:esc(v.de)}</span>
      <button class="spk" data-speak="${encodeURIComponent(p?p.sg:v.de)}">🔊</button>
    </div>
    ${p?`<div style="display:flex;gap:6px;margin-bottom:4px;flex-wrap:wrap">
      <span style="background:#e8f4fd;border-radius:5px;padding:2px 7px;font-size:12px;color:#2980b9">SG: ${esc(p.sg)}</span>
      <span style="background:#edfaf1;border-radius:5px;padding:2px 7px;font-size:12px;color:#1a9e5f">PL: ${esc(p.pl)}</span>
    </div>`:''}
    <div style="font-size:12px;color:#666;margin-bottom:2px">🇬🇧 ${esc(v.vi)}</div>
    <div style="font-size:12px;color:#888;font-style:italic">${esc(v.ex)}</div>
  </div></div>`;
}
function renderVocabList(vocab){
  const hasCats=vocab.some(v=>v.cat);
  if(!hasCats)return vocab.map(vocabItemHtml).join('');
  const cats={},order=[];
  vocab.forEach(v=>{const c=v.cat||'Other';if(!cats[c]){cats[c]=[];order.push(c);}cats[c].push(v);});
  return order.map(cat=>`<div style="margin-bottom:16px">
    <div style="font-weight:600;font-size:13px;background:#f0f0f0;padding:7px 12px;border-radius:8px;margin-bottom:8px;color:#333;border-left:4px solid #bbb">📂 ${esc(cat)}</div>
    ${cats[cat].map(vocabItemHtml).join('')}
  </div>`).join('');
}
function sprechenGroupsHtml(t){
  return `<div style="background:#edfaf7;border:1px solid #1abc9c;border-radius:12px;padding:16px;margin-bottom:16px">
    <h3 style="color:#0e8c6f;margin-bottom:4px">🗣️ Questions & Answers</h3>
    <p style="font-size:13px;color:#555;margin-bottom:14px">Press 🔊 → Listen → Repeat out loud!</p>
    ${t.speakGroups.map(group=>`<div style="margin-bottom:16px">
      <div style="font-weight:600;font-size:13px;background:rgba(26,188,156,.15);padding:7px 12px;border-radius:8px;margin-bottom:8px;color:#0e8c6f;border-left:4px solid #1abc9c">${esc(group.cat)}</div>
      ${group.items.map(item=>`<div style="background:#fff;border-radius:10px;padding:12px 14px;margin-bottom:8px">
        <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px">
          <span style="font-size:11px;background:#3498db;color:#fff;border-radius:4px;padding:2px 6px;flex-shrink:0;margin-top:2px">Q</span>
          <span style="font-size:14px;color:#111;flex:1">${esc(item.q)}</span>
          <button class="spk" data-speak="${encodeURIComponent(item.q)}" style="font-size:15px;flex-shrink:0">🔊</button>
        </div>
        <div style="display:flex;align-items:flex-start;gap:8px">
          <span style="font-size:11px;background:#1a9e5f;color:#fff;border-radius:4px;padding:2px 6px;flex-shrink:0;margin-top:2px">A</span>
          <span style="font-size:14px;color:#555;font-style:italic;flex:1">${esc(item.a)}</span>
          <button class="spk" data-speak="${encodeURIComponent(item.a)}" style="font-size:15px;flex-shrink:0">🔊</button>
        </div>
      </div>`).join('')}
    </div>`).join('')}
  </div>`;
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

// ── RENDER ──
function render(){
  document.getElementById('app').innerHTML = navHtml() + pageHtml();
}

function navHtml(){
  const links=[['home','🏠 Home'],['topics','📚 Topics'],['grammar','✏️ Grammar'],['verbs','🔄 Verbs'],['quiz','🏆 Quiz']];
  return `<nav class="nav">
    <span style="color:#FFCE00;font-size:20px;margin-right:8px">🇩🇪</span>
    <span class="nav-title">Deutsch A1</span>
    ${links.map(([p,l])=>`<button class="nb${S.page===p&&!S.topic&&!S.grammar?' active':''}" data-nav="${p}">${l}</button>`).join('')}
  </nav>`;
}
function pageHtml(){
  if(S.topic)return topicDetailHtml();
  if(S.grammar)return grammarDetailHtml();
  const pages={home:homeHtml,topics:topicsHtml,grammar:grammarHtml,verbs:verbsHtml,quiz:quizPageHtml};
  return(pages[S.page]||homeHtml)();
}

// ── HOME ──
function homeHtml(){
  const done=Object.keys(S.progress).length;
  return `<div class="hero">
    <div style="font-size:64px;margin-bottom:8px">🐻</div>
    <h1 style="color:#fff;font-size:22px;font-weight:500;margin-bottom:6px">Deutsch A1 – Lern mit Spaß!</h1>
    <p style="color:#aaa;font-size:14px;margin-bottom:20px">Based on Goethe Institut &amp; Prima Plus curriculum 🎓</p>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;${done?'margin-bottom:16px':''}">
      <div class="badge"><span style="color:#FFCE00;font-weight:500">${done}/10</span><span style="color:#aaa;font-size:13px">Topics</span></div>
      <div class="badge" style="border-color:#cc0000;background:rgba(204,0,0,.15)"><span style="color:#ff6b6b;font-weight:500">10</span><span style="color:#aaa;font-size:13px">Quizzes</span></div>
      <div class="badge" style="border-color:#1a9e5f;background:rgba(26,158,95,.15)"><span style="color:#2ecc71;font-weight:500">6</span><span style="color:#aaa;font-size:13px">Grammar</span></div>
    </div>
    ${done?`<div class="pbg"><div class="pfill" style="width:${done*10}%"></div></div><p style="color:#FFCE00;font-size:12px;margin-top:6px">${done*10}% completed!</p>`:''}
  </div>
  <div class="page">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px">
      ${[{l:'All Topics 📚',d:'10 themes A1',c:'#e74c3c',n:'topics'},{l:'Grammar ✏️',d:'6 lessons',c:'#3498db',n:'grammar'},{l:'Verbs 🔄',d:'7 groups · 40 verbs',c:'#1abc9c',n:'verbs'},{l:'Quiz 🏆',d:'Test everything',c:'#f39c12',n:'quiz'},{l:'Random 🎲',d:'Surprise me!',c:'#9b59b6',n:'random'}].map(b=>`<button data-nav="${b.n}" style="background:${b.c};color:#fff;border:none;border-radius:12px;padding:16px 12px;cursor:pointer;text-align:left;width:100%"><div style="font-size:15px;font-weight:500">${b.l}</div><div style="font-size:12px;opacity:.85;margin-top:2px">${b.d}</div></button>`).join('')}
    </div>
    <h2 style="margin-bottom:12px">All Topics 🗺️</h2>
    <div class="g2">${T.map(t=>`<button class="row-btn" style="background:${S.progress[t.id]?t.light:'#fff'};border-color:${S.progress[t.id]?t.color:'#e0e0e0'}" data-tid="${t.id}">
      <span style="font-size:24px">${t.emoji}</span>
      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.title}</div><div style="font-size:11px;color:#666">${t.sub}</div></div>
      ${S.progress[t.id]?'<span style="font-size:16px">✅</span>':''}
    </button>`).join('')}</div>
  </div>`;
}

// ── TOPICS LIST ──
function topicsHtml(){
  return `<div class="page"><h2 style="padding-top:16px;margin-bottom:14px">📚 All 10 Topics</h2>
  <div style="display:flex;flex-direction:column;gap:10px">
  ${T.map(t=>`<button class="row-btn" style="padding:14px 16px;border-color:${S.progress[t.id]?t.color:'#e8e8e8'}" data-tid="${t.id}">
    <div style="width:48px;height:48px;border-radius:12px;background:${t.light};display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">${t.emoji}</div>
    <div style="flex:1"><div style="font-size:15px;font-weight:500;margin-bottom:2px">${t.title}</div><div style="font-size:12px;color:#666;margin-bottom:4px">${t.sub}</div><div style="font-size:11px;background:#f8f8f8;border-radius:6px;padding:3px 8px;color:#555;font-style:italic;display:inline-block">"${esc(t.key.slice(0,45))}..."</div></div>
    ${S.progress[t.id]?'<span style="font-size:18px">✅</span>':'<span style="color:#aaa">→</span>'}
  </button>`).join('')}
  </div></div>`;
}

// ── TOPIC DETAIL ──
function topicDetailHtml(){
  const t=S.topic;
  const tabs=[{id:'vocab',l:'📇 Vocabulary'},{id:'hoeren',l:'🎧 Listening'},{id:'sprechen',l:'🗣️ Speaking'},{id:'lesen',l:'📖 Reading'},{id:'schreiben',l:'✍️ Writing'},{id:'quiz',l:'🎯 Quiz'}];
  return `<div>
    <div style="background:${t.color};padding:20px 16px 16px">
      <button class="btn-back" data-action="back">← Back</button>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
        <span style="font-size:40px">${t.emoji}</span>
        <div><h2 style="color:#fff;font-size:20px">${t.title}</h2><p style="color:rgba(255,255,255,.8);font-size:13px;margin:0">${t.sub}</p></div>
      </div>
      <div style="background:rgba(0,0,0,.25);border-radius:10px;padding:10px 14px">
        <span style="color:rgba(255,255,255,.7);font-size:11px">⭐ KEY TAKEAWAY</span>
        <div style="display:flex;align-items:center;gap:8px;margin-top:4px">
          <p style="color:#fff;font-style:italic;font-size:14px;flex:1;margin:0">${esc(t.key)}</p>
          <button class="spk" style="color:#fff;font-size:18px" data-speak="${encodeURIComponent(t.key)}">🔊</button>
        </div>
      </div>
    </div>
    <div class="skill-tabs"><div class="skill-tabs-inner">
      ${tabs.map(s=>`<button class="stab${S.skill===s.id?' active':''}" style="${S.skill===s.id?`border-bottom-color:${t.color};color:${t.color}`:''}" data-skill="${s.id}">${s.l}</button>`).join('')}
    </div></div>
    <div class="page" style="padding-top:16px">
      ${skillHtml(t)}
      ${S.skill!=='quiz'?`<div style="text-align:center;margin-top:20px"><button data-action="done" style="background:${S.progress[t.id]?'#1a9e5f':'#555'};color:#fff;border:none;border-radius:8px;padding:10px 20px;cursor:pointer;font-size:14px;font-weight:500">${S.progress[t.id]?'✅ Completed!':'Mark as completed'}</button></div>`:''}
    </div>
  </div>`;
}
function skillHtml(t){
  switch(S.skill){case'vocab':return vocabHtml(t);case'hoeren':return hoerenHtml(t);case'sprechen':return sprechenHtml(t);case'lesen':return lesenHtml(t);case'schreiben':return schreibenHtml(t);case'quiz':return quizWidgetHtml(t.quiz,'t'+t.id);default:return vocabHtml(t);}
}
function vocabHtml(t){
  const fc=S.fc,card=t.vocab[fc.idx];
  const p=parseSgPl(card.de);
  return `<div style="background:${t.light};border-radius:12px;padding:16px;margin-bottom:16px">
    <h3 style="color:${t.color};margin-bottom:12px">🃏 Flashcards – Tap to flip!</h3>
    <div class="flashcard${fc.flipped?' flip':''}" data-action="flip">
      ${!fc.flipped?`<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <span style="font-size:22px;font-weight:600">${p?p.sg:esc(card.de)}</span>
        <button class="spk" data-speak="${encodeURIComponent(p?p.sg:card.de)}" style="font-size:18px">🔊</button>
      </div>
      ${p?`<div style="display:flex;gap:8px;margin-bottom:6px;flex-wrap:wrap">
        <span style="background:#e8f4fd;border-radius:6px;padding:3px 8px;font-size:12px;color:#2980b9">SG: ${esc(p.sg)}</span>
        <span style="background:#edfaf1;border-radius:6px;padding:3px 8px;font-size:12px;color:#1a9e5f">PL: ${esc(p.pl)}</span>
      </div>`:''}
      <div style="font-size:12px;color:#666">Tap to flip</div>`
      :`<div style="font-size:16px;color:#555;font-weight:500;margin-bottom:8px">${esc(card.vi)}</div>
      ${p?`<div style="display:flex;gap:8px;justify-content:center;margin-bottom:8px;flex-wrap:wrap">
        <span style="background:#e8f4fd;border-radius:6px;padding:4px 10px;font-size:13px;color:#2980b9;font-weight:500">📌 SG: ${esc(p.sg)}</span>
        <span style="background:#edfaf1;border-radius:6px;padding:4px 10px;font-size:13px;color:#1a9e5f;font-weight:500">📌 PL: ${esc(p.pl)}</span>
      </div>`:''}
      <div style="font-size:13px;color:#888;font-style:italic;margin-bottom:8px">"${esc(card.ex)}"</div>
      <button class="spk" data-speak="${encodeURIComponent(card.ex)}" style="font-size:15px">🔊 Example</button>`}
    </div>
    <div class="fcnav">
      <button class="smb" data-action="fc-prev">←</button>
      <span style="font-size:13px;color:#666">${fc.idx+1} / ${t.vocab.length}</span>
      <button class="smb" data-action="fc-next">→</button>
    </div>
  </div>
  <h3 style="font-size:14px;color:#555;margin-bottom:10px">📋 All Vocabulary</h3>
  ${renderVocabList(t.vocab)}`;
}
function hoerenHtml(t){
  return `<div style="background:#f8f8f8;border-radius:12px;padding:16px;margin-bottom:16px">
    <h3 style="margin-bottom:12px">🎬 Video: ${esc(t.title)}</h3>
    <div class="yw"><iframe src="https://www.youtube-nocookie.com/embed/${t.ytId}?rel=0" frameborder="0" allowfullscreen></iframe></div>
    <p style="font-size:12px;color:#666;margin-top:8px">💡 DW Deutsch / Goethe Institut A1.</p>
  </div>
  <div style="background:#fff8e1;border:1px solid #FFCE00;border-radius:12px;padding:16px">
    <h3 style="margin-bottom:10px">🎧 Listen line by line</h3>
    ${t.reading.text.split('\n').map(line=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #f5f5f5">
      <button class="spk" data-speak="${encodeURIComponent(line)}" style="font-size:16px">🔊</button>
      <span style="font-size:13px;color:#333">${esc(line)}</span>
    </div>`).join('')}
  </div>`;
}
function sprechenHtml(t){
  if(t.speakGroups)return sprechenGroupsHtml(t);
  return `<div style="background:#edfaf7;border:1px solid #1abc9c;border-radius:12px;padding:16px;margin-bottom:16px">
    <h3 style="color:#0e8c6f;margin-bottom:4px">🗣️ Repeat out loud!</h3>
    <p style="font-size:13px;color:#555;margin-bottom:14px">Press 🔊 → Listen → Speak along!</p>
    ${t.speaking.map(s=>`<div style="background:#fff;border-radius:10px;padding:12px 14px;margin-bottom:8px;display:flex;align-items:center;gap:10px">
      <button class="spk" data-speak="${encodeURIComponent(s)}" style="background:#1abc9c;color:#fff;border:none;border-radius:6px;padding:6px 10px;cursor:pointer;font-size:15px;flex-shrink:0">🔊</button>
      <span style="font-size:15px">${esc(s)}</span>
    </div>`).join('')}
  </div>
  <div style="background:#fff;border:1px solid #eee;border-radius:12px;padding:16px">
    <h3 style="margin-bottom:10px">💬 Practise the dialogue</h3>
    ${t.reading.text.split('\n').map(line=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #f5f5f5">
      <button class="spk" data-speak="${encodeURIComponent(line)}" style="font-size:15px">🔊</button>
      <span style="font-size:13px;color:#333">${esc(line)}</span>
    </div>`).join('')}
  </div>`;
}
function lesenHtml(t){
  return `<div style="background:#fff;border:1px solid #eee;border-radius:12px;padding:16px;margin-bottom:16px">
    <h3 style="margin-bottom:12px">${esc(t.reading.title)}</h3>
    ${t.reading.text.split('\n').map(l=>`<p style="font-size:14px;line-height:1.7;color:#222;margin-bottom:8px">${esc(l)}</p>`).join('')}
  </div>
  <div style="background:#eaf4fd;border:1px solid #3498db;border-radius:12px;padding:16px">
    <h3 style="color:#2980b9;margin-bottom:12px">❓ Comprehension questions</h3>
    ${t.reading.qs.map((q,i)=>`<div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px">
      <p style="font-size:14px;font-weight:500;margin-bottom:6px">${i+1}. ${esc(q.q)}</p>
      ${S.showAns[`${t.id}-${i}`]?`<p style="font-size:14px;color:#1a9e5f;font-style:italic;margin:0">✅ ${esc(q.a)}</p>`:`<button data-ans="${t.id}-${i}" style="font-size:12px;background:#3498db;color:#fff;border:none;border-radius:6px;padding:4px 10px;cursor:pointer">Show answer</button>`}
    </div>`).join('')}
  </div>`;
}
function schreibenHtml(t){
  return `<div style="background:#fff8e1;border:1px solid #FFCE00;border-radius:12px;padding:16px;margin-bottom:16px">
    <h3 style="margin-bottom:10px">${esc(t.writing.task)}</h3>
    <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:12px">
      <p style="font-size:12px;color:#666;margin-bottom:4px">📝 Template</p>
      <p style="font-size:14px;color:#333;font-style:italic;margin:0">${esc(t.writing.tmpl)}</p>
    </div>
    <textarea class="tarea" id="wr-${t.id}" placeholder="Write your text here...">${esc(S.writing[t.id]||'')}</textarea>
  </div>
  <div style="background:#edfaf1;border:1px solid #27ae60;border-radius:12px;padding:16px">
    <h3 style="color:#1a7a4a;margin-bottom:8px">✅ Example answer</h3>
    <p style="font-size:14px;color:#333;font-style:italic;margin-bottom:8px">${esc(t.writing.ex)}</p>
    <button class="spk" data-speak="${encodeURIComponent(t.writing.ex)}" style="border:1px solid #27ae60;color:#1a7a4a;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:13px;background:none">🔊 Listen</button>
  </div>`;
}

// ── GRAMMAR ──
function grammarHtml(){
  return `<div class="page"><h2 style="padding-top:16px;margin-bottom:4px">✏️ Grammar A1</h2>
  <p style="color:#666;font-size:13px;margin-bottom:16px">Based on Goethe Institut &amp; Prima Plus curriculum</p>
  <div style="display:flex;flex-direction:column;gap:12px">
  ${G.map(g=>`<button class="row-btn" style="padding:14px 16px" data-gid="${g.id}">
    <div style="width:48px;height:48px;border-radius:12px;background:${g.color}22;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">${g.emoji}</div>
    <div style="flex:1"><div style="font-size:15px;font-weight:500;margin-bottom:2px">${g.title}</div><div style="font-size:12px;color:#666;margin-bottom:4px">${g.sub}</div><div style="font-size:12px;color:#777">${g.explain.slice(0,60)}...</div></div>
    <span style="color:#aaa">→</span>
  </button>`).join('')}
  </div></div>`;
}
function grammarDetailHtml(){
  const g=S.grammar;
  return `<div>
    <div style="background:${g.color};padding:20px 16px 16px">
      <button class="btn-back" data-action="back">← Back</button>
      <div style="display:flex;gap:12px;align-items:center">
        <span style="font-size:40px">${g.emoji}</span>
        <div><h2 style="color:#fff;font-size:19px">${g.title}</h2><p style="color:rgba(255,255,255,.8);font-size:13px;margin:0">${g.sub}</p></div>
      </div>
    </div>
    <div class="page" style="padding-top:16px">
      <div style="background:#fff8e1;border:1px solid #FFCE00;border-radius:10px;padding:14px;margin-bottom:16px"><p style="font-size:14px;color:#555;margin:0">${esc(g.explain)}</p></div>
      ${g.rules.map(r=>`<div class="card">
        <div style="font-weight:500;font-size:14px;color:${g.color};margin-bottom:8px">${esc(r.r)}</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">
          ${r.ex.map(e=>`<div style="display:flex;align-items:center;gap:4px"><span style="background:#f5f5f5;border-radius:6px;padding:4px 8px;font-size:13px;font-family:monospace">${esc(e)}</span><button class="spk" data-speak="${encodeURIComponent(e)}" style="font-size:13px">🔊</button></div>`).join('')}
        </div>
        <div style="background:${g.color}11;border-radius:6px;padding:6px 10px;font-size:12px;color:#555">💡 ${esc(r.tip)}</div>
      </div>`).join('')}
      <div class="card"><h3 style="color:${g.color};margin-bottom:14px">🎯 Exercises</h3>${quizWidgetHtml(g.ex,'g'+g.id)}</div>
    </div>
  </div>`;
}

// ── VERBS (accordion by topic) ──
function verbsHtml(){
  const pronouns=['ich','du','er/sie/es','wir','ihr','sie/Sie'];
  const keys=['ich','du','er','wir','ihr','sie'];
  const typeColors={regular:'#78909c',irregular:'#e67e22',separable:'#3498db',modal:'#9b59b6'};
  const badge=t=>{const col=Object.entries(typeColors).find(([k])=>t.startsWith(k))?.[1]||'#78909c';return `<span style="background:${col};color:#fff;border-radius:4px;padding:2px 7px;font-size:11px;font-weight:500;white-space:nowrap">${esc(t)}</span>`;};
  return `<div class="page">
    <div style="padding-top:16px;margin-bottom:16px">
      <h2 style="margin-bottom:4px">🔄 Verb Conjugations – Present Tense</h2>
      <p style="color:#666;font-size:13px;margin-bottom:10px">10 topics · Click to expand · Press 🔊 to listen</p>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${Object.entries(typeColors).map(([t,c])=>`<span style="background:${c};color:#fff;border-radius:4px;padding:3px 9px;font-size:11px">${t}</span>`).join('')}</div>
    </div>
    ${VERBS.map(topic=>{
      const open=!!S.verbOpen[topic.tid];
      return `<div style="margin-bottom:10px;border-radius:12px;overflow:hidden;border:1.5px solid ${open?topic.color:'#e0e0e0'}">
        <button data-verbopen="${topic.tid}" style="width:100%;background:${open?topic.color:'#fff'};border:none;padding:14px 16px;cursor:pointer;display:flex;align-items:center;gap:12px;text-align:left">
          <div style="width:44px;height:44px;border-radius:10px;background:${open?'rgba(255,255,255,.2)':topic.light};display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">${topic.emoji}</div>
          <div style="flex:1">
            <div style="font-size:15px;font-weight:600;color:${open?'#fff':'#111'}">${esc(topic.title)}</div>
            <div style="font-size:12px;color:${open?'rgba(255,255,255,.8)':'#888'};margin-top:2px">${topic.verbs.length} verbs</div>
          </div>
          <span style="font-size:18px;color:${open?'#fff':'#bbb'};display:inline-block;transform:rotate(${open?180:0}deg)">▼</span>
        </button>
        ${open?`<div style="background:#fff;border-top:1px solid ${topic.color}33">
          ${topic.verbs.map((v,vi)=>`<div style="padding:14px 16px;${vi<topic.verbs.length-1?`border-bottom:1px solid ${topic.color}22`:''}">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-wrap:wrap">
              <span style="font-size:17px;font-weight:700;color:#111">${esc(v.inf)}</span>
              <button class="spk" data-speak="${encodeURIComponent(v.inf)}" style="font-size:15px">🔊</button>
              <span style="font-size:13px;color:#777;font-style:italic">${esc(v.en)}</span>
              <span style="margin-left:auto">${badge(v.type)}</span>
            </div>
            <div style="border-radius:8px;overflow:hidden;border:1px solid #eee">
              ${pronouns.map((pr,i)=>{const form=v.conj[keys[i]];const bg=i%2===0?'#fff':'#fafafa';return `<div style="display:grid;grid-template-columns:110px 1fr 36px;background:${bg};border-bottom:${i<5?'1px solid #f0f0f0':'none'}">
                <div style="padding:8px 12px;font-size:13px;color:#666;border-right:1px solid #f0f0f0">${esc(pr)}</div>
                <div style="padding:8px 12px;font-size:15px;font-weight:600;color:${topic.color}">${esc(form)}</div>
                <div style="padding:6px 4px;display:flex;align-items:center;justify-content:center"><button class="spk" data-speak="${encodeURIComponent(pr.split('/')[0].trim()+' '+form)}" style="font-size:14px">🔊</button></div>
              </div>`;}).join('')}
            </div>
          </div>`).join('')}
        </div>`:''}
      </div>`;
    }).join('')}
  </div>`;
}

// ── QUIZ PAGE ──
function quizPageHtml(){
  if(!S.quizInit){
    const qs=[...T.flatMap(t=>t.quiz)].sort(()=>Math.random()-.5).slice(0,20);
    S.quiz={questions:qs,idx:0,sel:null,score:0,done:false,final:0,src:'main'};S.quizInit=true;
  }
  return `<div class="page">
    <div style="background:linear-gradient(135deg,#CC0000,#8B0000);border-radius:16px;padding:24px 20px;text-align:center;margin-top:16px;margin-bottom:20px;color:#fff">
      <div style="font-size:48px;margin-bottom:8px">🏆</div>
      <h2 style="color:#fff;font-size:20px;font-weight:500;margin-bottom:6px">A1 Quiz Challenge!</h2>
      <p style="font-size:13px;opacity:.85;margin:0">20 random questions from all 10 topics · Viel Erfolg!</p>
    </div>
    <div class="card">${quizWidgetHtml(S.quiz.questions,'main')}</div>
  </div>`;
}

// ── QUIZ WIDGET ──
function quizWidgetHtml(questions,src){
  if(S.quiz.src!==src)S.quiz={questions,idx:0,sel:null,score:0,done:false,final:0,src};
  const q=S.quiz;if(!q.questions.length)S.quiz.questions=questions;
  if(q.done){
    const pct=Math.round((q.final/questions.length)*100);
    const msg=pct===100?'Perfect! You\'re a star! 🌟':pct>=60?'Well done! Keep it up! 💪':'Practice makes perfect! 📚';
    return `<div style="text-align:center;padding:32px 16px">
      <div style="font-size:56px;margin-bottom:8px">${pct===100?'🏆':pct>=60?'⭐':'💪'}</div>
      <div style="font-size:28px;font-weight:500;margin-bottom:4px">${q.final}/${questions.length} correct</div>
      <div style="color:#666;margin-bottom:20px">${msg}</div>
      <button data-action="retry" style="background:#111;color:#fff;border:none;border-radius:8px;padding:10px 20px;cursor:pointer;font-size:14px;font-weight:500">Try again 🔄</button>
    </div>`;
  }
  const qi=questions[q.idx];
  return `<div>
    <div style="display:flex;justify-content:space-between;margin-bottom:12px">
      <span style="font-size:13px;color:#666">Question ${q.idx+1} / ${questions.length}</span>
      <span style="font-size:13px;color:#666">✅ ${q.score} correct</span>
    </div>
    <div style="background:#fff8e1;border-left:4px solid #FFCE00;border-radius:0 8px 8px 0;padding:12px 16px;margin-bottom:16px"><p style="margin:0;font-size:16px;font-weight:500">${esc(qi.q)}</p></div>
    ${qi.o.map((opt,i)=>{let cls='qopt',pre='';if(q.sel!==null){cls+=' off';if(i===qi.a){cls+=' ok';pre='✅ ';}else if(i===q.sel){cls+=' err';pre='❌ ';}}return `<button class="${cls}" data-pick="${i}">${pre}${esc(opt)}</button>`;}).join('')}
    ${q.sel!==null?`<button data-action="next" style="background:#111;color:#fff;border:none;border-radius:8px;padding:10px 20px;cursor:pointer;font-size:14px;font-weight:500;margin-top:6px">${q.idx+1<questions.length?'Next →':'See results 🏆'}</button>`:''}
  </div>`;
}

// ── EVENTS — attached to document once, survives all re-renders ──
function bindEvents(){
  document.addEventListener('click', handleClick);
  document.addEventListener('input', handleInput);
}

function handleClick(e){
  const el=e.target.closest('[data-nav],[data-tid],[data-gid],[data-action],[data-skill],[data-pick],[data-ans],[data-speak],[data-verbopen],[data-vopen]');
  if(!el)return;e.stopPropagation();
  if(el.dataset.speak){speak(decodeURIComponent(el.dataset.speak));return;}
  if(el.dataset.verbopen!==undefined){S.verbOpen[parseInt(el.dataset.verbopen)]=!S.verbOpen[parseInt(el.dataset.verbopen)];// ── INIT ──
render();
bindEvents();return;}
  if(el.dataset.vopen!==undefined){S.vocabOpen[parseInt(el.dataset.vopen)]=!S.vocabOpen[parseInt(el.dataset.vopen)];render();return;}
  if(el.dataset.nav){
    const n=el.dataset.nav;
    if(n==='random'){S.topic=T[Math.floor(Math.random()*T.length)];S.skill='vocab';S.fc={idx:0,flipped:false};S.quiz={questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null};}
    else{S.page=n;S.topic=null;S.grammar=null;if(n!=='quiz')S.quizInit=false;}
    render();return;
  }
  if(el.dataset.tid){S.topic=T.find(t=>t.id==el.dataset.tid);S.skill='vocab';S.fc={idx:0,flipped:false};S.quiz={questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null};render();return;}
  if(el.dataset.gid){S.grammar=G.find(g=>g.id==el.dataset.gid);S.quiz={questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null};render();return;}
  if(el.dataset.skill){S.skill=el.dataset.skill;S.quiz={questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null};render();return;}
  if(el.dataset.ans){S.showAns[el.dataset.ans]=true;render();return;}
  const a=el.dataset.action;if(!a)return;
  if(a==='back'){S.topic?S.topic=null:S.grammar=null;render();return;}
  if(a==='flip'){S.fc.flipped=!S.fc.flipped;render();return;}
  if(a==='fc-prev'){S.fc.idx=(S.fc.idx-1+S.topic.vocab.length)%S.topic.vocab.length;S.fc.flipped=false;render();return;}
  if(a==='fc-next'){S.fc.idx=(S.fc.idx+1)%S.topic.vocab.length;S.fc.flipped=false;render();return;}
  if(a==='done'){S.progress[S.topic.id]=true;saveProg();render();return;}
  if(a==='retry'){
    const src=S.quiz.src;let qs;
    if(src==='main')qs=[...T.flatMap(t=>t.quiz)].sort(()=>Math.random()-.5).slice(0,20);
    else if(src?.startsWith('g'))qs=G.find(g=>g.id==src.slice(1)).ex;
    else qs=S.topic?S.topic.quiz:[];
    S.quiz={questions:qs,idx:0,sel:null,score:0,done:false,final:0,src};render();return;
  }
  if(a==='next'){
    const q=S.quiz,correct=q.sel===q.questions[q.idx].a,ns=q.score+(correct?1:0);
    if(q.idx+1<q.questions.length)S.quiz={...q,idx:q.idx+1,sel:null,score:ns};
    else{S.quiz={...q,done:true,final:ns,score:ns};if(S.topic&&ns>=3){S.progress[S.topic.id]=true;saveProg();}}
    render();return;
  }
  if(el.dataset.pick!==undefined){if(S.quiz.sel!==null)return;S.quiz.sel=parseInt(el.dataset.pick);render();return;}
}

function handleInput(e){
  const ta=e.target.closest('textarea');
  if(ta&&ta.id&&ta.id.startsWith('wr-')){const id=parseInt(ta.id.slice(3));S.writing[id]=ta.value;saveWrite();}
}

render();
