import test from "tape";
import Sum from "./sum.js";

test("összeg ellenörzés 4 ellemel", (t) => {
  let sumClass = new Sum();
  const expected = 15;

  const actual = sumClass.sum([3, 4, 7, 1]);
  t.equal(actual, expected);
  t.end();
});

test("összeg ellenörzés üres tömbb esetén", (t) => {
  let sumClass = new Sum();
  const expected = 0;

  const actual = sumClass.sum([]);
  t.equal(actual, expected);
  t.end();
});

test("összeg ellenörzés 1 elemű tömbb esetén", (t) => {
  let sumClass = new Sum();
  const expected = 5;

  const actual = sumClass.sum([5]);
  t.equal(actual, expected);
  t.end();
});

test("összeg ellenörzés null esetén", (t) => {
  let sumClass = new Sum();
  const expected = null;

  const actual = sumClass.sum([null]);
  t.equal(actual, expected);
  t.end();
});

test("összeg ellenörzés null esetén", (t) => {
  let sumClass = new Sum();
  const expected = 'PistaGyula';

  const actual = sumClass.sum(['Pista','Gyula']);
  t.equal(actual, expected);
  t.end();
});
