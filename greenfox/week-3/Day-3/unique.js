// Hozz létre egy függvényt, ami kap egy számokból álló listát paraméterként
// Visszad egy számokból álló listát, ahol minden szám pontosan egyszer
// szerepel

/* function unique(arr) {

}

//  Példa
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  ezt kéne kiírnia: `[1, 11, 34, 52, 61]` */

function unique(arr){
    let newArr =[];
   let sortArr = arr.sort();
   for(let i = 0; i < arr.length; i++ ){
      if(sortArr[i]!= sortArr[i+1]){
       newArr.push(sortArr[i]);
      }
    }
    return newArr;
};

console.log(unique([17, 11, 22, 11, 52, 61, 22, 17]));
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));