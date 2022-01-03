/*
 Készíts egy programot, amely a biztonsági ellenőrzést végzi egy fesztiválon!
Paraméterként a függvény egy tömböt vár.
A függvényed térjen vissza azoknak a listájával (tömb), akik beléphetnek!
Ha valakinél fegyvert találunk, szedjük ki a sorból, majd tegyük watchlist-re ("megfigyelendők listája").
Ha valakinél alkoholt találunk, azt vegyük el tőle (állítsuk az értéket 0-ra), adjuk hozzá a talált alkoholokhoz, majd engedjük be az illetőt a fesztiválra.
*/

const watchlist = [];

let talaltAlkoholMennyiseg = 0;

const sor = [
  { nev: 'Amanda', alkohol: 10, fegyver: 1 },
  { nev: 'Mark', alkohol: 0, fegyver: 0 },
  { nev: 'Dolores', alkohol: 0, fegyver: 1 },
  { nev: 'Wade', alkohol: 1, fegyver: 1 },
  { nev: 'Anna', alkohol: 10, fegyver: 0 },
  { nev: 'Rob', alkohol: 2, fegyver: 0 },
  { nev: 'Joerg', alkohol: 20, fegyver: 0 }
];

function festivalSecurity(sor){
    let theyCanEnter = [];
    for(let person of sor){
        if(person.fegyver > 0){
            watchlist.push(person.nev)
        }else{theyCanEnter.push(person.nev)};

        if(person.alkohol > 0){
            talaltAlkoholMennyiseg += person.alkohol
        }
    }
return theyCanEnter;
};

console.log(festivalSecurity(sor));

console.log(watchlist)
console.log(talaltAlkoholMennyiseg)