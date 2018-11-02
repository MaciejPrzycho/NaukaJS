let imie = " Maciek ";
let wiek = 14;
let zamieszkanie = " Warszawa ";
let ulica = "KeN"

let uczen = {
    imie: " Jan ",
    nazwisko: " Kowalski ",
    wiek: 17,
    adres: {
        miasto: " Warszawa ",
        ulica: " abc"

    }
}

dodajZwierzeUczniowi(uczen, "krowa", "mucka", 7);
dodajZwierzeUczniowi(uczen, "kot", "filemon", 7);
dodajZwierzeUczniowi(uczen, "pies", "azor", 7);

let uczen2 = {

    imie: " Mateusz ",
    nazwisko: " Kowalski ",
    wiek: 17,
    zwierzeta: [
        {
            rodzaj: "ryba",
            nazwa: "musztarda",
            wiek: 6
        }
    ]
};

let klasa = [];
klasa.push(uczen);
klasa.push(uczen2);

let imiona = ["Maciek", "Jan", "Mateusz"]
imiona.push("Maciek");
imiona.push("Marek");
console.log(imiona);


for (i = 0; i < klasa.length; i++) {
    let uczen = klasa[i];
    console.log("UCZEN " + i);
    console.log("prawidlowy " + sprawdzDaneUcznia(uczen));
    wypiszDaneUcznia(uczen);

    function sprawdzDaneUcznia(daneUcznia) {
        if (daneUcznia == undefined) {
            return false;
        }
        if (daneUcznia.imie == undefined) {
            return false;
        }

        if (daneUcznia.wiek == undefined || daneUcznia.wiek > 20) {
            return false;
        } return true;
    }
}



function dodajZwierzeUczniowi(daneUcznia, nowaRasa, nowaNazwa, nowyWiek){
    if(daneUcznia.zwierzeta == undefined){
        daneUcznia.zwierzeta = [];
    }
    let noweZwierze = {
        rodzaj: nowaRasa,
        nazwa: nowaNazwa,
        wiek: nowyWiek,
        dodanyPrzez: "automatycznie"
    }
    daneUcznia.zwierzeta.push(noweZwierze);
}

function wypiszDaneUcznia(daneUcznia) {
    console.log("...");
    console.log("IMIE: " + daneUcznia.imie);
    console.log("NAZW: " + daneUcznia.nazwisko);
    console.log("MaZwierze?" + JSON.stringify(daneUcznia.zwierzeta));
// IMIE:  Mateusz 
// NAZW:  Kowalski 
// ZWIErzeta:
//   rodzaj: .,,, nazwa: ....


    let czyLysy = "";
    if (daneUcznia.czyLysy) {
        czyLysy = "TAK"
    } else {
        czyLysy = "NIE"
    }
    console.log("CZY LYSY: " + czyLysy)
    console.log("...");
}
