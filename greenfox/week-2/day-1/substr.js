// Írj egy function-t (függvényt) ami 2 string paramétert vár
// Térjen vissza (return) egy index-szel, ami megmondja,
// hogy az első paraméterként megadott változóban
// hanyadik karaktertől fordul elő a második paraméterként megadott string.
// -1-gyel tér vissza (return) ha nem található meg a második paraméter
// az első paraméterként megadott string-ben

function substr(str, keyword) {
  let count = {};
  str.split(" ").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });

  let index;

  for (let i = 0; i < Object.keys(count).length; i++) {
    if (Object.keys(count)[i] === keyword) {
      for (let j = 0; j < Object.keys(count).join(" ").length; j++) {
        if (
          Object.keys(count).join(" ")[j] === keyword[0] &&
          Object.keys(count)[j] === keyword[j]
        ) {
          index = j;
        }
      }
      return index;
    }
  }
  return -1;
}

// Példa

// eredmény: `17`, mert a 'searching' a 17. indextől található meg.
console.log(substr("this is what I'm searching in", "searching"));

// eredmény: `-1`, mert nem található meg benne
console.log(substr("this is what I'm searching in", "not"));

// eredmény: `17`, mert a 'searching' a 27. indextől található meg.
console.log(substr("this is what I'm searching in", "in"));