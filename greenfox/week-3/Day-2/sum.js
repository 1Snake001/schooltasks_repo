'use strict';
// - Írj egy `sum` nevű függvényt, ami visszaadja (return) az egész számok
//   összegét nullától a megadott paraméterig


'use strict';
// - Írj egy `sum` nevű függvényt, ami visszaadja (return) az egész számok
//   összegét nullától a megadott paraméterig

const sum = (num) => {
    let reduced = 0;
    for (let i = 1; i <= num; i++) {
        reduced += i;
    }
    return reduced;
};

console.log(sum(5));