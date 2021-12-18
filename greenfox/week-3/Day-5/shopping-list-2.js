"use strict";
/*
Reprezentáld az alábbi termékeket és árukat:

Termék	Ár

Tej	1.07
Rizs	1.59
Tojás	3.14
Sajt	12.60
Csirke	9.40
Alma	2.31
Paradicsom	2.58
Krumpli	1.75
Hagyma	1.10

Bob bevásárló listája

Termék	Mennyiség
Tej	3
Rizs	2
Tojás	2
Sajt	1
Csirke	4
Alma	1
Paradicsom	2
Krumpli	1

Alice bevásárló listája
Termék	Mennyiség
Rizs	1
Tojás	5
Csirke	2
Alma	1
Paradicsom	10

Készíts egy alkalmazást, mely megválaszolja az alábbi kérdéseket:

Mennyit fizet Bob?
Mennyit fizet Alice?
Ki vett több rizst?
Ki vett több krumplit?
Ki vett több különböző terméket? (típusok)
Ki vett több terméket? (darab)
*/

let products = {
  Tej: 1.07,
  Rizs: 1.59,
  Tojás: 3.14,
  Sajt: 12.6,
  Csirke: 9.4,
  Alma: 2.31,
  Paradicsom: 2.58,
  Krumpli: 1.75,
  Hagyma: 1.1,
};

let bobsShoppingList = {
  Tej: 3,
  Rizs: 2,
  Tojás: 2,
  Sajt: 1,
  Csirke: 4,
  Alma: 1,
  Paradicsom: 2,
  Krumpli: 1,
};
let alicesShoppingList = {
  Rizs: 1,
  Tojás: 5,
  Csirke: 2,
  Alma: 1,
  Paradicsom: 10
};

function someoneExpend(products, someoneShoppingList) {
  let forCalcAmount = [];
  for (let key in products) {
    for (let k in someoneShoppingList) {
      if (key == k) {
        let amount = products[key] * someoneShoppingList[k];
        forCalcAmount.push(amount);
      }
    }
  }
  let grandTotalAmount = forCalcAmount.reduce((num, nextNum) => num + nextNum);
  console.log(grandTotalAmount);
}
someoneExpend(products, bobsShoppingList);
someoneExpend(products,alicesShoppingList)

let howBoughtMoreRice = (bobsShoppingList, alicesShoppingList)=>{
    
     if(bobsShoppingList.Rizs > alicesShoppingList.Rizs){
        console.log('Bob több rizst vett!');
    }else{
        console.log('Alice több rizst vett!')
       } 
   };

   howBoughtMoreRice(bobsShoppingList, alicesShoppingList);

   let howBoughtMorePotato = (bobsShoppingList, alicesShoppingList)=>{
    
    if(bobsShoppingList.Krumpli > alicesShoppingList.Krumpli || !alicesShoppingList.Krumpli){
       console.log('Bob több Krumplit vett!');
   }else{
       console.log('Alice több Krumplit vett!')
      } 
  };

  howBoughtMorePotato(bobsShoppingList, alicesShoppingList);   

let howBoughtMoreDiffProd = (bobsShoppingList, alicesShoppingList)=>{
 if(Object.values(bobsShoppingList).length > Object.values(alicesShoppingList).length){
     console.log('Bob több különböző terméket vett!');
 }else{
     console.log('Alice több különböző terméket vett!')
   }
};

howBoughtMoreDiffProd(bobsShoppingList, alicesShoppingList);

function howBoughtMoreProd(bobsShoppingList,alicesShoppingList){
    if(Object.values(bobsShoppingList).reduce((num,nextNum) => num + nextNum) > 
    Object.values(alicesShoppingList).reduce((num,nextNum) => num + nextNum)){
       console.log('Bob több terméket vásárolt!')
    }else{console.log('Alice több terméket vásárolt!')}
};
howBoughtMoreProd(bobsShoppingList,alicesShoppingList);