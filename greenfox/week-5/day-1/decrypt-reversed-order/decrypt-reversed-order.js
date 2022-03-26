// Készíts egy függvényt, ami dekódolja a reversed-order.txt tartalmát

let fs = require("fs");

function decode(text) {
  try {
    let content = fs.readFileSync(text, "utf-8").split("\n");

    return content.reverse().join("\n");
  } catch (error) {
    return error.message;
  }
};

console.log(decode("reversed-order.txt"));
