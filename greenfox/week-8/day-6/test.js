const test =  require('tape');
const countLetters = require('./count-letters.js');

test('check unique', function(t){

    const expected = {k:2, i:1, r:2, o:2, b:2, a:1, n:1, t:1, e:3, l:2, m:1};
    
    const actual = countLetters('Kikrobbantoelemelr');
    t.deepEqual(actual,expected);
    t.end();
})

test('check unique', function(t){

    const expected = {k:1, i:1, r:2, o:2, b:2, a:1, n:1, t:1, e:3, l:2, m:1};
    
    const actual = countLetters('Kirobbanttoelemelr');
    t.deepEqual(actual,expected);
    t.end();
});