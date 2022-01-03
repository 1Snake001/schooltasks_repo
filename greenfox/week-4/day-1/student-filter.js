/*
Készíts egy függvényt, mely paraméterben egy tömböt vár
A függvény írja ki:
azokat a diákokat, akiknek több mint 4 édességük van
átlagosan hány édességük van
const students = [
  { nev: 'Mark', kor: 9.5, edesseg: 2 },
  { nev: 'Paul', kor: 12, edesseg: 5 },
  { nev: 'Clark', kor: 7, edesseg: 3 },
  { nev: 'Pierce', kor: 12, edesseg: 7 },
  { nev: 'Sean', kor: 10, edesseg: 1 }
];
*/

const students = [
  { nev: "Mark", kor: 9.5, edesseg: 2 },
  { nev: "Paul", kor: 12, edesseg: 5 },
  { nev: "Clark", kor: 7, edesseg: 3 },
  { nev: "Pierce", kor: 12, edesseg: 7 },
  { nev: "Sean", kor: 10, edesseg: 1 },
];

let listOfNames = (students) => {
  let haveMore = [];
  let names = [];
  for (let student in students) {
    if (students[student].edesseg > 4) {
      names.push(students[student].nev);
      haveMore.push(students[student].edesseg);
    }
  }
  haveMore = haveMore.reduce((num, nextNum) => num + nextNum) / haveMore.length;
  return names + ":" + haveMore;
};

console.log(listOfNames(students));
