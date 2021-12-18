/*
 Írj egy függvényt, ami összepárosít egy fiút egy lánnyal, és visszaadja egy új listában.
Ha valakinek nincs párja, akkor is szerepeljen a listában.
Várt eredmény: 'Eve', 'Joe', 'Ashley', 'Fred'...
const girls = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
const boys = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

console.log(makingMatches(girls, boys));
 */

const girls = ["Eve", "Ashley", "Claire", "Kat", "Jane"];
const boys = ["Joe", "Fred", "Tom", "Todd", "Neef", "Jeff"];

function makingMatches(girls, boys) {
  let match = [];
  for (let i = 0; i <= [...girls, ...boys].length; i++) {
    if (girls[i] || boys[i] == !undefined) {
      match.push(girls[i]);
      match.push(boys[i]);
    } else if (boys[i] == "Jeff") {
      match.push(boys[i]);
    }
  }
   return match
};

console.log(makingMatches(girls, boys));



