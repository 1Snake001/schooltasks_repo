"use strict";

const test = require('tape');
const add = require('./add.js');
const sub = require('./add.js');

test("2 szam osszeadasa", function(t) {
  const expected = 3;

  let actual = add(1, 2);

  t.equals(actual, expected);
  t.end();
});

test("ket szam kivonasa", function(t) {
  const expected = 3;

  const actual = sub(5, 2);

  t.equals(actual, expected);
  t.end();
});
