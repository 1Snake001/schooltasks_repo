const test = require("tape").test;
const anagramma = require("./anagramma.js");

test("check anagrams", (t) => {
    let expected = false;
  
    let string1 = "lisasdfen";
    let string2 = "silent";
    let actual;
    actual = anagramma(string1, string2);
    t.deepEqual(actual, expected);
    t.end();
  });
  
  test("check listen-silent", (t) => {
    let expected = true;
    let string1 = "listen";
    let string2 = "silent";
    let actual;
  
    actual = anagramma(string1, string2);
  
    t.deepEqual(actual, expected);
    t.end();
  });
  
  test("check Nobel", (t) => {
    let expected = true;
    let string1 = "Nobel Alfred";
    let string2 = "Ferde ballon";
    let actual;
  
    actual = anagramma(string1, string2);
  
    t.deepEqual(actual, expected);
    t.end();
  });
  
  test("check ékezetek", (t) => {
    let expected = true;
    let string1 = "Karinthy Frigyes";
    let string2 = "Híres így firkant";
    let actual;
  
    actual = anagramma(string1, string2);
  
    t.deepEqual(actual, expected);
    t.end();
  });
  
  test("check spaces", (t) => {
    let expected = true;
    let string1 = "termelékenység";
    let string2 = "Kétes legény mer";
    let actual;
  
    actual = anagramma(string1, string2);
  
    t.deepEqual(actual, expected);
    t.end();
  });
  
  test("check fun", (t) => {
    let expected = true;
    let string1 = "Funeral";
    let string2 = "real, fun!";
    let actual;
  
    actual = anagramma(string1, string2);
  
    t.deepEqual(actual, expected);
    t.end();
  });