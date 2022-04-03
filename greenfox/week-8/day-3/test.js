import test from "tape";
import Apples from "./Apples.js";

test("ellenorzes", function (t) {
  const apple = new Apples();
  const expected = "apple";

  const actual = apple.getApple();

  t.equal(actual, expected);
  t.end();
});
