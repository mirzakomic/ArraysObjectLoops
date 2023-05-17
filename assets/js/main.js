//! Erste Aufgabe

let person = {
  name: "Mirza",
  alter: 26,
  sagNameAlter: function() {
    // alert (`${person.name} ${person.alter}`);
  }
}

console.log(person.name, person.alter);
person.sagNameAlter();

//! Zweite Aufgabe

let unsereHaustiere = [
  {
	tiertyp: "Katze",
	names: [
  	"Gipsy",
  	"Nala",
  	"Dinky"
	]
  },
  {
	tiertyp: "Hunde",
	names: [
  	"Knöpfchen",
  	"Pinselchen",
  	"Droopy"
	]
  }
];

console.log(unsereHaustiere[0].names[1], "", unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

unsereHaustiere[1].names = ["Bello", "Rex", "Lucky"];
console.log(unsereHaustiere[1].names);


//! Dritte Aufgabe

let unserLager = {
  schreibtisch: {
	schublade: "Hefter"
  },
  schrank: {
	"Obere Schublade": {
  	Ordner1: "Dokumente",
  	Ordner2: "Geheimnisse"
	},
	"Untere Schublade": "Cola"
  }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

//! Vierte Aufgabe

let myMusic = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
  }
];

myMusic.forEach(artist => {
  if (artist.release_jahr >= 1975) {
    document.write(
      artist.kunstler + "<br>" + 
      artist.title + "<br>" + 
      artist.formate + "<br>" +
      artist.release_jahr + "<br>" + "<br>"
    );
  } else {
    document.write(
      artist.kunstler + "<br>" + 
      artist.title + "<br>" + 
      artist.formate + "<br>" + "<br>"
    );
  }
});


//! Fünfte Aufgabe

let studentData = [
  {
	name: "Alex",
	age: 23,
	coop: false,
	address: {
  	street: "Don Valley Business Park",
  	city: "Toronto",
  	postalCode: "ONM3C3E5"
	},
	emails: ["alex69@gmail.com", "alex123@yahoo.com"]
  },
  {
	name: "Sandra",
	age: 22,
	coop: true,
	address: {
  	street: "34 Lawrence Ave",
  	city: "Toronto",
  	postalCode: "ONM3C0E5"
	},
	emails: ["sandra@gmail.com", "sandra@yahoo.com"]
  }
];

studentData.forEach((student) => {
console.log(student.name, student.coop, student.address.city, student.emails);
});

//! Bonus

const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
  ];

singers.sort((a,b) => a.name > b.name ? 1 : -1);
console.log(singers);

//! Bonus

let nameTab = document.querySelector("#name");
let preisTab = document.querySelector("#preis");
let diffTab = document.querySelector("#differenz");

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];


edelMetallPreise.map((name) => {
  nameTab.innerHTML += `<tr><td>${name.name}</td></tr> </br>`;
  preisTab.innerHTML += `<tr><td>${name.preiseGramEuro}</td></tr>  </br>`;
  diffTab.innerHTML += `<tr><td>${name.veraenderung}</td></tr>  </br>`;
});

