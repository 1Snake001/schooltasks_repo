/*
Tömbökkel fogunk játszani. Nyugodtan használj bármilyen beépített függvényt, ahol lehetséges.

Készíts egy tömböt, ami szövegeket tartalmaz!
Írasd ki a tömb elemeinek a számát!
Add hozzá Williemet a tömbhöz!
Írasd ki, hogy a tömb üres-e vagy sem!
Add hozzá Johnt a tömbhöz!
Add hozzá Amandát a tömbhöz!
Írasd ki a tömb elemeinek a számát!
Írasd ki a tömb harmadik elemét!
Iterálj végig a tömbön, és írasd ki az összes nevet!
William
John
Amanda
Töröld a második elemet a tömbből!
Iterálj végig a tömbön fordított sorrendben, és írasd ki az összes nevet!
Amanda
William
Távolítsd el a lista összes elemét!
 */

let names = ["Jack", "Freddie", "Michael", "Steven"];

for (let i = 0; i < names.length; i++) {
  console.log(i);
}

names.push("William");

if (names.length > 0) {
  console.log("A tömb nem üres!");
} else {
  console.log("A tömb üres!");
}

names.push("John","Amanda");

console.log(names.length)
console.log(names[2]);



for(let i = 0; i < names.length; i++){
      console.log(names[i]);
};

names.splice(1,1);
console.log(names);

let reverseName = names.reverse();

for(let i = 0; i < reverseName.length; i++){
    console.log(reverseName[i]);
};

let arr = names.reverse().length
for(let i = 0; i < arr; i++){
  reverseName.pop()
}
names = reverseName
console.log(names)