/*
 A névjegyzékünket egy asszociatív tömbként(Map) fogjuk reprezentálni, ahol a nevek és a telefonszámok szöveges típusúak.

Készíts egy Map-et az alábbi kulcs-érték párokkal:

Név (kulcs)	Telefonszám (érték)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
Készíts egy alkalmazást, mely megoldja az alábbi problémákat:

Mi John K. Miller telefonszáma?
Kinek a száma a 307-687-2982?
Tudjuk-e Chris E. Myer telefonszámát?
*/

let phoneBook = {
  "William A. Lathan": "405-709-1865",
  "John K. Miller": "402-247-8568",
  "Hortensia E. Foster": "606-481-6467",
  "Amanda D. Newland": "319-243-5613",
  "Brooke P. Askew": "307-687-2982",
};

function telephoneBook(phoneBook) {

  /* for(let key in phoneBook){
        if(key == 'John K. Miller'){
        console.log('Phone number: ', phoneBook[key])
        };
    }; */

  console.log(phoneBook["John K. Miller"]);

  for (let key in phoneBook) {
    if (phoneBook[key] == "307-687-2982") {
      console.log("Person: ", key);
    }
  }

  console.log(phoneBook.hasOwnProperty("Chris E. Myer"));

   if(Object.keys(phoneBook).includes('Chris E. Myer') == false){
       console.log('This person is not in the Phonebook!'); 
    }else{
    console.log('This person is in the Phonebook!')
    };
};

telephoneBook(phoneBook)