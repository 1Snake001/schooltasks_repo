'use strict';
// - Készíts egy `factorio` nevű függvényt, ami visszaadja 
//   a bemeneti paraméter faktoriálisát

function factorio(num){
    let fact = 1;
for(let i = 1; i <= num; i++){
        fact *= i;
    };
    return fact
};

 console.log(factorio(5)); 