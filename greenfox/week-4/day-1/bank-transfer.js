/* Készíts egy getNameAndBalance() függvényt, amely visszaadja az ügyfél nevét és egyenlegét a bankszámlaszáma alapján a megadott listából:
getNameAndBalance(11234543);
várt eredmény: ['Adam', 203004099.2]
transferAmount()
Készíts egy függvényt, amely átualja a megadott összeget egyik számláról a másikra. 4 paramétert vár:
egy tömböt (accounts)
ahonnan utalnak (számlaszám)
ahová utalnak (számlaszám)
összeg
transferAmount(accounts, 43546731, 23456311, 500.0);
A program írja ki a képernyőre az alábbi szöveget, ha valamelyik számla nem létezik: 404 - nem létező számla
Ha a függvény meghívása után kilogoljuk az accounts tömböt, már ebben a formájában kell látnunk:
const accounts = [
  { ugyfelNev: 'Adam', szamlaszam: 11234543, egyenleg: 203004099.2 },
  { ugyfelNev: 'Anna', szamlaszam: 43546731, egyenleg: 5204099571.23 },
  { ugyfelNev: 'Attila', szamlaszam: 23456311, egyenleg: 1354100.0 }
]
// használd fel ezt a tömböt:
*/

const accounts = [
  { ugyfelNev: "Adam", szamlaszam: 11234543, egyenleg: 203004099.2 },
  { ugyfelNev: "Anna", szamlaszam: 43546731, egyenleg: 5204100071.23 },
  { ugyfelNev: "Attila", szamlaszam: 23456311, egyenleg: 1353600.0 },
];

function getNameAndBalance(acountNumber) {
  let person = [];
  for (let k in accounts) {
    if (accounts[k].szamlaszam == acountNumber) {
      person.push(accounts[k].ugyfelNev, accounts[k].egyenleg);
    }
  }
  return person;
}
console.log(getNameAndBalance(11234543));

function transferAmount(accounts, outputAccount, inputAccount, amount) {
  for (k in accounts) {
    if (accounts[k].szamlaszam == outputAccount) {
      accounts[k].egyenleg -= amount;
    }
  }
  for (k in accounts) {
    if (accounts[k].szamlaszam == inputAccount) {
      accounts[k].egyenleg += amount;
    }
  }
  let arrOfAcountsNum = [];
  for (k in accounts) {
    arrOfAcountsNum.push(accounts[k].szamlaszam);
  }
  if (arrOfAcountsNum.includes(outputAccount) != true) {
    accounts = "404 - nem létező számla";
    console.log(arrOfAcountsNum);
  } else if (arrOfAcountsNum.includes(inputAccount) != true) {
    accounts = "404 - nem létező számla";
  }
  return accounts;
}

console.log(transferAmount(accounts, 43546731, 23456311, 2500.0));
