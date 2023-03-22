const assert = require('assert');
const capitalizeFirstLetters = require('./tdd-quest-javascript/capitalizeFirst');

describe('capitalizeFirstLetters', () => {
  it('is a function that accepts one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });
  it('works for an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
  it('works for a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });
  it('works for an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters('je'), 'Je');
  });
  it('works for an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters('je suis un idiot sandwich'), 'Je Suis Un Idiot Sandwich');
  });
});
