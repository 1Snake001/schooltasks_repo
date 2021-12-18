/* 
A "todoText" lista kezdődjön a "My todos:" szöveggel (a jelenlegihez add hozzá ezt a szöveget úgy,
hogy elé kerüljön)
Add hozzá a " - Download games" tennivalót a lista végére
Add hozzá a " - Diablo" tennivalót a lista végére, 2 szóköz indentációval
Várt eredmény:
My todos:
 - Buy milk
 - Download games
     - Diablo 
*/

let todoText = " - Buy milk\n";
let myToDos = "My todos:\n";
let download = " - Download games\n"
let spaceCount = 2;
let diablo = " - Diablo"

todoText = myToDos + todoText + download + " ".repeat(spaceCount) + diablo;
console.log(todoText);


