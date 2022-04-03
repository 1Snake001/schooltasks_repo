/*
Írj egy függvényt, ami kiszámolja a Fibonacci sorozat n-edik tagját a megadott n bemenet alapján!
Írj rá teszteket!
 */

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

module.exports = fibonacci;