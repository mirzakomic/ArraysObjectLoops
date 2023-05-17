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