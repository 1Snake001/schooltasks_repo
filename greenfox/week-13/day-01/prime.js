/* function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr);
}


display(100); */

function test_prime(n) {
    
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

'use strict'

function addDivs(i) {

  const section = document.getElementsByTagName('section')[0];
  let div = document.createElement('div');
  div.textContent = i;

  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0 ) {
            prime = false
    }
  }
  
  if (prime === true) {
    div.classList.add('prime');
  } else {
    div.classList.add('not-prime');
  }
  section.appendChild(div);
}


let i = 2;
const timer = setInterval(() => {
  if (i === 100) {
    clearInterval(timer);
  }
  addDivs(i++);
}, 100);
