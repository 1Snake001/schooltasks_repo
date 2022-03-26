// Készíts egy függvényt, ami 3 paramétert vár: egy elérési utat, egy szót
// és egy számot. Tudjon írni fájlba.
// Az elérési út legyen egy string, ami leírja az írandó fájl helyét.
// A szó szintén legyen string és kerüljön be a fájlba egyenként külön sorba.
// A szám paraméter jelöli, hogy hány sora legyen a fájlnak.
// Ha a szó 'alma' és a szám 5, akkor 5 sort írjon a fájlba
// és minden sorban az legyen írva: 'alma'.
// Ha a függvény nem tud írni a fájlba, ne dobjon semmilyen hibaüzenetet.

fs = require("fs");

function multipleLines(filePhat, word, number) {
  let value = "";
  try {
    for (let i = 0; i < number; i++) {
      fs.writeFileSync(filePhat, (value += word + "\n"));
    }
  } catch (error) {}
};

multipleLines("text.txt", "test-words", 6);
