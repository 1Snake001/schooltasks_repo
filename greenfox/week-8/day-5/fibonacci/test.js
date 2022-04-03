const test = require("tape");
const fibonacci = require("./fibonacci.js");

test("check fibonacci", (t) => {
  const expected = 21;

  const actual = fibonacci(8);
  t.equal(actual, expected);
  t.end();
});
test("check fibonacci", (t) => {
  const expected = 13;

  const actual = fibonacci(7);
  t.equal(actual, expected);
  t.end();
});
