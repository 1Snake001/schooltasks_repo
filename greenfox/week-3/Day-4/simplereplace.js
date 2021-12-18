/*Cseréld ki a "dishwasher" szót a "galaxy"-ra
Várt eredmény: "In a galaxy far far away"
let example = "In a dishwasher far far away";
console.log(example);*/

let example = "In a dishwasher far far away";
let newWord = "galaxy";
example = example.replace("dishwasher", newWord);
console.log(example);