// ════════════════════════════════════════
//  DEUTSCH A1 – script.js
// ════════════════════════════════════════

// ── TOPICS ──
var T=[
{id:1,emoji:'👋',title:'Sich vorstellen',sub:'Greetings & Introductions',color:'#e74c3c',light:'#fdecea',
key:'Hallo! Ich heiße ___. Ich komme aus ___. Ich bin ___ Jahre alt.',ytId:'M7bJMFhcqcI',
vocab:[
{de:'der Name (-n)',vi:'name',ex:'Mein Name ist Linh.',cat:'1. Name 🏷️'},
{de:'der Vorname (-n)',vi:'first name',ex:'Mein Vorname ist Linh.',cat:'1. Name 🏷️'},
{de:'der Nachname (-n)',vi:'surname',ex:'Mein Nachname ist Nguyen.',cat:'1. Name 🏷️'},
{de:'das Alter',vi:'age',ex:'Wie alt bist du?',cat:'2. Alter 🎂'},
{de:'der Geburtstag (-e)',vi:'birthday',ex:'Wann ist dein Geburtstag?',cat:'2. Alter 🎂'},
{de:'geboren',vi:'born',ex:'Ich bin 2000 geboren.',cat:'2. Alter 🎂'},
{de:'das Land (Länder)',vi:'country',ex:'Aus welchem Land kommst du?',cat:'3. Herkunft 🌍'},
{de:'der Geburtsort (-e)',vi:'place of birth',ex:'Mein Geburtsort ist Hanoi.',cat:'3. Herkunft 🌍'},
{de:'die Adresse (-n)',vi:'address',ex:'Wie ist Ihre Adresse?',cat:'4. Wohnort 🏠'},
{de:'die Straße (-n)',vi:'street',ex:'Ich wohne in der Hauptstraße.',cat:'4. Wohnort 🏠'},
{de:'die Sprache (-n)',vi:'language',ex:'Welche Sprachen sprechen Sie?',cat:'5. Sprachen 🗣️'},
{de:'die Muttersprache (-n)',vi:'mother tongue',ex:'Meine Muttersprache ist Vietnamesisch.',cat:'5. Sprachen 🗣️'},
{de:'Deutsch',vi:'German',ex:'Ich lerne Deutsch.',cat:'5. Sprachen 🗣️'},
{de:'der Beruf (-e)',vi:'job / profession',ex:'Was sind Sie von Beruf?',cat:'6. Beruf 💼'},
{de:'arbeiten',vi:'to work',ex:'Ich arbeite in einem Büro.',cat:'6. Beruf 💼'},
{de:'studieren',vi:'to study (uni)',ex:'Ich studiere Informatik.',cat:'6. Beruf 💼'},
{de:'der Student / die Studentin',vi:'university student',ex:'Ich bin Student.',cat:'6. Beruf 💼'},
{de:'verheiratet',vi:'married',ex:'Ich bin verheiratet.',cat:'7. Familienstand 💍'},
{de:'ledig / Single',vi:'single',ex:'Ich bin ledig.',cat:'7. Familienstand 💍'},
{de:'geschieden',vi:'divorced',ex:'Er ist geschieden.',cat:'7. Familienstand 💍'},
{de:'das Hobby (-s)',vi:'hobby',ex:'Mein Hobby ist Lesen.',cat:'8. Hobbys ⚽'},
{de:'die Freizeit',vi:'free time',ex:'In meiner Freizeit lese ich.',cat:'8. Hobbys ⚽'},
{de:'schwimmen',vi:'to swim',ex:'Ich schwimme gern.',cat:'8. Hobbys ⚽'},
{de:'Musik hören',vi:'to listen to music',ex:'Ich höre gern Musik.',cat:'8. Hobbys ⚽'},
{de:'reisen',vi:'to travel',ex:'Ich reise gern.',cat:'8. Hobbys ⚽'},
],
reading:{title:'Gespräch: Nicos erster Tag 🇩🇪',
text:'Nico: Hallo! Ich bin Nico. Ich komme aus Spanien.\nSofia: Hi! Ich heiße Sofia. Wo wohnst du?\nNico: Ich wohne jetzt in München. Wie alt bist du?\nSofia: Ich bin 22! Schön, dich kennenzulernen!\nNico: Schön, dich kennenzulernen, Sofia!',
qs:[{q:'Woher kommt Nico?',a:'Nico kommt aus Spanien.'},{q:'Wo wohnt Nico jetzt?',a:'Nico wohnt jetzt in München.'},{q:'Wie alt ist Sofia?',a:'Sofia ist 22 Jahre alt.'}]},
speaking:['Hallo! Ich heiße ___.','Ich komme aus ___.','Ich wohne in ___.','Ich bin ___ Jahre alt.','Schön, dich kennenzulernen!'],
speakGroups:[
{cat:'1. Name 🏷️',items:[{q:'Wie heißen Sie?',a:'Ich heiße ___.'},{q:'Wie ist Ihr Name?',a:'Mein Name ist ___.'}]},
{cat:'2. Alter 🎂',items:[{q:'Wie alt sind Sie?',a:'Ich bin ___ Jahre alt.'},{q:'Wann sind Sie geboren?',a:'Ich bin am ___ geboren.'}]},
{cat:'3. Herkunft 🌍',items:[{q:'Woher kommen Sie?',a:'Ich komme aus ___.'}]},
{cat:'4. Wohnort 🏠',items:[{q:'Wo wohnen Sie?',a:'Ich wohne in ___.'},{q:'Wie ist Ihre Adresse?',a:'Meine Adresse ist ___.'}]},
{cat:'5. Sprachen 🗣️',items:[{q:'Welche Sprachen sprechen Sie?',a:'Ich spreche ___ und ein bisschen Deutsch.'}]},
{cat:'6. Beruf 💼',items:[{q:'Was sind Sie von Beruf?',a:'Ich bin ___.'},{q:'Arbeitest oder studierst du?',a:'Ich studiere / arbeite bei ___.'}]},
{cat:'7. Familienstand 💍',items:[{q:'Wie ist Ihr Familienstand?',a:'Ich bin ledig / verheiratet.'},{q:'Hast du Kinder?',a:'Ja, ich habe ___ Kinder.'}]},
{cat:'8. Hobbys ⚽',items:[{q:'Was sind Ihre Hobbys?',a:'Mein Hobby ist ___.'},{q:'Was machst du in deiner Freizeit?',a:'In meiner Freizeit ___ ich gern.'}]},
],
writing:{task:'Schreib 3–5 Sätze über dich! ✍️',tmpl:'Ich heiße ___. Ich komme aus ___. Ich wohne in ___. Ich bin ___ Jahre alt.',ex:'Ich heiße Minh. Ich komme aus Vietnam. Ich wohne in Ho-Chi-Minh-Stadt. Ich bin 24 Jahre alt.'},
quiz:[
{q:'What is the German word for "Hello"?',o:['Danke','Hallo','Bitte','Tschüss'],a:1},
{q:'"Wie heißt du?" asks for your ___.',o:['age','name','job','hometown'],a:1},
{q:'Fill in: Ich ___ aus Vietnam.',o:['bin','heiße','komme','wohne'],a:2},
{q:'What does "Auf Wiedersehen" mean?',o:['Hello','Goodbye (formal)','Thank you','Please'],a:1},
{q:'How do you ask for age?',o:['Woher kommst du?','Wie alt bist du?','Wie heißt du?','Wo wohnst du?'],a:1},
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
text:'Das ist meine Familie. Mein Vater heißt Thomas und meine Mutter heißt Sabine. Ich habe eine Schwester. Sie heißt Laura und ist 16 Jahre alt. Mein Bruder Max ist 20 Jahre alt und studiert in Berlin.',
qs:[{q:'Wie heißt Annas Mutter?',a:'Annas Mutter heißt Sabine.'},{q:'Wie alt ist Laura?',a:'Laura ist 16 Jahre alt.'},{q:'Wo studiert Max?',a:'Max studiert in Berlin.'}]},
speaking:['Das ist mein Vater. Er heißt ___.','Meine Mutter heißt ___.','Ich habe ___ Geschwister.','Meine Familie ist klein/groß.'],
writing:{task:'Beschreib deine Familie! ✍️',tmpl:'Mein Vater heißt ___. Meine Mutter heißt ___. Ich habe ___ Bruder/Schwester.',ex:'Mein Vater heißt Minh. Meine Mutter heißt Lan. Ich habe eine Schwester. Sie heißt Hoa.'},
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
text:'Heute ist der 20. April. Das ist Sophias Geburtstag! Sie wird 25 Jahre alt. Die Party ist am Samstag um 19 Uhr. Es kommen 15 Personen.',
qs:[{q:'Wann ist Sophias Geburtstag?',a:'Sophias Geburtstag ist am 20. April.'},{q:'Wie alt wird Sophia?',a:'Sophia wird 25 Jahre alt.'},{q:'Wie viele Personen kommen?',a:'Es kommen 15 Personen.'}]},
speaking:['Heute ist der ___ (Datum).','Ich bin am ___ geboren.','Es ist ___ Uhr.','Das kostet ___ Euro.'],
writing:{task:'Schreib dein Geburtsdatum! ✍️',tmpl:'Ich bin am ___ geboren. Meine Telefonnummer ist ___.',ex:'Ich bin am 5. März 2000 geboren. Meine Telefonnummer ist 0901234567.'},
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
{de:'lecker',vi:'delicious',ex:'Das Essen ist sehr lecker!'},
{de:'die Rechnung (-en)',vi:'bill / check',ex:'Die Rechnung, bitte!'},
],
reading:{title:'Im Restaurant 🍽️',
text:'Kellner: Was möchten Sie trinken?\nKunde: Ein Wasser, bitte. Was empfehlen Sie?\nKellner: Das Schnitzel ist sehr gut. Es kostet 14 Euro.\nKunde: Prima! Ich nehme das Schnitzel.\nKellner: Zusammen macht das 14 Euro.',
qs:[{q:'Was kostet das Schnitzel?',a:'Das Schnitzel kostet 14 Euro.'},{q:'Was möchte der Kunde trinken?',a:'Der Kunde möchte ein Wasser.'},{q:'Was nimmt der Kunde?',a:'Der Kunde nimmt das Schnitzel.'}]},
speaking:['Ich möchte ___, bitte.','Was kostet ___?','Das schmeckt sehr lecker!','Die Rechnung, bitte!'],
writing:{task:'Was isst du zum Frühstück? ✍️',tmpl:'Zum Frühstück esse ich ___. Ich trinke ___.',ex:'Zum Frühstück esse ich Brot mit Butter. Ich trinke Kaffee mit Milch. Das ist sehr lecker!'},
quiz:[
{q:'Ich ___ ein Wasser, bitte. (politely)',o:['will','möchte','nehme','esse'],a:1},
{q:'What does "lecker" mean?',o:['expensive','delicious','cheap','full'],a:1},
{q:'When do you say "Die Rechnung, bitte!"?',o:['When ordering','When paying','When arriving','When reading the menu'],a:1},
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
{de:'das Badezimmer',vi:'bathroom',ex:'Das Bad ist schön.'},
{de:'das Wohnzimmer',vi:'living room',ex:'Im Wohnzimmer steht ein Sofa.'},
{de:'das Schlafzimmer',vi:'bedroom',ex:'Mein Schlafzimmer ist ruhig.'},
{de:'groß / klein',vi:'big / small',ex:'Die Wohnung ist groß.'},
{de:'die Miete (-n)',vi:'rent',ex:'Die Miete ist 800 Euro.'},
{de:'im Erdgeschoss',vi:'on the ground floor',ex:'Ich wohne im Erdgeschoss.'},
],
reading:{title:'Luises neue Wohnung 🏡',
text:'Luise hat eine neue Wohnung in München. Sie hat drei Zimmer: ein Schlafzimmer, ein Wohnzimmer und ein Arbeitszimmer. Die Wohnung ist 65 Quadratmeter groß. Die Miete ist 1.200 Euro pro Monat.',
qs:[{q:'Wie viele Zimmer hat die Wohnung?',a:'Die Wohnung hat drei Zimmer.'},{q:'Wie groß ist die Wohnung?',a:'Die Wohnung hat 65 Quadratmeter.'},{q:'Wie teuer ist die Miete?',a:'Die Miete ist 1.200 Euro pro Monat.'}]},
speaking:['Ich wohne in einer ___.','Die Wohnung hat ___ Zimmer.','Die Miete kostet ___ Euro.','Ich wohne im ___ Stock.'],
writing:{task:'Beschreib deine Wohnung! ✍️',tmpl:'Ich wohne in ___. Meine Wohnung hat ___.',ex:'Ich wohne in einer Wohnung. Meine Wohnung hat 2 Zimmer, eine Küche und ein Bad.'},
quiz:[
{q:'Where do you cook? In the ___.',o:['Schlafzimmer','Küche','Badezimmer','Wohnzimmer'],a:1},
{q:'What does "die Miete" mean?',o:['electricity bill','rent','food bill','internet bill'],a:1},
{q:'You can sleep in the ___.',o:['Wohnzimmer','Küche','Schlafzimmer','Bad'],a:2},
{q:'Opposite of "groß":',o:['schön','teuer','klein','neu'],a:2},
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
{de:'halb',vi:'half past (30 min before)',ex:'Es ist halb acht (=7:30).'},
{de:'der Morgen',vi:'morning',ex:'Am Morgen trinke ich Kaffee.'},
{de:'der Abend (-e)',vi:'evening',ex:'Am Abend lese ich ein Buch.'},
],
reading:{title:'Marias Tagesablauf 📅',
text:'Maria steht um 6:30 Uhr auf. Um 7:00 Uhr frühstückt sie. Um 8:00 Uhr fährt sie zur Arbeit. Sie arbeitet bis 17:00 Uhr. Am Abend kocht sie und geht um 22:30 Uhr schlafen.',
qs:[{q:'Wann steht Maria auf?',a:'Maria steht um 6:30 Uhr auf.'},{q:'Bis wann arbeitet Maria?',a:'Maria arbeitet bis 17:00 Uhr.'},{q:'Was macht sie am Abend?',a:'Sie kocht am Abend.'}]},
speaking:['Ich stehe um ___ Uhr auf.','Um ___ Uhr frühstücke ich.','Es ist ___ Uhr.','Was machst du am Abend?'],
writing:{task:'Beschreib deinen Tagesablauf! ✍️',tmpl:'Um ___ Uhr stehe ich auf. Um ___ Uhr ___. Am Abend ___.',ex:'Um 6 Uhr stehe ich auf. Um 8 Uhr gehe ich zur Arbeit. Am Abend koche ich.'},
quiz:[
{q:'It\'s 7:30. In German:',o:['Es ist halb sieben.','Es ist halb acht.','Es ist Viertel vor acht.','Es ist sieben Uhr.'],a:1},
{q:'Ich ___ um 6 Uhr auf. (aufstehen)',o:['aufstehe','stehe auf','stehe aufstehe','aufstehen'],a:1},
{q:'What does "Tagesablauf" mean?',o:['timetable','daily routine','day off','weekend'],a:1},
{q:'Viertel nach drei = ___',o:['3:14','3:15','2:45','3:45'],a:1},
{q:'Opposite of "aufstehen":',o:['schlafen gehen','frühstücken','arbeiten','kochen'],a:0},
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
text:'Paul spielt gern Gitarre und Fußball. Am Wochenende geht er ins Kino. Paul kann auch kochen. Sein Lieblingshobbys ist aber Reisen. Er war schon in 15 Ländern!',
qs:[{q:'Was spielt Paul gern?',a:'Paul spielt gern Gitarre und Fußball.'},{q:'Was ist Pauls Lieblingshobbys?',a:'Pauls Lieblingshobbys ist Reisen.'},{q:'In wie vielen Ländern war Paul?',a:'Paul war in 15 Ländern.'}]},
speaking:['In meiner Freizeit ___ ich gern.','Ich kann ___ spielen.','Was machst du in deiner Freizeit?'],
writing:{task:'Was sind deine Hobbys? ✍️',tmpl:'In meiner Freizeit ___ ich gern. Ich kann auch ___.',ex:'In meiner Freizeit höre ich gern Musik. Ich kann auch Volleyball spielen.'},
quiz:[
{q:'Ich lese ___ Bücher. (I like reading)',o:['nicht','gern','kein','sehr'],a:1},
{q:'Ich ___ Gitarre spielen. (I can play)',o:['möchte','will','kann','muss'],a:2},
{q:'What does "Freizeit" mean?',o:['study time','free time','work time','weekend'],a:1},
{q:'Opposite of "gern":',o:['sehr gern','nicht gern','auch gern','immer gern'],a:1},
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
text:'Tom sucht ein Hemd.\nVerkäuferin: Welche Größe?\nTom: Größe M, bitte.\nVerkäuferin: Es kostet 39 Euro.\nTom: Das ist teuer. Haben Sie etwas Günstigeres?\nVerkäuferin: Dieses kostet 25 Euro – Sonderangebot!\nTom: Super! Das nehme ich.',
qs:[{q:'Was sucht Tom?',a:'Tom sucht ein Hemd.'},{q:'Was kostet das erste Hemd?',a:'Das erste Hemd kostet 39 Euro.'},{q:'Was kostet das Sonderangebot?',a:'Das Sonderangebot kostet 25 Euro.'}]},
speaking:['Was kostet ___?','Ich nehme ___.','Das ist zu teuer!','Ich bezahle mit Karte/bar.'],
writing:{task:'Schreib einen Einkaufszettel! ✍️',tmpl:'Ich brauche: ___, ___, ___. Das kostet ca. ___ Euro.',ex:'Ich brauche: 1 kg Äpfel, 500g Käse, 1 Brot. Das kostet ca. 8,50 Euro.'},
quiz:[
{q:'Wie viel ___ das Hemd?',o:['ist','hat','kostet','macht'],a:2},
{q:'Ich bezahle ___ Karte.',o:['mit','in','an','bei'],a:0},
{q:'Opposite of "teuer":',o:['groß','billig','neu','schön'],a:1},
{q:'What does "Sonderangebot" mean?',o:['special offer','special size','new item','old item'],a:0},
{q:'Accusative: Ich kaufe ___ Apfel. (der Apfel)',o:['der','die','das','den'],a:3},
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
{de:'die Haltestelle (-n)',vi:'stop',ex:'Die Haltestelle ist um die Ecke.'},
{de:'der Fahrplan (-pläne)',vi:'timetable',ex:'Wo ist der Fahrplan?'},
{de:'ankommen',vi:'to arrive',ex:'Wir kommen um 15 Uhr an.'},
],
reading:{title:'Wie komme ich dahin? 🗺️',
text:'Tourist: Wie komme ich zum Hauptbahnhof?\nPassant: Gehen Sie geradeaus, dann links an der Ampel.\nTourist: Ist es weit?\nPassant: Nein, 10 Minuten zu Fuß. Oder U-Bahn Linie 3.\nTourist: Vielen Dank!\nPassant: Bitte sehr!',
qs:[{q:'Wie weit ist der Bahnhof?',a:'Der Bahnhof ist 10 Minuten zu Fuß entfernt.'},{q:'Welche U-Bahn kann man nehmen?',a:'Man kann die U-Bahn Linie 3 nehmen.'},{q:'Wohin an der Ampel?',a:'Man soll links abbiegen.'}]},
speaking:['Wie komme ich zum ___?','Fahren Sie geradeaus.','Biegen Sie links/rechts ab.','Eine Fahrkarte nach ___, bitte.'],
writing:{task:'Beschreib den Weg zur Arbeit! ✍️',tmpl:'Von meinem Haus fahre ich ___. Dann ___.',ex:'Von meinem Haus fahre ich mit dem Bus. Ich steige an der Haltestelle Innenstadt aus.'},
quiz:[
{q:'Wie ___ ich zum Bahnhof?',o:['fahre','komme','gehe','laufe'],a:1},
{q:'Ich fahre ___ dem Zug.',o:['mit','in','an','auf'],a:0},
{q:'What does "geradeaus" mean?',o:['turn left','turn right','straight ahead','turn back'],a:2},
{q:'Der Zug ___ um 9 Uhr ab.',o:['fahrt','fährt','abfährt','abfahrt'],a:1},
{q:'Entschuldigung, ___ Sie mir helfen?',o:['können','müssen','sollen','dürfen'],a:0},
]},

{id:10,emoji:'🏥',title:'Gesundheit',sub:'Health',color:'#ff5722',light:'#fff3f0',
key:'Ich habe Kopfschmerzen. Ich muss zum Arzt gehen.',ytId:'6MQiDEt-eB4',
vocab:[
{de:'der Arzt / die Ärztin',vi:'doctor',ex:'Ich gehe zum Arzt.'},
{de:'das Krankenhaus',vi:'hospital',ex:'Sie ist im Krankenhaus.'},
{de:'Kopfschmerzen haben',vi:'to have a headache',ex:'Ich habe Kopfschmerzen.'},
{de:'krank',vi:'sick / ill',ex:'Ich bin krank.'},
{de:'gesund',vi:'healthy',ex:'Ich bin wieder gesund!'},
{de:'das Fieber',vi:'fever',ex:'Sie hat hohes Fieber.'},
{de:'die Tablette (-n)',vi:'tablet / pill',ex:'Nehmen Sie 3 Tabletten täglich.'},
{de:'wehtun',vi:'to hurt',ex:'Mein Bauch tut weh.'},
{de:'müssen',vi:'must / to have to',ex:'Ich muss zum Arzt gehen.'},
{de:'der Termin (-e)',vi:'appointment',ex:'Ich brauche einen Arzttermin.'},
],
reading:{title:'Beim Arzt 🩺',
text:'Arzt: Was fehlt Ihnen?\nPatient: Ich habe Kopfschmerzen und Fieber seit gestern.\nArzt: Wie hoch ist das Fieber?\nPatient: 38,5 Grad.\nArzt: Nehmen Sie 3x täglich eine Tablette und bleiben Sie zu Hause.',
qs:[{q:'Was hat der Patient?',a:'Der Patient hat Kopfschmerzen und Fieber.'},{q:'Wie hoch ist das Fieber?',a:'Das Fieber ist 38,5 Grad.'},{q:'Was soll der Patient machen?',a:'Tabletten nehmen und zu Hause bleiben.'}]},
speaking:['Ich habe ___schmerzen.','Mein/Meine ___ tut weh.','Ich brauche einen Arzttermin.'],
writing:{task:'Schreib eine Krankmeldung! ✍️',tmpl:'Ich bin leider krank. Ich habe ___. Ich komme am ___ wieder.',ex:'Ich bin leider krank. Ich habe Fieber. Ich komme am Montag wieder.'},
quiz:[
{q:'My head hurts = Ich habe ___.',o:['Bauchschmerzen','Halsschmerzen','Kopfschmerzen','Fieber'],a:2},
{q:'Ich ___ zum Arzt gehen. (obligation)',o:['kann','möchte','muss','darf'],a:2},
{q:'First thing to do at the doctor:',o:['Tabletten kaufen','Einen Termin machen','Ins Krankenhaus gehen','Nach Hause gehen'],a:1},
{q:'Opposite of "krank":',o:['alt','müde','gesund','jung'],a:2},
{q:'Seit ___ bin ich krank.',o:['wann','wie lange','gestern','morgen'],a:2},
]},
];

// ── GRAMMAR ──
var G=[
{id:1,emoji:'🔤',title:'Artikel: der, die, das',sub:'Definite articles',color:'#e74c3c',
explain:'Every German noun has one of 3 genders. Learn the article together with the noun!',
rules:[
{r:'der (masculine)',ex:['der Mann','der Tisch','der Kaffee'],tip:'Days, months, seasons → usually der'},
{r:'die (feminine)',ex:['die Frau','die Blume','die Stadt'],tip:'Endings -ung, -heit, -keit, -tion → usually die'},
{r:'das (neuter)',ex:['das Kind','das Buch','das Auto'],tip:'Endings -chen, -lein, -um → usually das'},
],
ex:[
{q:'___ Haus ist groß. (neuter)',o:['Der','Die','Das','Ein'],a:2},
{q:'___ Frau ist jung.',o:['Der','Die','Das','Ein'],a:1},
{q:'___ Mann arbeitet viel.',o:['Der','Die','Das','Ein'],a:0},
{q:'___ Kind spielt im Park.',o:['Der','Die','Das','Ein'],a:2},
{q:'___ Stadt ist schön.',o:['Der','Die','Das','Eine'],a:3},
]},
{id:2,emoji:'🏃',title:'sein & haben',sub:'Most important verb conjugations',color:'#3498db',
explain:'sein (to be) and haben (to have) are the 2 most important verbs. Learn them by heart!',
rules:[
{r:'sein – present tense',ex:['ich bin','du bist','er/sie/es ist','wir sind','ihr seid','sie/Sie sind'],tip:'sein + adjective: Ich bin müde.'},
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
explain:'Many verbs have a prefix that splits to the END of the sentence!',
rules:[
{r:'Prefix moves to end',ex:['aufstehen → Ich stehe um 7 Uhr auf.','anrufen → Er ruft sie an.','einkaufen → Wir kaufen ein.'],tip:'Common prefixes: auf-, an-, ein-, aus-, ab-'},
],
ex:[
{q:'Ich ___ um 6 Uhr ___. (aufstehen)',o:['aufstehe/–','stehe/auf','stehe/aufstehen','stehe auf/–'],a:1},
{q:'Er ___ sie ___. (anrufen)',o:['anruft/–','ruft/an','ruf/an','anruf/–'],a:1},
{q:'Wir ___ im Supermarkt ___. (einkaufen)',o:['einkaufen/–','kaufen/einkaufen','kaufen/ein','kaufe ein/–'],a:2},
{q:'Sie ___ abends ___. (fernsehen)',o:['fernsieht/–','sieht/fern','sieht fern/–','fernsiehst/–'],a:1},
{q:'Das Flugzeug ___ um 10 Uhr ___. (abfliegen)',o:['fliegt/ab','abfliegt/–','fliegt abfliegen/–','ab/fliegt'],a:0},
]},
{id:4,emoji:'📌',title:'Nominativ & Akkusativ',sub:'Case 1 & Case 4',color:'#9b59b6',
explain:'Nominativ = subject. Akkusativ = direct object. NOTE: der → den in Akkusativ!',
rules:[
{r:'Nominativ – Wer?',ex:['Der Mann kauft.','Die Frau liest.','Das Kind spielt.'],tip:'Question: Wer? (Who?)'},
{r:'Akkusativ – Wen/Was?',ex:['Ich kaufe den Apfel. (der→den!)','Ich esse die Pizza.','Ich sehe das Kind.'],tip:'KEY: der → DEN in Akkusativ!'},
],
ex:[
{q:'Ich kaufe ___ Apfel. (der Apfel)',o:['der','die','das','den'],a:3},
{q:'___ Mann ist nett. (Nominativ)',o:['Den','Die','Der','Das'],a:2},
{q:'Er kauft ___ Auto. (das Auto)',o:['der','die','das','den'],a:2},
{q:'Sie liest ___ Buch. (das Buch)',o:['der','die','das','den'],a:2},
{q:'Ich kenne ___ Frau. (die Frau)',o:['der','die','das','den'],a:1},
]},
{id:5,emoji:'🔮',title:'Modalverben',sub:'Modal verbs',color:'#f39c12',
explain:'Modal verb in POSITION 2. Main verb goes to END as infinitive.',
rules:[
{r:'können – can',ex:['Ich kann Deutsch sprechen.','Kannst du kochen?'],tip:'Ability / skill'},
{r:'müssen – must',ex:['Ich muss arbeiten.','Du musst lernen.'],tip:'Obligation / necessity'},
{r:'möchten – would like',ex:['Ich möchte ein Bier.','Möchtest du Kaffee?'],tip:'Polite wish'},
{r:'dürfen – may',ex:['Darf ich rauchen?','Hier darf man nicht parken.'],tip:'Permission'},
],
ex:[
{q:'Ich ___ Deutsch sprechen. (ability)',o:['muss','darf','kann','möchte'],a:2},
{q:'Du ___ jeden Tag lernen. (obligation)',o:['kannst','musst','darfst','möchtest'],a:1},
{q:'Er ___ einen Kaffee. (polite wish)',o:['kann','muss','darf','möchte'],a:3},
{q:'___ ich hier parken? (permission)',o:['Kann','Muss','Darf','Möchte'],a:2},
{q:'Ich ___ morgen früh aufstehen.',o:['kann','muss','darf','will'],a:1},
]},
{id:6,emoji:'🏗️',title:'Satzstruktur',sub:'German sentence structure',color:'#1abc9c',
explain:'GOLDEN RULE: Verb ALWAYS in POSITION 2! When adverb starts, subject and verb swap.',
rules:[
{r:'Normal: Subject → Verb → ...',ex:['Ich lerne Deutsch. ✅','Ich kaufe jeden Tag Kaffee. ✅'],tip:'Verb in position 2'},
{r:'Inverted: Adverb → Verb → Subject',ex:['Jeden Morgen trinke ich Kaffee. ✅'],tip:'Subject and verb SWAP when adverb leads!'},
{r:'Yes/No question: Verb → Subject → ...?',ex:['Bist du Student?','Hast du Hunger?'],tip:'Verb comes FIRST'},
],
ex:[
{q:'True or false? "Heute ich gehe in die Schule."',o:['True ✅','False ❌ → Heute gehe ich in die Schule.'],a:1},
{q:'Correct: "Are you hungry?"',o:['Du hast Hunger?','Hast du Hunger?','Hast Hunger du?','Du Hunger hast?'],a:1},
{q:'Which sentence is correct?',o:['Heute ich kaufe Brot.','Ich kaufe heute Brot.','Heute kaufe ich Brot.','Kaufe ich heute Brot.'],a:2},
{q:'Form a question: du / lernen / Deutsch',o:['Lernst du Deutsch?','Du lernst Deutsch?','Deutsch lernst du?','Lernst Deutsch du?'],a:0},
{q:'"Jeden Tag" at start: Jeden Tag ___ ich Kaffee.',o:['ich trinke','trinke ich','ich / trinke','trinke / ich'],a:1},
]},
];

// ── VERBS ──
var VERBS=[
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
{inf:'studieren',en:'to study',type:'regular',conj:{ich:'studiere',du:'studierst',er:'studiert',wir:'studieren',ihr:'studiert',sie:'studieren'}},
{inf:'arbeiten',en:'to work',type:'regular',conj:{ich:'arbeite',du:'arbeitest',er:'arbeitet',wir:'arbeiten',ihr:'arbeitet',sie:'arbeiten'}},
]},
{tid:3,emoji:'🔢',title:'Zahlen & Datum',color:'#27ae60',light:'#edfaf1',verbs:[
{inf:'sein',en:'to be',type:'irregular',conj:{ich:'bin',du:'bist',er:'ist',wir:'sind',ihr:'seid',sie:'sind'}},
{inf:'haben',en:'to have',type:'irregular',conj:{ich:'habe',du:'hast',er:'hat',wir:'haben',ihr:'habt',sie:'haben'}},
{inf:'kosten',en:'to cost',type:'regular',conj:{ich:'koste',du:'kostest',er:'kostet',wir:'kosten',ihr:'kostet',sie:'kosten'}},
{inf:'werden',en:'to become',type:'irregular',conj:{ich:'werde',du:'wirst',er:'wird',wir:'werden',ihr:'werdet',sie:'werden'}},
]},
{tid:4,emoji:'🍕',title:'Essen & Trinken',color:'#f39c12',light:'#fefbf0',verbs:[
{inf:'essen',en:'to eat',type:'irregular (i)',conj:{ich:'esse',du:'isst',er:'isst',wir:'essen',ihr:'esst',sie:'essen'}},
{inf:'trinken',en:'to drink',type:'regular',conj:{ich:'trinke',du:'trinkst',er:'trinkt',wir:'trinken',ihr:'trinkt',sie:'trinken'}},
{inf:'kochen',en:'to cook',type:'regular',conj:{ich:'koche',du:'kochst',er:'kocht',wir:'kochen',ihr:'kocht',sie:'kochen'}},
{inf:'nehmen',en:'to take/order',type:'irregular (i)',conj:{ich:'nehme',du:'nimmst',er:'nimmt',wir:'nehmen',ihr:'nehmt',sie:'nehmen'}},
{inf:'möchten',en:'would like',type:'modal',conj:{ich:'möchte',du:'möchtest',er:'möchte',wir:'möchten',ihr:'möchtet',sie:'möchten'}},
]},
{tid:5,emoji:'🏠',title:'Wohnen',color:'#1abc9c',light:'#edfaf7',verbs:[
{inf:'wohnen',en:'to live',type:'regular',conj:{ich:'wohne',du:'wohnst',er:'wohnt',wir:'wohnen',ihr:'wohnt',sie:'wohnen'}},
{inf:'leben',en:'to reside',type:'regular',conj:{ich:'lebe',du:'lebst',er:'lebt',wir:'leben',ihr:'lebt',sie:'leben'}},
{inf:'sein',en:'to be',type:'irregular',conj:{ich:'bin',du:'bist',er:'ist',wir:'sind',ihr:'seid',sie:'sind'}},
{inf:'haben',en:'to have',type:'irregular',conj:{ich:'habe',du:'hast',er:'hat',wir:'haben',ihr:'habt',sie:'haben'}},
{inf:'kosten',en:'to cost',type:'regular',conj:{ich:'koste',du:'kostest',er:'kostet',wir:'kosten',ihr:'kostet',sie:'kosten'}},
]},
{tid:6,emoji:'⏰',title:'Alltag & Uhrzeiten',color:'#3498db',light:'#eaf4fd',verbs:[
{inf:'aufstehen',en:'to get up',type:'separable',conj:{ich:'stehe auf',du:'stehst auf',er:'steht auf',wir:'stehen auf',ihr:'steht auf',sie:'stehen auf'}},
{inf:'frühstücken',en:'to have breakfast',type:'regular',conj:{ich:'frühstücke',du:'frühstückst',er:'frühstückt',wir:'frühstücken',ihr:'frühstückt',sie:'frühstücken'}},
{inf:'schlafen',en:'to sleep',type:'irregular (ä)',conj:{ich:'schlafe',du:'schläfst',er:'schläft',wir:'schlafen',ihr:'schlaft',sie:'schlafen'}},
{inf:'fahren',en:'to drive/go',type:'irregular (ä)',conj:{ich:'fahre',du:'fährst',er:'fährt',wir:'fahren',ihr:'fahrt',sie:'fahren'}},
{inf:'arbeiten',en:'to work',type:'regular',conj:{ich:'arbeite',du:'arbeitest',er:'arbeitet',wir:'arbeiten',ihr:'arbeitet',sie:'arbeiten'}},
]},
{tid:7,emoji:'⚽',title:'Freizeit & Hobbys',color:'#9b59b6',light:'#f5f0fb',verbs:[
{inf:'spielen',en:'to play',type:'regular',conj:{ich:'spiele',du:'spielst',er:'spielt',wir:'spielen',ihr:'spielt',sie:'spielen'}},
{inf:'lesen',en:'to read',type:'irregular (ie)',conj:{ich:'lese',du:'liest',er:'liest',wir:'lesen',ihr:'lest',sie:'lesen'}},
{inf:'sehen',en:'to see/watch',type:'irregular (ie)',conj:{ich:'sehe',du:'siehst',er:'sieht',wir:'sehen',ihr:'seht',sie:'sehen'}},
{inf:'hören',en:'to listen',type:'regular',conj:{ich:'höre',du:'hörst',er:'hört',wir:'hören',ihr:'hört',sie:'hören'}},
{inf:'können',en:'can',type:'modal',conj:{ich:'kann',du:'kannst',er:'kann',wir:'können',ihr:'könnt',sie:'können'}},
]},
{tid:8,emoji:'🛒',title:'Einkaufen',color:'#e91e63',light:'#fdf0f5',verbs:[
{inf:'kaufen',en:'to buy',type:'regular',conj:{ich:'kaufe',du:'kaufst',er:'kauft',wir:'kaufen',ihr:'kauft',sie:'kaufen'}},
{inf:'bezahlen',en:'to pay',type:'regular',conj:{ich:'bezahle',du:'bezahlst',er:'bezahlt',wir:'bezahlen',ihr:'bezahlt',sie:'bezahlen'}},
{inf:'kosten',en:'to cost',type:'regular',conj:{ich:'koste',du:'kostest',er:'kostet',wir:'kosten',ihr:'kostet',sie:'kosten'}},
{inf:'suchen',en:'to look for',type:'regular',conj:{ich:'suche',du:'suchst',er:'sucht',wir:'suchen',ihr:'sucht',sie:'suchen'}},
{inf:'nehmen',en:'to take',type:'irregular (i)',conj:{ich:'nehme',du:'nimmst',er:'nimmt',wir:'nehmen',ihr:'nehmt',sie:'nehmen'}},
]},
{tid:9,emoji:'🚂',title:'Unterwegs',color:'#00bcd4',light:'#e8f9fb',verbs:[
{inf:'fahren',en:'to drive/go',type:'irregular (ä)',conj:{ich:'fahre',du:'fährst',er:'fährt',wir:'fahren',ihr:'fahrt',sie:'fahren'}},
{inf:'gehen',en:'to go (foot)',type:'regular',conj:{ich:'gehe',du:'gehst',er:'geht',wir:'gehen',ihr:'geht',sie:'gehen'}},
{inf:'kommen',en:'to come',type:'regular',conj:{ich:'komme',du:'kommst',er:'kommt',wir:'kommen',ihr:'kommt',sie:'kommen'}},
{inf:'ankommen',en:'to arrive',type:'separable',conj:{ich:'komme an',du:'kommst an',er:'kommt an',wir:'kommen an',ihr:'kommt an',sie:'kommen an'}},
{inf:'abfahren',en:'to depart',type:'separable',conj:{ich:'fahre ab',du:'fährst ab',er:'fährt ab',wir:'fahren ab',ihr:'fahrt ab',sie:'fahren ab'}},
]},
{tid:10,emoji:'🏥',title:'Gesundheit',color:'#ff5722',light:'#fff3f0',verbs:[
{inf:'wehtun',en:'to hurt',type:'separable',conj:{ich:'tue weh',du:'tust weh',er:'tut weh',wir:'tun weh',ihr:'tut weh',sie:'tun weh'}},
{inf:'fühlen',en:'to feel',type:'regular',conj:{ich:'fühle',du:'fühlst',er:'fühlt',wir:'fühlen',ihr:'fühlt',sie:'fühlen'}},
{inf:'bleiben',en:'to stay',type:'regular',conj:{ich:'bleibe',du:'bleibst',er:'bleibt',wir:'bleiben',ihr:'bleibt',sie:'bleiben'}},
{inf:'müssen',en:'must',type:'modal',conj:{ich:'muss',du:'musst',er:'muss',wir:'müssen',ihr:'müsst',sie:'müssen'}},
{inf:'gehen',en:'to go',type:'regular',conj:{ich:'gehe',du:'gehst',er:'geht',wir:'gehen',ihr:'geht',sie:'gehen'}},
]},
];

// ── STATE ──
var S={
  page:'home',topic:null,grammar:null,skill:'vocab',
  progress:{},writing:{},showAns:{},verbOpen:{},
  fc:{idx:0,flipped:false},
  quiz:{questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null},
  quizInit:false
};
try{var p=localStorage.getItem('da1p');if(p)S.progress=JSON.parse(p);}catch(e){}
try{var w=localStorage.getItem('da1w');if(w)S.writing=JSON.parse(w);}catch(e){}
function saveProg(){try{localStorage.setItem('da1p',JSON.stringify(S.progress));}catch(e){}}
function saveWrite(){try{localStorage.setItem('da1w',JSON.stringify(S.writing));}catch(e){}}

// ── AUDIO ──
var _curAudio=null;
function speak(text){
  if(!text)return;
  var parts=text.split('___').map(function(p){return p.trim();}).filter(function(p){return p.length>0;});
  if(!parts.length)return;
  _stopAudio();
  _speakParts(parts,0);
}
function _stopAudio(){
  if(_curAudio){_curAudio.pause();_curAudio=null;}
  if(window.speechSynthesis)window.speechSynthesis.cancel();
}
function _speakParts(parts,i){
  if(i>=parts.length)return;
  var onEnd=i<parts.length-1?function(){setTimeout(function(){_speakParts(parts,i+1);},2000);}:null;
  var isMob=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMob){_browserTTS(parts[i],onEnd);}
  else{_googleTTS(parts[i],onEnd);}
}
function _googleTTS(text,onEnd){
  try{
    var url='https://translate.googleapis.com/translate_tts?ie=UTF-8&q='+encodeURIComponent(text)+'&tl=de&client=gtx&ttsspeed=0.85';
    var a=new Audio(url);
    if(onEnd)a.addEventListener('ended',onEnd);
    a.play().catch(function(){_browserTTS(text,onEnd);});
    _curAudio=a;
  }catch(e){_browserTTS(text,onEnd);}
}
var _bestVoice=null;
function _loadVoice(){
  if(!window.speechSynthesis)return;
  var vs=window.speechSynthesis.getVoices();
  if(!vs.length)return;
  var tests=[
    function(v){return v.lang==='de-DE'&&v.name.indexOf('Google')>=0;},
    function(v){return v.lang==='de-DE'&&v.name.indexOf('Microsoft')>=0;},
    function(v){return v.lang==='de-DE'&&v.name.indexOf('Anna')>=0;},
    function(v){return v.lang==='de-DE';},
    function(v){return v.lang.indexOf('de')===0;}
  ];
  for(var i=0;i<tests.length;i++){
    for(var j=0;j<vs.length;j++){if(tests[i](vs[j])){_bestVoice=vs[j];return;}}
  }
}
if(window.speechSynthesis){window.speechSynthesis.onvoiceschanged=_loadVoice;_loadVoice();}
function _browserTTS(text,onEnd){
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  setTimeout(function(){
    var u=new SpeechSynthesisUtterance(text);
    u.lang='de-DE';u.rate=0.82;u.pitch=1.0;u.volume=1.0;
    if(_bestVoice)u.voice=_bestVoice;
    if(onEnd)u.onend=onEnd;
    window.speechSynthesis.speak(u);
  },120);
}

// ── HELPERS ──
function esc(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function parseSgPl(de){
  var m=de.match(/^(der|die|das)\s+(\S+)\s+\((.+)\)$/);
  if(!m)return null;
  var art=m[1],noun=m[2],info=m[3];
  var pl=info==='-'?noun:(info.charAt(0)==='-'?noun+info.slice(1):info);
  return{sg:art+' '+noun,pl:'die '+pl};
}
function vocabItem(v){
  var p=parseSgPl(v.de);
  var deLabel=p?p.sg:esc(v.de);
  var deSpeakVal=p?p.sg:v.de;
  return '<div class="vi"><div style="flex:1">'
    +'<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">'
    +'<span style="font-weight:600;font-size:15px">'+esc(deLabel)+'</span>'
    +'<button onclick="speak(\''+encodeURIComponent(deSpeakVal)+'\')" style="background:none;border:none;cursor:pointer;font-size:15px;padding:0">🔊</button>'
    +'</div>'
    +(p?'<div style="display:flex;gap:6px;margin-bottom:4px;flex-wrap:wrap">'
        +'<span style="background:#e8f4fd;border-radius:5px;padding:2px 7px;font-size:12px;color:#2980b9">SG: '+esc(p.sg)+'</span>'
        +'<span style="background:#edfaf1;border-radius:5px;padding:2px 7px;font-size:12px;color:#1a9e5f">PL: '+esc(p.pl)+'</span>'
        +'</div>':'')
    +'<div style="font-size:12px;color:#666;margin-bottom:2px">🇬🇧 '+esc(v.vi)+'</div>'
    +'<div style="font-size:12px;color:#888;font-style:italic">'+esc(v.ex)+'</div>'
    +'</div></div>';
}
function vocabList(vocab){
  var hasCat=vocab.some(function(v){return v.cat;});
  if(!hasCat)return vocab.map(vocabItem).join('');
  var cats={},order=[];
  vocab.forEach(function(v){var c=v.cat||'Other';if(!cats[c]){cats[c]=[];order.push(c);}cats[c].push(v);});
  return order.map(function(cat){
    return '<div style="margin-bottom:16px">'
      +'<div style="font-weight:600;font-size:13px;background:#f0f0f0;padding:7px 12px;border-radius:8px;margin-bottom:8px;color:#333;border-left:4px solid #bbb">📂 '+esc(cat)+'</div>'
      +cats[cat].map(vocabItem).join('')
      +'</div>';
  }).join('');
}

// ── QUIZ FUNCTIONS (inline onclick – most reliable) ──
window._qPick=function(i){
  if(S.quiz.sel!==null)return;
  S.quiz.sel=parseInt(i,10);
  render();
};
window._qNext=function(){
  var q=S.quiz;
  var correct=(q.sel===q.questions[q.idx].a);
  var ns=q.score+(correct?1:0);
  if(q.idx+1<q.questions.length){
    S.quiz={questions:q.questions,idx:q.idx+1,sel:null,score:ns,done:false,final:0,src:q.src};
  }else{
    S.quiz={questions:q.questions,idx:q.idx,sel:q.sel,score:ns,done:true,final:ns,src:q.src};
    if(S.topic&&ns>=3){S.progress[S.topic.id]=true;saveProg();}
  }
  render();
};
window._qRetry=function(){
  var src=S.quiz.src;
  var qs;
  if(src==='main'){
    var all=[];
    T.forEach(function(t){t.quiz.forEach(function(q){all.push(q);});});
    all.sort(function(){return Math.random()-0.5;});
    qs=all.slice(0,20);
  }else if(src&&src.charAt(0)==='g'){
    var gid=parseInt(src.slice(1),10);
    G.forEach(function(g){if(g.id===gid)qs=g.ex;});
  }else if(S.topic){
    qs=S.topic.quiz;
  }else{qs=[];}
  S.quiz={questions:qs,idx:0,sel:null,score:0,done:false,final:0,src:src};
  render();
};

function quizWidget(questions,src){
  if(S.quiz.src!==src){
    S.quiz={questions:questions,idx:0,sel:null,score:0,done:false,final:0,src:src};
  }
  var q=S.quiz;
  if(!q.questions||!q.questions.length){
    S.quiz.questions=questions;
    q=S.quiz;
  }
  if(q.done){
    var pct=Math.round(q.final/questions.length*100);
    var icon=pct===100?'🏆':pct>=60?'⭐':'💪';
    var msg=pct===100?'Perfect! You\'re a star! 🌟':pct>=60?'Well done! Keep it up! 💪':'Practice makes perfect! 📚';
    return '<div style="text-align:center;padding:32px 16px">'
      +'<div style="font-size:56px;margin-bottom:8px">'+icon+'</div>'
      +'<div style="font-size:28px;font-weight:500;margin-bottom:4px">'+q.final+'/'+questions.length+' correct</div>'
      +'<div style="color:#666;margin-bottom:20px">'+msg+'</div>'
      +'<button onclick="window._qRetry()" style="background:#111;color:#fff;border:none;border-radius:8px;padding:12px 24px;cursor:pointer;font-size:15px;font-weight:500;-webkit-appearance:none">Try again 🔄</button>'
      +'</div>';
  }
  var qi=questions[q.idx];
  var answered=(q.sel!==null);
  var html='<div>'
    +'<div style="display:flex;justify-content:space-between;margin-bottom:12px">'
    +'<span style="font-size:13px;color:#666">Question '+(q.idx+1)+' / '+questions.length+'</span>'
    +'<span style="font-size:13px;color:#666">✅ '+q.score+' correct</span>'
    +'</div>'
    +'<div style="background:#fff8e1;border-left:4px solid #FFCE00;border-radius:0 8px 8px 0;padding:12px 16px;margin-bottom:16px">'
    +'<p style="margin:0;font-size:16px;font-weight:500">'+esc(qi.q)+'</p>'
    +'</div>';
  for(var i=0;i<qi.o.length;i++){
    var bg='#fff',border='1.5px solid #ddd',col='#111',prefix='';
    if(answered){
      if(i===qi.a){bg='#edfaf1';border='2px solid #1a9e5f';prefix='✅ ';}
      else if(i===q.sel){bg='#fdf2f2';border='2px solid #e74c3c';col='#c0392b';prefix='❌ ';}
    }
    var clickAttr=answered?'':'onclick="window._qPick('+i+')"';
    html+='<button '+clickAttr+' style="display:block;width:100%;padding:12px 14px;margin-bottom:8px;border-radius:8px;border:'+border+';background:'+bg+';color:'+col+';cursor:'+(answered?'default':'pointer')+';text-align:left;font-size:15px;font-family:system-ui,sans-serif;-webkit-appearance:none">'+prefix+esc(qi.o[i])+'</button>';
  }
  if(answered){
    var nLabel=(q.idx+1<questions.length)?'Next →':'See results 🏆';
    html+='<button onclick="window._qNext()" style="margin-top:8px;background:#111;color:#fff;border:none;border-radius:8px;padding:12px 24px;cursor:pointer;font-size:15px;font-weight:500;-webkit-appearance:none">'+nLabel+'</button>';
  }
  html+='</div>';
  return html;
}

// ── RENDER ──
function render(){
  document.getElementById('app').innerHTML=navHtml()+pageHtml();
}

function navHtml(){
  var links=[['home','🏠 Home'],['topics','📚 Topics'],['grammar','✏️ Grammar'],['verbs','🔄 Verbs'],['quiz','🏆 Quiz']];
  var html='<nav class="nav"><span style="color:#FFCE00;font-size:20px;margin-right:8px">🇩🇪</span><span class="nav-title">Deutsch A1</span>';
  links.forEach(function(l){
    var active=(S.page===l[0]&&!S.topic&&!S.grammar);
    html+='<button onclick="goPage(\''+l[0]+'\')" class="nb'+(active?' active':'')+'">'+l[1]+'</button>';
  });
  return html+'</nav>';
}

function pageHtml(){
  if(S.topic)return topicDetailHtml();
  if(S.grammar)return grammarDetailHtml();
  if(S.page==='home')return homeHtml();
  if(S.page==='topics')return topicsHtml();
  if(S.page==='grammar')return grammarHtml();
  if(S.page==='verbs')return verbsHtml();
  if(S.page==='quiz')return quizPageHtml();
  return homeHtml();
}

// ── NAV ACTIONS ──
window.goPage=function(p){
  if(p==='random'){
    S.topic=T[Math.floor(Math.random()*T.length)];
    S.skill='vocab';S.fc={idx:0,flipped:false};
    S.quiz={questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null};
  }else{
    S.page=p;S.topic=null;S.grammar=null;
    if(p!=='quiz')S.quizInit=false;
  }
  render();
};
window.openTopic=function(id){
  T.forEach(function(t){if(t.id===id){S.topic=t;}});
  S.skill='vocab';S.fc={idx:0,flipped:false};
  S.quiz={questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null};
  render();
};
window.openGrammar=function(id){
  G.forEach(function(g){if(g.id===id){S.grammar=g;}});
  S.quiz={questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null};
  render();
};
window.goBack=function(){
  if(S.topic){S.topic=null;}else{S.grammar=null;}
  render();
};
window.setSkill=function(s){
  S.skill=s;
  S.quiz={questions:[],idx:0,sel:null,score:0,done:false,final:0,src:null};
  render();
};
window.showAns=function(key){S.showAns[key]=true;render();};
window.markDone=function(){S.progress[S.topic.id]=true;saveProg();render();};
window.flipCard=function(){S.fc.flipped=!S.fc.flipped;render();};
window.fcPrev=function(){S.fc.idx=(S.fc.idx-1+S.topic.vocab.length)%S.topic.vocab.length;S.fc.flipped=false;render();};
window.fcNext=function(){S.fc.idx=(S.fc.idx+1)%S.topic.vocab.length;S.fc.flipped=false;render();};
window.toggleVerb=function(tid){S.verbOpen[tid]=!S.verbOpen[tid];render();};
window.spk=function(enc){speak(decodeURIComponent(enc));};

// ── PAGES ──
function homeHtml(){
  var done=Object.keys(S.progress).length;
  var btns=[
    {l:'All Topics 📚',d:'10 themes A1',c:'#e74c3c',n:'topics'},
    {l:'Grammar ✏️',d:'6 lessons',c:'#3498db',n:'grammar'},
    {l:'Verbs 🔄',d:'10 topics',c:'#1abc9c',n:'verbs'},
    {l:'Quiz 🏆',d:'Test everything',c:'#f39c12',n:'quiz'},
    {l:'Random 🎲',d:'Surprise me!',c:'#9b59b6',n:'random'}
  ];
  var html='<div class="hero">'
    +'<div style="font-size:64px;margin-bottom:8px">🐻</div>'
    +'<h1 style="color:#fff;font-size:22px;font-weight:500;margin-bottom:6px">Deutsch A1 – Lern mit Spaß!</h1>'
    +'<p style="color:#aaa;font-size:14px;margin-bottom:20px">Based on Goethe Institut &amp; Prima Plus curriculum 🎓</p>'
    +'<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;'+(done?'margin-bottom:16px':'')+'>">'
    +'<div class="badge"><span style="color:#FFCE00;font-weight:500">'+done+'/10</span><span style="color:#aaa;font-size:13px"> Topics</span></div>'
    +'<div class="badge" style="border-color:#cc0000;background:rgba(204,0,0,.15)"><span style="color:#ff6b6b;font-weight:500">10</span><span style="color:#aaa;font-size:13px"> Quizzes</span></div>'
    +'<div class="badge" style="border-color:#1a9e5f;background:rgba(26,158,95,.15)"><span style="color:#2ecc71;font-weight:500">6</span><span style="color:#aaa;font-size:13px"> Grammar</span></div>'
    +'</div>'
    +(done?'<div class="pbg"><div class="pfill" style="width:'+(done*10)+'%"></div></div><p style="color:#FFCE00;font-size:12px;margin-top:6px">'+(done*10)+'% completed!</p>':'')
    +'</div>'
    +'<div class="page">'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px">';
  btns.forEach(function(b){
    html+='<button onclick="goPage(\''+b.n+'\')" style="background:'+b.c+';color:#fff;border:none;border-radius:12px;padding:16px 12px;cursor:pointer;text-align:left;width:100%;-webkit-appearance:none"><div style="font-size:15px;font-weight:500">'+b.l+'</div><div style="font-size:12px;opacity:.85;margin-top:2px">'+b.d+'</div></button>';
  });
  html+='</div><h2 style="margin-bottom:12px">All Topics 🗺️</h2><div class="g2">';
  T.forEach(function(t){
    html+='<button onclick="openTopic('+t.id+')" style="background:'+(S.progress[t.id]?t.light:'#fff')+';border:1.5px solid '+(S.progress[t.id]?t.color:'#e0e0e0')+';border-radius:12px;padding:12px 14px;cursor:pointer;display:flex;align-items:center;gap:10px;text-align:left;width:100%;-webkit-appearance:none">'
      +'<span style="font-size:24px">'+t.emoji+'</span>'
      +'<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(t.title)+'</div><div style="font-size:11px;color:#666">'+esc(t.sub)+'</div></div>'
      +(S.progress[t.id]?'<span style="font-size:16px">✅</span>':'')
      +'</button>';
  });
  return html+'</div></div>';
}

function topicsHtml(){
  var html='<div class="page"><h2 style="padding-top:16px;margin-bottom:14px">📚 All 10 Topics</h2><div style="display:flex;flex-direction:column;gap:10px">';
  T.forEach(function(t){
    html+='<button onclick="openTopic('+t.id+')" style="background:#fff;border:1.5px solid '+(S.progress[t.id]?t.color:'#e8e8e8')+';border-radius:12px;padding:14px 16px;cursor:pointer;display:flex;align-items:center;gap:14px;text-align:left;width:100%;-webkit-appearance:none">'
      +'<div style="width:48px;height:48px;border-radius:12px;background:'+t.light+';display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">'+t.emoji+'</div>'
      +'<div style="flex:1"><div style="font-size:15px;font-weight:500;margin-bottom:2px">'+esc(t.title)+'</div><div style="font-size:12px;color:#666">'+esc(t.sub)+'</div></div>'
      +(S.progress[t.id]?'<span style="font-size:18px">✅</span>':'<span style="color:#aaa">→</span>')
      +'</button>';
  });
  return html+'</div></div>';
}

function topicDetailHtml(){
  var t=S.topic;
  var tabs=[{id:'vocab',l:'📇 Vocabulary'},{id:'hoeren',l:'🎧 Listening'},{id:'sprechen',l:'🗣️ Speaking'},{id:'lesen',l:'📖 Reading'},{id:'schreiben',l:'✍️ Writing'},{id:'quiz',l:'🎯 Quiz'}];
  var html='<div>'
    +'<div style="background:'+t.color+';padding:20px 16px 16px">'
    +'<button onclick="goBack()" style="background:rgba(0,0,0,.2);border:none;color:#fff;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:13px;margin-bottom:12px;-webkit-appearance:none">← Back</button>'
    +'<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">'
    +'<span style="font-size:40px">'+t.emoji+'</span>'
    +'<div><h2 style="color:#fff;font-size:20px">'+esc(t.title)+'</h2><p style="color:rgba(255,255,255,.8);font-size:13px;margin:0">'+esc(t.sub)+'</p></div>'
    +'</div>'
    +'<div style="background:rgba(0,0,0,.25);border-radius:10px;padding:10px 14px">'
    +'<span style="color:rgba(255,255,255,.7);font-size:11px">⭐ KEY TAKEAWAY</span>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-top:4px">'
    +'<p style="color:#fff;font-style:italic;font-size:14px;flex:1;margin:0">'+esc(t.key)+'</p>'
    +'<button onclick="spk(\''+encodeURIComponent(t.key)+'\')" style="background:rgba(255,255,255,.2);border:none;color:#fff;border-radius:6px;padding:4px 8px;cursor:pointer;font-size:16px;-webkit-appearance:none">🔊</button>'
    +'</div></div></div>'
    +'<div class="skill-tabs"><div class="skill-tabs-inner">';
  tabs.forEach(function(s){
    html+='<button onclick="setSkill(\''+s.id+'\')" class="stab'+(S.skill===s.id?' active':'')+'" style="'+(S.skill===s.id?'border-bottom-color:'+t.color+';color:'+t.color:'')+'">'+s.l+'</button>';
  });
  html+='</div></div><div class="page" style="padding-top:16px">'+skillHtml(t);
  if(S.skill!=='quiz'){
    html+='<div style="text-align:center;margin-top:20px"><button onclick="markDone()" style="background:'+(S.progress[t.id]?'#1a9e5f':'#555')+';color:#fff;border:none;border-radius:8px;padding:10px 20px;cursor:pointer;font-size:14px;font-weight:500;-webkit-appearance:none">'+(S.progress[t.id]?'✅ Completed!':'Mark as completed')+'</button></div>';
  }
  return html+'</div></div>';
}

function skillHtml(t){
  if(S.skill==='vocab')return vocabSkillHtml(t);
  if(S.skill==='hoeren')return hoerenHtml(t);
  if(S.skill==='sprechen')return sprechenHtml(t);
  if(S.skill==='lesen')return lesenHtml(t);
  if(S.skill==='schreiben')return schreibenHtml(t);
  if(S.skill==='quiz')return '<div class="card"><h3 style="margin-bottom:14px">🎯 Quiz: '+esc(t.title)+'</h3>'+quizWidget(t.quiz,'t'+t.id)+'</div>';
  return vocabSkillHtml(t);
}

function vocabSkillHtml(t){
  var fc=S.fc;var card=t.vocab[fc.idx];var p=parseSgPl(card.de);
  var deLabel=p?p.sg:esc(card.de);var deSpeakEnc=encodeURIComponent(p?p.sg:card.de);
  var html='<div style="background:'+t.light+';border-radius:12px;padding:16px;margin-bottom:16px">'
    +'<h3 style="color:'+t.color+';margin-bottom:12px">🃏 Flashcards – Tap to flip!</h3>'
    +'<div onclick="flipCard()" class="flashcard'+(fc.flipped?' flip':'')+'">';
  if(!fc.flipped){
    html+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">'
      +'<span style="font-size:22px;font-weight:600">'+esc(deLabel)+'</span>'
      +'<button onclick="event.stopPropagation();spk(\''+deSpeakEnc+'\')" style="background:none;border:none;cursor:pointer;font-size:18px;padding:0;-webkit-appearance:none">🔊</button>'
      +'</div>'
      +(p?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px"><span style="background:#e8f4fd;border-radius:6px;padding:3px 8px;font-size:12px;color:#2980b9">SG: '+esc(p.sg)+'</span><span style="background:#edfaf1;border-radius:6px;padding:3px 8px;font-size:12px;color:#1a9e5f">PL: '+esc(p.pl)+'</span></div>':'')
      +'<div style="font-size:12px;color:#666">Tap to flip</div>';
  }else{
    var exEnc=encodeURIComponent(card.ex);
    html+='<div style="font-size:16px;color:#555;font-weight:500;margin-bottom:8px">'+esc(card.vi)+'</div>'
      +(p?'<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:8px"><span style="background:#e8f4fd;border-radius:6px;padding:4px 10px;font-size:13px;color:#2980b9;font-weight:500">📌 SG: '+esc(p.sg)+'</span><span style="background:#edfaf1;border-radius:6px;padding:4px 10px;font-size:13px;color:#1a9e5f;font-weight:500">📌 PL: '+esc(p.pl)+'</span></div>':'')
      +'<div style="font-size:13px;color:#888;font-style:italic;margin-bottom:8px">"'+esc(card.ex)+'"</div>'
      +'<button onclick="event.stopPropagation();spk(\''+exEnc+'\')" style="background:none;border:none;cursor:pointer;font-size:15px;-webkit-appearance:none">🔊 Example</button>';
  }
  html+='</div>'
    +'<div class="fcnav">'
    +'<button onclick="fcPrev()" class="smb">←</button>'
    +'<span style="font-size:13px;color:#666">'+(fc.idx+1)+' / '+t.vocab.length+'</span>'
    +'<button onclick="fcNext()" class="smb">→</button>'
    +'</div></div>'
    +'<h3 style="font-size:14px;color:#555;margin-bottom:10px">📋 All Vocabulary</h3>'
    +vocabList(t.vocab);
  return html;
}

function hoerenHtml(t){
  var lines=t.reading.text.split('\n');
  var lineHtml=lines.map(function(line){
    return '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #f5f5f5">'
      +'<button onclick="spk(\''+encodeURIComponent(line)+'\')" style="background:none;border:none;cursor:pointer;font-size:16px;-webkit-appearance:none">🔊</button>'
      +'<span style="font-size:13px;color:#333">'+esc(line)+'</span>'
      +'</div>';
  }).join('');
  return '<div style="background:#f8f8f8;border-radius:12px;padding:16px;margin-bottom:16px">'
    +'<h3 style="margin-bottom:12px">🎬 Video: '+esc(t.title)+'</h3>'
    +'<div class="yw"><iframe src="https://www.youtube-nocookie.com/embed/'+t.ytId+'?rel=0" frameborder="0" allowfullscreen></iframe></div>'
    +'</div>'
    +'<div style="background:#fff8e1;border:1px solid #FFCE00;border-radius:12px;padding:16px">'
    +'<h3 style="margin-bottom:10px">🎧 Listen line by line</h3>'
    +lineHtml+'</div>';
}

function sprechenHtml(t){
  if(t.speakGroups){
    var html='<div style="background:#edfaf7;border:1px solid #1abc9c;border-radius:12px;padding:16px;margin-bottom:16px">'
      +'<h3 style="color:#0e8c6f;margin-bottom:4px">🗣️ Questions & Answers</h3>'
      +'<p style="font-size:13px;color:#555;margin-bottom:14px">Press 🔊 → Listen → Repeat!</p>';
    t.speakGroups.forEach(function(group){
      html+='<div style="margin-bottom:16px"><div style="font-weight:600;font-size:13px;background:rgba(26,188,156,.15);padding:7px 12px;border-radius:8px;margin-bottom:8px;color:#0e8c6f;border-left:4px solid #1abc9c">'+esc(group.cat)+'</div>';
      group.items.forEach(function(item){
        html+='<div style="background:#fff;border-radius:10px;padding:12px 14px;margin-bottom:8px">'
          +'<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px">'
          +'<span style="font-size:11px;background:#3498db;color:#fff;border-radius:4px;padding:2px 6px;flex-shrink:0;margin-top:2px">Q</span>'
          +'<span style="font-size:14px;color:#111;flex:1">'+esc(item.q)+'</span>'
          +'<button onclick="spk(\''+encodeURIComponent(item.q)+'\')" style="background:none;border:none;cursor:pointer;font-size:15px;-webkit-appearance:none">🔊</button>'
          +'</div>'
          +'<div style="display:flex;align-items:flex-start;gap:8px">'
          +'<span style="font-size:11px;background:#1a9e5f;color:#fff;border-radius:4px;padding:2px 6px;flex-shrink:0;margin-top:2px">A</span>'
          +'<span style="font-size:14px;color:#555;font-style:italic;flex:1">'+esc(item.a)+'</span>'
          +'<button onclick="spk(\''+encodeURIComponent(item.a)+'\')" style="background:none;border:none;cursor:pointer;font-size:15px;-webkit-appearance:none">🔊</button>'
          +'</div></div>';
      });
      html+='</div>';
    });
    return html+'</div>';
  }
  var html2='<div style="background:#edfaf7;border:1px solid #1abc9c;border-radius:12px;padding:16px;margin-bottom:16px">'
    +'<h3 style="color:#0e8c6f;margin-bottom:4px">🗣️ Repeat out loud!</h3>'
    +'<p style="font-size:13px;color:#555;margin-bottom:14px">Press 🔊 → Listen → Speak along!</p>';
  t.speaking.forEach(function(s){
    html2+='<div style="background:#fff;border-radius:10px;padding:12px 14px;margin-bottom:8px;display:flex;align-items:center;gap:10px">'
      +'<button onclick="spk(\''+encodeURIComponent(s)+'\')" style="background:#1abc9c;color:#fff;border:none;border-radius:6px;padding:6px 10px;cursor:pointer;font-size:15px;flex-shrink:0;-webkit-appearance:none">🔊</button>'
      +'<span style="font-size:15px">'+esc(s)+'</span>'
      +'</div>';
  });
  return html2+'</div>';
}

function lesenHtml(t){
  var lines=t.reading.text.split('\n').map(function(l){return '<p style="font-size:14px;line-height:1.7;color:#222;margin-bottom:8px">'+esc(l)+'</p>';}).join('');
  var qsHtml=t.reading.qs.map(function(q,i){
    var key=t.id+'-'+i;
    return '<div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px">'
      +'<p style="font-size:14px;font-weight:500;margin-bottom:6px">'+(i+1)+'. '+esc(q.q)+'</p>'
      +(S.showAns[key]
        ?'<p style="font-size:14px;color:#1a9e5f;font-style:italic;margin:0">✅ '+esc(q.a)+'</p>'
        :'<button onclick="showAns(\''+key+'\')" style="font-size:12px;background:#3498db;color:#fff;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;-webkit-appearance:none">Show answer</button>')
      +'</div>';
  }).join('');
  return '<div style="background:#fff;border:1px solid #eee;border-radius:12px;padding:16px;margin-bottom:16px">'
    +'<h3 style="margin-bottom:12px">'+esc(t.reading.title)+'</h3>'+lines+'</div>'
    +'<div style="background:#eaf4fd;border:1px solid #3498db;border-radius:12px;padding:16px">'
    +'<h3 style="color:#2980b9;margin-bottom:12px">❓ Comprehension questions</h3>'+qsHtml+'</div>';
}

function schreibenHtml(t){
  var saved=S.writing[t.id]||'';
  return '<div style="background:#fff8e1;border:1px solid #FFCE00;border-radius:12px;padding:16px;margin-bottom:16px">'
    +'<h3 style="margin-bottom:10px">'+esc(t.writing.task)+'</h3>'
    +'<div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:12px">'
    +'<p style="font-size:12px;color:#666;margin-bottom:4px">📝 Template</p>'
    +'<p style="font-size:14px;color:#333;font-style:italic;margin:0">'+esc(t.writing.tmpl)+'</p>'
    +'</div>'
    +'<textarea class="tarea" id="wr-'+t.id+'" oninput="saveWriting('+t.id+',this.value)" placeholder="Write your text here...">'+esc(saved)+'</textarea>'
    +'</div>'
    +'<div style="background:#edfaf1;border:1px solid #27ae60;border-radius:12px;padding:16px">'
    +'<h3 style="color:#1a7a4a;margin-bottom:8px">✅ Example answer</h3>'
    +'<p style="font-size:14px;color:#333;font-style:italic;margin-bottom:8px">'+esc(t.writing.ex)+'</p>'
    +'<button onclick="spk(\''+encodeURIComponent(t.writing.ex)+'\')" style="border:1px solid #27ae60;color:#1a7a4a;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:13px;background:none;-webkit-appearance:none">🔊 Listen</button>'
    +'</div>';
}
window.saveWriting=function(id,val){S.writing[id]=val;saveWrite();};

function grammarHtml(){
  var html='<div class="page"><h2 style="padding-top:16px;margin-bottom:4px">✏️ Grammar A1</h2><p style="color:#666;font-size:13px;margin-bottom:16px">Based on Goethe Institut &amp; Prima Plus</p><div style="display:flex;flex-direction:column;gap:12px">';
  G.forEach(function(g){
    html+='<button onclick="openGrammar('+g.id+')" style="background:#fff;border:1.5px solid #eee;border-radius:12px;padding:14px 16px;cursor:pointer;display:flex;align-items:center;gap:14px;text-align:left;width:100%;-webkit-appearance:none">'
      +'<div style="width:48px;height:48px;border-radius:12px;background:'+g.color+'22;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">'+g.emoji+'</div>'
      +'<div style="flex:1"><div style="font-size:15px;font-weight:500;margin-bottom:2px">'+esc(g.title)+'</div><div style="font-size:12px;color:#666;margin-bottom:4px">'+esc(g.sub)+'</div><div style="font-size:12px;color:#777">'+esc(g.explain.slice(0,60))+'...</div></div>'
      +'<span style="color:#aaa">→</span>'
      +'</button>';
  });
  return html+'</div></div>';
}

function grammarDetailHtml(){
  var g=S.grammar;
  var rulesHtml=g.rules.map(function(r){
    var exHtml=r.ex.map(function(e){
      return '<div style="display:flex;align-items:center;gap:4px">'
        +'<span style="background:#f5f5f5;border-radius:6px;padding:4px 8px;font-size:13px;font-family:monospace">'+esc(e)+'</span>'
        +'<button onclick="spk(\''+encodeURIComponent(e)+'\')" style="background:none;border:none;cursor:pointer;font-size:13px;-webkit-appearance:none">🔊</button>'
        +'</div>';
    }).join('');
    return '<div class="card">'
      +'<div style="font-weight:500;font-size:14px;color:'+g.color+';margin-bottom:8px">'+esc(r.r)+'</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">'+exHtml+'</div>'
      +'<div style="background:'+g.color+'11;border-radius:6px;padding:6px 10px;font-size:12px;color:#555">💡 '+esc(r.tip)+'</div>'
      +'</div>';
  }).join('');
  return '<div>'
    +'<div style="background:'+g.color+';padding:20px 16px 16px">'
    +'<button onclick="goBack()" style="background:rgba(0,0,0,.2);border:none;color:#fff;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:13px;margin-bottom:12px;-webkit-appearance:none">← Back</button>'
    +'<div style="display:flex;gap:12px;align-items:center">'
    +'<span style="font-size:40px">'+g.emoji+'</span>'
    +'<div><h2 style="color:#fff;font-size:19px">'+esc(g.title)+'</h2><p style="color:rgba(255,255,255,.8);font-size:13px;margin:0">'+esc(g.sub)+'</p></div>'
    +'</div></div>'
    +'<div class="page" style="padding-top:16px">'
    +'<div style="background:#fff8e1;border:1px solid #FFCE00;border-radius:10px;padding:14px;margin-bottom:16px"><p style="font-size:14px;color:#555;margin:0">'+esc(g.explain)+'</p></div>'
    +rulesHtml
    +'<div class="card"><h3 style="color:'+g.color+';margin-bottom:14px">🎯 Exercises</h3>'+quizWidget(g.ex,'g'+g.id)+'</div>'
    +'</div></div>';
}

function verbsHtml(){
  var typeColors={regular:'#78909c',irregular:'#e67e22',separable:'#3498db',modal:'#9b59b6'};
  var pronouns=['ich','du','er/sie/es','wir','ihr','sie/Sie'];
  var keys=['ich','du','er','wir','ihr','sie'];
  var html='<div class="page">'
    +'<div style="padding-top:16px;margin-bottom:16px">'
    +'<h2 style="margin-bottom:4px">🔄 Verb Conjugations – Present Tense</h2>'
    +'<p style="color:#666;font-size:13px;margin-bottom:10px">10 topics · Click to expand · Press 🔊</p>'
    +'<div style="display:flex;gap:6px;flex-wrap:wrap">';
  Object.keys(typeColors).forEach(function(t){
    html+='<span style="background:'+typeColors[t]+';color:#fff;border-radius:4px;padding:3px 9px;font-size:11px">'+t+'</span>';
  });
  html+='</div></div>';
  VERBS.forEach(function(topic){
    var open=!!S.verbOpen[topic.tid];
    html+='<div style="margin-bottom:10px;border-radius:12px;overflow:hidden;border:1.5px solid '+(open?topic.color:'#e0e0e0')+'">'
      +'<button onclick="toggleVerb('+topic.tid+')" style="width:100%;background:'+(open?topic.color:'#fff')+';border:none;padding:14px 16px;cursor:pointer;display:flex;align-items:center;gap:12px;text-align:left;-webkit-appearance:none">'
      +'<div style="width:44px;height:44px;border-radius:10px;background:'+(open?'rgba(255,255,255,.2)':topic.light)+';display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">'+topic.emoji+'</div>'
      +'<div style="flex:1"><div style="font-size:15px;font-weight:600;color:'+(open?'#fff':'#111')+'">'+esc(topic.title)+'</div>'
      +'<div style="font-size:12px;color:'+(open?'rgba(255,255,255,.8)':'#888')+';margin-top:2px">'+topic.verbs.length+' verbs</div></div>'
      +'<span style="font-size:18px;color:'+(open?'#fff':'#bbb')+';display:inline-block;transform:rotate('+(open?180:0)+'deg)">▼</span>'
      +'</button>';
    if(open){
      html+='<div style="background:#fff;border-top:1px solid '+topic.color+'33">';
      topic.verbs.forEach(function(v,vi){
        var tkey=Object.keys(typeColors).find(function(k){return v.type.indexOf(k)===0;})||'regular';
        var tcol=typeColors[tkey]||'#78909c';
        html+='<div style="padding:14px 16px;'+(vi<topic.verbs.length-1?'border-bottom:1px solid '+topic.color+'22':'')+'">'
          +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-wrap:wrap">'
          +'<span style="font-size:17px;font-weight:700;color:#111">'+esc(v.inf)+'</span>'
          +'<button onclick="spk(\''+encodeURIComponent(v.inf)+'\')" style="background:none;border:none;cursor:pointer;font-size:15px;-webkit-appearance:none">🔊</button>'
          +'<span style="font-size:13px;color:#777;font-style:italic">'+esc(v.en)+'</span>'
          +'<span style="margin-left:auto;background:'+tcol+';color:#fff;border-radius:4px;padding:2px 7px;font-size:11px;font-weight:500">'+esc(v.type)+'</span>'
          +'</div>'
          +'<div style="border-radius:8px;overflow:hidden;border:1px solid #eee">';
        for(var i=0;i<pronouns.length;i++){
          var form=v.conj[keys[i]];
          var bg=i%2===0?'#fff':'#fafafa';
          var spkVal=pronouns[i].split('/')[0].trim()+' '+form;
          html+='<div style="display:grid;grid-template-columns:110px 1fr 36px;background:'+bg+';border-bottom:'+(i<5?'1px solid #f0f0f0':'none')+'">'
            +'<div style="padding:8px 12px;font-size:13px;color:#666;border-right:1px solid #f0f0f0">'+esc(pronouns[i])+'</div>'
            +'<div style="padding:8px 12px;font-size:15px;font-weight:600;color:'+topic.color+'">'+esc(form)+'</div>'
            +'<div style="padding:6px 4px;display:flex;align-items:center;justify-content:center">'
            +'<button onclick="spk(\''+encodeURIComponent(spkVal)+'\')" style="background:none;border:none;cursor:pointer;font-size:14px;-webkit-appearance:none">🔊</button>'
            +'</div></div>';
        }
        html+='</div></div>';
      });
      html+='</div>';
    }
    html+='</div>';
  });
  return html+'</div>';
}

function quizPageHtml(){
  if(!S.quizInit){
    var all=[];
    T.forEach(function(t){t.quiz.forEach(function(q){all.push(q);});});
    all.sort(function(){return Math.random()-0.5;});
    S.quiz={questions:all.slice(0,20),idx:0,sel:null,score:0,done:false,final:0,src:'main'};
    S.quizInit=true;
  }
  return '<div class="page">'
    +'<div style="background:linear-gradient(135deg,#CC0000,#8B0000);border-radius:16px;padding:24px 20px;text-align:center;margin-top:16px;margin-bottom:20px;color:#fff">'
    +'<div style="font-size:48px;margin-bottom:8px">🏆</div>'
    +'<h2 style="color:#fff;font-size:20px;font-weight:500;margin-bottom:6px">A1 Quiz Challenge!</h2>'
    +'<p style="font-size:13px;opacity:.85;margin:0">20 random questions · Viel Erfolg!</p>'
    +'</div>'
    +'<div class="card">'+quizWidget(S.quiz.questions,'main')+'</div>'
    +'</div>';
}

// ── INIT ──
render();
