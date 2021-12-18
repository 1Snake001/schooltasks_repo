//  Hozz létre egy függvényt, ami kap egy számot és egy számokból álló tömböt
//  paraméterekként Majd visszadja azoknak a számoknak az indexét a tömbből,
//  ahol a elsőként kapott számjegy megtalálható a számban. Ha az elsőként
//  kapott számjegy nem található meg egyik számban sem, adjon vissza egy üres
//  tömböt
// Példa
/* console.log(subint(1, [1, 11, 34, 52, 61])); */
// ezt kéne kiírnia: `[0, 1, 4]`
/* console.log(subint(9, [1, 11, 34, 52, 61])); */
// ezt kéne kiírnia: '[]'


function subint(num,array){
    newArray =[];
    for(i=0; i < array.length; i++){
         if(array[i].toString().indexOf(num)!= -1){
                newArray.push(i)
        }
    };
    return newArray
}

console.log(subint(1, [1, 11, 34, 52, 61]));
console.log(subint(9, [1, 11, 34, 52, 61]));