/* 
Véletlenül elrontottam ezt a Richard Feynman idézetet, két szó nincs a helyén
Kérlek hozd helyre a hibát úgy, hogy megcseréled a két hibás helyen lévő szót$
A függvény neve legyen "quoteSwap()"
Várt eredmény: What I cannot create I do not understand.
Logold ki a mondatot a konzolra, szóközökkel elválasztva.
const words =
  ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
console.log(quoteSwap(words)); 
*/

const words = [
  "What",
  "I",
  "do",
  "create,",
  "I",
  "cannot",
  "not",
  "understand.",
];

function quoteSwap(words) {
  for (let word in words) {
    if (words[word] == "do") {
      words[word] = "cannot";
    } else if (words[word] == "cannot") {
      words[word] = "do";
    }
  }
  return words.join(" ");
}

console.log(quoteSwap(words));
