class Character {
	constructor(
		rzuty = null,
		unikalneID = '',
		klasa = null,
		podklasa = null,
		umiejetnosc_specjalna = null,
		umiejetnosc_specjalna_wartosc = null,
		czlowieczenstwo = 20,
		lastStage = 0,
		cechy =[
			  { "cecha": "ESTETYKA", "skrot": "EST", "wartosc": 2 },
			  { "cecha": "INTELIGENCJA", "skrot": "INT", "wartosc": 2 },
			  { "cecha": "EMPATIA", "skrot": "EMP", "wartosc": 2 },
			  { "cecha": "BUDOWA_CIALA", "skrot": "BC", "wartosc": 2 },
			  { "cecha": "REFLEKS", "skrot": "REF", "wartosc": 2 },
			  { "cecha": "OPANOWANIE", "skrot": "OP", "wartosc": 2 },
			  { "cecha": "PERCEPCJA", "skrot": "PER", "wartosc": 2 },
			  { "cecha": "ZDOLNOSCI_MEDYCZNE", "skrot": "MED", "wartosc": 2 },
			  { "cecha": "ZDOLNOSCI_TECHNICZNE", "skrot": "TECH", "wartosc": 2 },
			  { "cecha": "SZCZESCIE", "skrot": "SZCZ", "wartosc": 2 },
			  { "cecha": "SZYBKOSC", "skrot": "SZYB", "wartosc": 2 },
			  { "cecha": "BIEG", "skrot": "BIEG", "wartosc": 4 }
			],

		umiejetnosci = [
			{ "umiejetnosc": "moda i styl", "wartosc": 0 }, 
			{ "umiejetnosc": "charakteryzacja", "wartosc": 0 },
			{ "umiejetnosc": "fotografia/film", "wartosc": 0 }, 
			{ "umiejetnosc": "granie na instrumencie", "wartosc": 0 },
			{ "umiejetnosc": "malowanie/rysowanie", "wartosc": 0 }, 
			{ "umiejetnosc": "komponowanie", "wartosc": 0 },
			{ "umiejetnosc": "aktorstwo", "wartosc": 0 }, 
			{ "umiejetnosc": "śpiew", "wartosc": 0 },
			{ "umiejetnosc": "wiedza ogólna", "wartosc": 0 }, 
			{ "umiejetnosc": "biologia", "wartosc": 0 },
			{ "umiejetnosc": "botanika", "wartosc": 0 }, 
			{ "umiejetnosc": "chemia", "wartosc": 0 },
			{ "umiejetnosc": "fizyka", "wartosc": 0 }, 
			{ "umiejetnosc": "geografia", "wartosc": 0 },
			{ "umiejetnosc": "historia", "wartosc": 0 }, 
			{ "umiejetnosc": "matematyka", "wartosc": 0 },
			{ "umiejetnosc": "psychologia", "wartosc": 0 }, 
			{ "umiejetnosc": "nauczanie", "wartosc": 0 },
			{ "umiejetnosc": "programowanie", "wartosc": 0 }, 
			{ "umiejetnosc": "znajomość sieci", "wartosc": 0 },
			{ "umiejetnosc": "etykieta", "wartosc": 0 }, 
			{ "umiejetnosc": "perswazja", "wartosc": 0 },
			{ "umiejetnosc": "przeprowadzanie wywiadów", "wartosc": 0 }, 
			{ "umiejetnosc": "zdolności przywódcze", "wartosc": 0 },
			{ "umiejetnosc": "uwodzenie", "wartosc": 0 }, 
			{ "umiejetnosc": "uspokajanie", "wartosc": 0 },
			{ "umiejetnosc": "wytrzymałość", "wartosc": 0 }, 
			{ "umiejetnosc": "wysportowanie", "wartosc": 0 },
			{ "umiejetnosc": "dźwiganie", "wartosc": 0 }, 
			{ "umiejetnosc": "ciężka broń", "wartosc": 0 },
			{ "umiejetnosc": "spostrzegawczość", "wartosc": 0 }, 
			{ "umiejetnosc": "przeszukiwanie", "wartosc": 0 },
			{ "umiejetnosc": "przeszukiwanie data base", "wartosc": 0 }, 
			{ "umiejetnosc": "postrzeganie emocji", "wartosc": 0 },
			{ "umiejetnosc": "śledzenie", "wartosc": 0 }, 
			{ "umiejetnosc": "walka wręcz", "wartosc": 0 },
			{ "umiejetnosc": "broń ręczna", "wartosc": 0 }, 
			{ "umiejetnosc": "unikanie ciosów", "wartosc": 0 },
			{ "umiejetnosc": "pistolet", "wartosc": 0 }, 
			{ "umiejetnosc": "pistolet maszynowy", "wartosc": 0 },
			{ "umiejetnosc": "karabin", "wartosc": 0 }, 
			{ "umiejetnosc": "karabin snajperski", "wartosc": 0 },
			{ "umiejetnosc": "strzelba", "wartosc": 0 }, 
			{ "umiejetnosc": "kradzież kieszonkowa", "wartosc": 0 },
			{ "umiejetnosc": "taniec", "wartosc": 0 }, 
			{ "umiejetnosc": "wymykanie się", "wartosc": 0 },
			{ "umiejetnosc": "akrobatyka", "wartosc": 0 }, 
			{ "umiejetnosc": "odporność na tortury", "wartosc": 0 },
			{ "umiejetnosc": "odporność na narkotyki", "wartosc": 0 }, 
			{ "umiejetnosc": "odporność na toksyny", "wartosc": 0 },
			{ "umiejetnosc": "przemawianie", "wartosc": 0 }, 
			{ "umiejetnosc": "przesłuchiwanie", "wartosc": 0 },
			{ "umiejetnosc": "znajomość półświatka", "wartosc": 0 }, 
			{ "umiejetnosc": "gry hazardowe", "wartosc": 0 },
			{ "umiejetnosc": "ukrywanie się", "wartosc": 0 }, 
			{ "umiejetnosc": "dedukcja", "wartosc": 0 },
			{ "umiejetnosc": "kłamanie", "wartosc": 0 }, 
			{ "umiejetnosc": "skradanie się", "wartosc": 0 },
			{ "umiejetnosc": "pierwsza pomoc", "wartosc": 0 }, 
			{ "umiejetnosc": "diagnoza lekarska", "wartosc": 0 },
			{ "umiejetnosc": "farmaceutyka", "wartosc": 0 }, 
			{ "umiejetnosc": "chirurgia", "wartosc": 0 },
			{ "umiejetnosc": "stabilizacja", "wartosc": 0 }, 
			{ "umiejetnosc": "otwieranie zamków", "wartosc": 0 },
			{ "umiejetnosc": "zabezpieczenia elektroniczne", "wartosc": 0 }, 
			{ "umiejetnosc": "materiały wybuchowe", "wartosc": 0 },
			{ "umiejetnosc": "naprawy podstawowe", "wartosc": 0 }, 
			{ "umiejetnosc": "naprawy pojazdów", "wartosc": 0 },
			{ "umiejetnosc": "naprawy uzbrojenia", "wartosc": 0 },
			{ "umiejetnosc": "elektronika", "wartosc": 0 },
			{ "umiejetnosc": "fałszerstwo", "wartosc": 0 }, 
			{ "umiejetnosc": "cybertechnika", "wartosc": 0 },
			{ "umiejetnosc": "znajomość uzbrojenia", "wartosc": 0 }, 
			{ "umiejetnosc": "projektowanie cyberdecków", "wartosc": 0 }
		],
		plec = null,
		wiek = null,
		rok = null,
		wzrost = null,
		masa = null,
		pochodzenie_rodziny = null,
		narodowosc = null,
		miejsce_urodzenia = null,
		wyglad = {
			wlosy: [],
			oczy: [],
			znaki: {
				tatuaze: "",
				piercing: "",
				zarost: "",
				blizny: "",
				inne: ""
			},
			prawe_oko: [],
			lewe_oko: []
		},
		ubior = {
			glowa: "",
			tors: "",
			spodnie: "",
			buty: "",
			akcesoria: ""
		},
		jezyki = [],
		stan_cywilny = "",
		cechy_osobowosci = [null,null,null,null,null],
		dodatkowe_informacje = [],
		ceniona_osoba = '',
		co_cenisz = '',
		co_czujesz_do_ludzi = '',
		tlo_rodzinne = '',
		ulubiony_przedmiot = '',
		motto = '',
		choroby = [],
		uzaleznienia = [],
		eurodolary = 0,
		reputacja = 0,
		wydarzenia = [],
		ekwipunek = {},
		ukryty_cel = {nazwa: "", opis: ""},
		imie = '',
		nazwisko = '',
		buffor = '',
		ram = '',
		sloty = '',
		procesor = '',
		cyberdeck = '',
		bc_opis = '',
		mbc = 0,
		wb = {
			glowa: 0,
			tulow: 0,
			nogi:0
		},
		pseudonim = '',
		wlasciciel = "",


	){
		this.bc_opis = bc_opis;
		this.mbc = mbc;
		this.wb = wb;
		this.rzuty = rzuty;
		this.klasa = klasa;
		this.podklasa = podklasa;
		this.cechy = cechy;
		this.umiejetnosci = umiejetnosci;
		this.umiejetnosc_specjalna = umiejetnosc_specjalna;
		this.umiejetnosc_specjalna_wartosc = umiejetnosc_specjalna_wartosc;
		this.plec = plec;
		this.wiek = wiek;
		this.rok = rok;
		this.wzrost = wzrost;
		this.masa = masa;
		this.pochodzenie_rodziny = pochodzenie_rodziny;
		this.narodowosc = narodowosc;
		this.miejsce_urodzenia = miejsce_urodzenia;
		this.wyglad = wyglad;
		this.ubior = ubior;
		this.jezyki = jezyki;
		this.stan_cywilny = stan_cywilny;
		this.cechy_osobowosci = cechy_osobowosci;
		this.dodatkowe_informacje = dodatkowe_informacje;
		this.ceniona_osoba = ceniona_osoba;
		this.co_cenisz = co_cenisz;
		this.co_czujesz_do_ludzi = co_czujesz_do_ludzi;
		this.tlo_rodzinne = tlo_rodzinne;
		this.ulubiony_przedmiot = ulubiony_przedmiot;
		this.motto = motto;
		this.choroby = choroby;
		this.uzaleznienia = uzaleznienia;
		this.eurodolary = eurodolary;
		this.reputacja = reputacja;
		this.wydarzenia = wydarzenia;
		this.ekwipunek = ekwipunek;
		this.ukryty_cel = ukryty_cel;
		this.imie = imie;
		this.nazwisko = nazwisko;
		this.pseudonim = pseudonim;
		this.czlowieczenstwo = czlowieczenstwo;
		this.wlasciciel = wlasciciel;
		this.lastStage = lastStage;
	}
}

function zapiszBuildDoLocalStorage(build, klucz = "build") {
	localStorage.setItem(klucz, JSON.stringify(build));
}

function wczytajBuildZLocalStorage(klucz = "build") {
	const dane = localStorage.getItem(klucz);
	if (!dane) return null;

	const parsed = JSON.parse(dane);
	return Object.assign(new Character(), parsed);
}

function usunBuildZLocalStorage(klucz = "build") {
	localStorage.removeItem(klucz);
}

window.kreatorStart = function kreatorStart() {
	const mainMenu = document.getElementById("mainMenu")
	const kreator = document.getElementById("kreator")
	if (localStorage.getItem("build")) {
		console.log("jest build");
	}
	window.build = new Character();
	Character.lastStage = 1;
	console.log(build);




	mainMenu.classList.add("hidden");
	kreator.classList.remove("schowany");


}


let rodzajRzutow = 0;
import { rzut } from "./kosci.js";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.wyborRzutow = function wyborRzutow(el) {
	rodzajRzutow = el.id === "reka" ? 1 : 0;
	build.rzuty = el.id;
	console.log(build);
	moznaDalej();

	el.classList.add("wybrany");
	el.querySelector("span").classList.remove("opacity0");

	const el2 = el.previousElementSibling || el.nextElementSibling;

	if (el2) {
		el2.classList.remove("wybrany");
		el2.querySelector("span")?.classList.add("opacity0");
	}

	console.log(rodzajRzutow);
};
function moznaDalej() {
	document.getElementById("nav_for").classList.remove("stop");
}
window.navStage = function navStage(rodzaj) {
	const przerzut = document.getElementById("przerzut");
	const stages = [...przerzut.querySelectorAll(":scope > .stage")];

	let indexAktywny = stages.findIndex(el => el.classList.contains("aktywny"));

	if (indexAktywny === -1) {
		indexAktywny = 0;
	}

	let nowyIndex = indexAktywny;

	switch (rodzaj) {
		case "back":
			nowyIndex = Math.max(0, indexAktywny - 1);
			moznaDalej();
			break;
		case "next":
			if(document.getElementById("nav_for").classList.contains("stop")) {
				alert("wypełnij wszystko");
				return;

			}
			nowyIndex = Math.min(stages.length - 1, indexAktywny + 1);
				document.getElementById("nav_for").classList.add("stop");
			break;
		default:
			return;
	}

	stages.forEach((stage, i) => {
		stage.classList.remove("aktywny", "nastepny", "poprzedni", "hidden");

		if (i < nowyIndex - 1 || i > nowyIndex + 1) {
			stage.classList.add("hidden");
		} else if (i === nowyIndex) {
			stage.classList.add("aktywny");
		} else if (i === nowyIndex - 1) {
			stage.classList.add("poprzedni");
		} else if (i === nowyIndex + 1) {
			stage.classList.add("nastepny");
		}
	});
	build.lastStage = document.querySelector(".stage.aktywny").dataset.number;
	console.log("last Stage: " + build.lastStage);
	zapiszBuildDoLocalStorage(build);

}



async function Debug() {
    await sleep(1000);
    await kreatorStart();
	wyborRzutow(document.getElementById("maszyna"));
	navStage("next");
}

Debug();

// import { listaKlasyPostaci } from "./app.js";
async function budujStrone() {
  let listaKlas = await window.KlasyPostaciPromise;

  function stage2() {
    console.log("stage2", listaKlas);
	const selectKlasy = document.getElementById("wyborKlasy");
	listaKlas.forEach((klasa) => {
		const opcja = document.createElement("option");
		opcja.innerHTML=klasa.klasa + " " + klasa.podklasa;
		opcja.value=klasa.id;
		selectKlasy.appendChild(opcja);
	});
	const opcja = document.createElement("option");
	opcja.innerHTML="LOSUJ";
	opcja.value="losuj";
	selectKlasy.appendChild(opcja);
	document.getElementById("wyborKlasy").addEventListener("change", function () {
		let wybranaKlasa;
		if (this.value === "losuj"){
			let liczba = Math.floor(Math.random() * 23);
			wybranaKlasa = listaKlas[liczba];
		} else {
			wybranaKlasa = listaKlas.find(element => String(element.id) === this.value);
		}
		build.klasa=wybranaKlasa?.klasa;
		build.podklasa=wybranaKlasa?.podklasa;
		const kontenerOpis = document.getElementById("opis_klasy");
		kontenerOpis.innerHTML = `
		<h1>${wybranaKlasa?.klasa} ${wybranaKlasa?.podklasa}</h1>
		`;

		moznaDalej();
	});
  }

  function stage3() {
  }

  function stage4() {
    
  }

  function stage5() {
    
  }

  function stage6() {
    
  }

  function stage7() {
    
  }

  stage2();
  stage3();
  stage4();
  stage5();
  stage6();
  stage7();
}

document.addEventListener("DOMContentLoaded", budujStrone);

