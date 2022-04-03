const test = require('tape').test;
const add = require('./add.js');

test('Az add fuggveny', (t) => {
    //AAA
    // Arrange
    const expected = 3;
    let actual;

    //Act
    actual = add(1, 2);

    //Assert
    t.equals(actual, expected, 'Kiszámolja, hogy egyenlő e, a két megadott érték');
    t.end();
});