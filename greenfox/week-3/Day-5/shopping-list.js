/* 
Bevásárló listánkat egy listaként (vagy tömbként) fogjuk reprezentálni,
mely stringeket (szöveg) tartalmaz.

Készíts egy tömböt az alábbi tételekkel:
tojás, tej, hal, alma, kenyér és csirke
Készíts egy alkalmazást, mely megválaszolja az alábbi kérdéseket:
Van tej a listán?
Van banán a listán?
*/

let shoppingList = ['tojás', 'tej', 'hal', 'alma', 'kenyér', 'csirke']

function printShoppingProduct(shoppingList){
    if(shoppingList.includes('tej')== true){
       console.log('Van tej a listán!') 
    }else{
        console.log('Nincs tej a listán!') 
    };
    if(shoppingList.includes('banán')== true){
        console.log('Van banán a listán!') 
     }else{
         console.log('Nincs banán a listán!') 
     };
};

printShoppingProduct(shoppingList);