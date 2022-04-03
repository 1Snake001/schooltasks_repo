function countLetters(str) {
  let uniqueStr = "";

  for (let i = 0; i < str.length; i++) {
    if (uniqueStr.includes(str[i].toLowerCase()) === false) {
      uniqueStr += str[i].toLowerCase();
    }
  }
  uniqueStr = uniqueStr.toLowerCase();
  str = str.toLowerCase();
  let Ob = {};

  for (let k in uniqueStr) {
    Ob[uniqueStr[k][0]] = 0;
  }
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < uniqueStr.length; i++) {
      if (str[j] === uniqueStr[i]) {
        Ob[uniqueStr[i][0]] += 1;
      }
    }
  }
  return Ob;
}

module.exports = countLetters;