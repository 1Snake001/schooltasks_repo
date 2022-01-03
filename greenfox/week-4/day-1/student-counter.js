/* 
Készíts egy függvényt aminek a neve listOfNames(), diákok listáját várja paraméterként és visszaadja a következőt:
Azok a diákok nevét, akiknek több mint 4 édességük van
Készíts egy függvényt aminek a neve sumOfAge(), diákok listáját várja paraméterként és visszaadja a következőt:
Azon diákok korának az összege, akiknek kevesebb mint 5 édességük van
*/

const students = [
  { nev: 'Theodor', kor: 3, edesseg: 2 },
  { nev: 'Paul', kor: 9, edesseg: 2 },
  { nev: 'Mark', kor: 12, edesseg: 5 },
  { nev: 'Peter', kor: 7, edesseg: 3 },
  { nev: 'Olaf', kor: 12, edesseg: 7 },
  { nev: 'George', kor: 10, edesseg: 1 }
];

  let listOfNames = (students)=>{
      let haveMore = [];
    for(let student in students){
        if(students[student].edesseg > 4){
         haveMore.push(students[student].nev)
        }
    }
    return haveMore;
};

console.log(listOfNames(students));

let sumOfAge = (students) => {
     let sumAge = [];
     for(let student in students){
        if(students[student].edesseg < 5){
         sumAge.push(students[student].kor)
        }
    }
    
    return sumAge.reduce((num,nextNum) => num + nextNum);
};
console.log(sumOfAge(students));
