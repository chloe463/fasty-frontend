export interface Course {
  title: string;
  description?: string;
  lessons: LessonData[]; // TODO: rename to Lesson after current `Lesson` component renamed to `LessonView`
}

export interface LessonData {
  title: string;
  sentences: string[];
  scramble?: boolean;
}

const abcd: Course = {
  title: "A Basic Course in Dvorak",
  description: "Source: http://gigliwood.com/abcd/", // TODO: fix link
  lessons: [
    {
      title: "Lesson 1 Introducing U and H: Home row, Index fingers",
      sentences: [
        "uuuu hhhh uuuu hhhh  uuuu hhhh uuuu hhhh",
        "uuuu hhhh uuuu hhhh  uuuu hhhh uuuu hhhh",
        "uh uh uh uh",
        "hu hu hu hu",
        "huh huh huh huh",
        "uh huh uh huh uh huh uh huh",
        "h u uh hu uhh huh uhh",
        "h u uh hu uhh huh uhh",
      ],
    },
    {
      title: "Lesson 2 Introducing E and T: Home row, Second fingers",
      sentences: [
        "eeee tttt eeee tttt  eeee tttt eeee tttt",
        "eeee tttt eeee tttt  eeee tttt eeee tttt",
        "et et et et",
        "tee tee tee tee",
        "tete tete tete tete",
        "eet eet eet eet",
        "t e et te teet tee teet tete et",
        "t e et te teet tee teet tete et",
      ],
    },
    {
      title: "Lesson 3 Comprehensive: E, H, T, U",
      sentences: [
        "eeee hhhh tttt uuuu",
        "eeee hhhh tttt uuuu",
        "eeee hhhh tttt uuuu",
        "hue hue hue hue  tutu tutu tutu tutu  the the the the  he he he he he",
        "teeth teeth teeth teeth  hut hut hut hut",
        "thee thee thee thee  tutu tutu tutu tutu",
        "eh he hue hut teeth teethe the thee tutu",
        "eh he hue hut teeth teethe the thee tutu",
      ],
    },
    {
      title: "Lesson 4 Introducing O and N: Home row, third fingers",
      sentences: [
        "oooo nnnn oooo nnnn  oooo nnnn oooo nnnn",
        "oooo nnnn oooo nnnn  oooo nnnn oooo nnnn",
        "no no no no",
        "on on on on",
        "non non non non",
        "noon noon noon noon",
        "ono ono ono ono",
        "no non noon on noo ono",
        "no non noon on noo ono",
      ],
    },
    {
      title: "Lesson 5 Comprehensive, including O and N",
      sentences: [
        "eeee hhhh nnnn oooo tttt uuuu",
        "en en en en  ho ho ho ho  ne ne ne ne  nu nu nu nu  oh oh oh oh  to to to to",
        "hen hen hen hen  hoe hoe hoe hoe  hot hot hot hot  Hun Hun Hun Hun",
        "nee nee nee nee  net net net net  not not not not  nun nun nun nun",
        "nut nut nut nut  one one one one  out out out out  ten ten ten ten",
        "TNT TNT TNT TNT  toe toe toe toe  ton ton ton ton  too too too too",
        "tot tot tot tot  tun tun tun tun",

        "hone hone hone hone  hoot hoot hoot hoot  hunt hunt hunt hunt",
        "neon neon neon neon  none none none none  note note note note",
        "noun noun noun noun  onto onto onto onto  Otto Otto Otto Otto",
        "teen teen teen teen  tent tent tent tent  then then then then",
        "thou thou thou thou  tone tone tone tone  toot toot toot toot",
        "tote tote tote tote  tout tout tout tout  tune tune tune tune",
        "tenet tenet tenet tenet  tenth tenth tenth tenth  tooth tooth tooth tooth",

        "Tune the tone",
        "Note the teen not the tutu",
        "Ten hot teeth tout the tune",
        "The one nut to tote out the hen",
        "None hunt out the tenth one ton nun",
        "Hunt the neon then toot out the tune onto the tent",
      ],
    },
    {
      title: "Lesson 6 Introducing A and S: Home row, fourth fingers",
      sentences: [
        "aaaa ssss aaaa ssss  aaaa ssss aaaa ssss",
        "aaaa ssss aaaa ssss  aaaa ssss aaaa ssss",
        "as as as as",
        "sa sa sa sa",
        "sas sas sas sas",
        "ass ass ass ass",
        "sass sass sass sass",
        "as a sass ass as a sas",
        "as a sass ass as a sas",
      ],
    },
    {
      title: "Lesson 7 Comprehensive, including A and S",
      sentences: [
        "aaaa eeee hhhh nnnn oooo ssss tttt uuuu",
        "ah ah ah ah  an an an an  at at at at  ha ha ha ha  so so so so  us us us us",
        "ash ash ash ash  San San San San  sat sat sat sat  sea sea sea sea",
        "ease ease ease ease  east east east east  Haas Haas Haas Haas",
        "Hans Hans Hans Hans  hash hash hash hash  sane sane sane sane",
        "sash sash sash sash  Sean Sean Sean Sean  seat seat seat seat",
        "Stan Stan Stan Stan",

        "Sean hates tetanus shots",
        "Eat the toast at ten to noon",
        "The Taos sun shone as hot as Santa Anna",
        "Anthea assesses the estate at South Tahoe",
        "Hotshot Hanna uses these shoes that Shannon soon sees",
        "At noon on the teahouse Aunt Tess hushes the nauseous host",
        "Annette senses the sensuous sunset onset on the Athens sea",
        "Tess Sutton notates the tenuous state that southeast Houston has seen",
        "Ethan Ness attests to these Tennessee Senate OSHA statutes to shun Utah",
      ],
    },
    {
      title: "Lesson 8 Introducing I and D: Index finger stretching in the home row",
      sentences: [
        "iiii dddd iiii dddd  iiii dddd iiii dddd",
        "iiii dddd iiii dddd  iiii dddd iiii dddd",
        "id id id id",
        "id id id id",
        "did did did did",
        "did did did did",
        "Didi did id did i",
        "Didi did id did i",
        "uuuu hhhh iiii dddd",
        "du du du du  hi hi hi hi",
        "dud dud dud dud  hid hid hid hid",
      ],
    },
    {
      title: "Lesson 9 Comprehensive, including I and D (entire home row)",
      sentences: [
        "aaaa dddd eeee hhhh iiii nnnn oooo ssss tttt uuuu",
        "aaaa dddd eeee hhhh iiii nnnn oooo ssss tttt uuuu",

        "Tina is on hiatus instead",
        "The statue is sent to Santa Anita",
        "This session is tedious on the tendons",
        "That Thai dish is intense on the sinuses",
        "Onions stain satin so use this Tide on this",
        "Dan Addison detonated the thousandth headstone",
        "Estonian nationhood is a notion hidden in Asia",
        "The tennis enthusiast hides the dots on his hands",
        "Otis said that sand is the seed that Isis sent us",
        "Ted Austin insinuated that Tunisia is in Indonesia",
        "The Dissonant in the ninth edition hits on the Saudis",
        "I insist that Adenine is in DNA and that andesine is not",
        "Deanna and Eddie suntanned on the Tahitian seaside oasis",
        "Indiana and Ohio do not need donated tissues and headsets",
        "The attendant initiated an intense sound that suited Odessa",
        "The dodo added nine and nineteen and attained nine thousand",
        "Duane nodded to his sis as he situated his sedan in the shade",
        "Dennis Hudson is hidden in a distant Tunisian hashish hideout",
        "Nina and Dana hit the astonished attendee on the head in unison",
        "Auntie Edith tends to hint that Edna heeds the ideas due to Satan",
        "The idea that nineteen studious Dadaists assisted Einstein is asinine",

        "Todd hesitated in his Datsun then",
        "hit the Honda in the side in an instantaneous THUD",
        "The thesis that Dante dated Death is",
        "as inane as the attitude that Sade stood on Sadness",
        "A destitute Sudanese assassin insists",
        "that sainthood is indeed a handout to heathenish idiots",
        "A thousand nude deadheads sustained",
        "hideous headstands as studious atheists dissented and seethed",
      ],
    },
    {
      title: "Lesson 10 Introducing P and G: First fingers reaching up",
      sentences: [
        "gggg pppp gggg pppp  gggg pppp gggg pppp",
        "gggg pppp gggg pppp  gggg pppp gggg pppp",
        "pg pg pg pg  pg pg pg pg",
        "gp gp gp gp  gp gp gp gp",
        "gggg hhhh pppp uuuu",
        "up up up up  hug hug hug hug  pug pug pug pug  pup pup pup pup",
        "ugh ugh ugh ugh  Hugh Hugh Hugh Hugh  Pugh Pugh Pugh Pugh",
      ],
    },
    {
      title: "Lesson 11 Comprehensive, including P and G",
      sentences: [
        "aaaa dddd eeee gggg hhhh iiii nnnn oooo pppp ssss tttt uuuu",
        "aaaa dddd eeee gggg hhhh iiii nnnn oooo pppp ssss tttt uuuu",

        "The Huntington is in Pasadena",
        "He has one pip on his insignia",
        "I did not see Patton Against The Gestapo",
        "I put the sponge onto the peg on the spigot",
        "She did not postpone the hepatitis diagnosis",
        "The USPS sent postage high on August eighteenth",
        "Pete stops as he peeps at the Pepsi and doughnuts",
        "Nothing is as stupendous as an independent opinion",
        "I did not design this gadget that ignites potatoes",
        "Neptune is the sea god and is the god Poseidon too",
        "Do not dispute that pogo is as ingenious as ping pong",
        "The suggestion that toothpaste is poisonous is stupid",
        "I suggest that one not go to Saigon in a ship tonight",
        "Giuseppe pigged out on antipasto and pungent spaghetti",
        "The pianist is a passionate sap and sings insipid songs",
        "Angus thought he needed a tenspot to snap up the headphones",
        "Gina Esposito supposed that the signpost in Spain said STOP",
        "The Spanish poet happened to paint his house indigo and sepia",
        "Gus is assigned to get genuine snapshots inside the USGS ship",
        "This pennant said Hastings on it and that one said Penn State",
        "Gas Seepage in the Peugeot stopped the engine at the guidepost",
        "Patti Eng has a PhD in the thespian sagas on Oedipus and Antigone",
        "Tonight the teenage peasants appease the pagan suntanning goddess",
        "The penguin gasped as its appendage pushed past the Patagonian ship",
        "Seeing an aging ape eating pudding in a teaspoon is not too desponding",
        "In this episode the patient hostages hug and sing despite the gunshots",
        "Espionage at DuPont and Hughes is upsetting to the GOP and the Pentagon",
        "Doug pauses as he puts the poinsettias and sagging petunias in the teapot",
        "The indignant patient ingested a potent dosage to suspend his indigestion",
        "Upsetting gossip at the pageant had Stephanie and Gina sidestepping opponents",

        "Pat goes sightseeing at the pagoda",
        "in Shanghai despite the gunshots at its apogee",
        "The passage on Pegasus and the Aegean Sea",
        "upon page eight is a poignant adaptation",
        "In hindsight Stonehenge suggests the",
        "indigenous geniuses had to depend on the sun and its phases",
        "Daphne Stephenson has gone to Ghana and",
        "Ethiopia and Uganda to audiotape the distinguished singing",
        "The Pope stood in position atop the",
        "highest point in Santiago as an aghast Angie Diego ingested peanuts",
      ],
    },
    {
      title: "Lesson 12 Introducing . and C: Second fingers reaching up",
      sentences: [
        "cccc .... cccc ....  cccc .... cccc ....",
        "cccc .... cccc ....  cccc .... cccc ....",
        "eeee cccc tttt ....",
        "ec ec ec ec  tc tc tc tc",
        "ec ec ec ec  tc tc tc tc",
        "c. c. c. c.  t. t. t. t.  e. e. e. e.",
        "c. c. c. c.  t. t. t. t.  e. e. e. e.",
        "etc. etc. etc. etc.  etc. etc. etc. etc.",
        "etc. etc. etc. etc.  etc. etc. etc. etc.",
      ],
    },
    {
      title: "Lesson 13 Comprehensive, including . and C",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 14 Introducing , and R: Third fingers reaching up",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 15 Comprehensive, including , and R",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 16 Introducing ' and L: Fourth fingers reaching up",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 17 Comprehensive, including ' and L",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 18 Introducing Y and F: Index fingers stretching up",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 19 Comprehensive, including Y and F (full upper/home rows)",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 20 Introducing K and M: Index fingers reaching down",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 21 Comprehensive, including K and M",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 22 Introducing J and W: Second fingers reaching down",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 23 Comprehensive, including J and W",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 24 Introducing Q and V: Third fingers reaching down",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 25 Comprehensive, including Q and V",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 26 Introducing ; and Z: Fourth fingers reaching down",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 27 Comprehensive, including ; and Z",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 28 Introducing X and B: Index fingers stretching down",
      sentences: ["to be updated"],
    },
    {
      title: "Lesson 29 Comprehensive, including X and B (This is it, folks!)",
      sentences: ["to be updated"],
    },
  ],
};

export default abcd;
