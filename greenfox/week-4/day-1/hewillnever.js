/* 
A dolgok kissé összekeveredtek.
A feladatod, hogy dekódold a notSoCrypticMessage-et az object-et használva
Rakd be a részeket a result változóba.
*/

let result = "";
let notSoCrypticMessage = [
  1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11,
];

let object = {
  7: "run around and desert you",
  50: "tell a lie and hurt you ",
  49: "make you cry, ",
  2: "let you down",
  12: "give you up, ",
  1: "Never gonna ",
  11: "\n",
  3: "say goodbye ",
};

for (let i = 0; i < notSoCrypticMessage.length; i++) {
  for (let k in object) {
    if (notSoCrypticMessage[i] == k) {
      result += object[k];
    }
  }
}

console.log(result);
