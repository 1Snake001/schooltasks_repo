'use strict';

// Készíts egy függvényt, ami képes megváltoztatni egy fájl tartalmát
// Írja bele a Te nevedet egy sorban.
// A fájl neve 'my-file-txt' legyen.
// Ha a program nem tud írni a fájlba,
// Írja ki a következő hibaüzenetet: 'Unable to write file: my-file.txt'

let fs = require('fs');


function lineWriter(textFile, textContent){
    try{
        fs.writeFileSync(textFile, textContent);  
    }catch(error){
        console.log('Unable to write file: my-file.txt')
    };
};

lineWriter('my-file-txt','Hepp Sándor');

