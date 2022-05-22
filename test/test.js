/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { assert } = require('chai');

// eslint-disable-next-line no-undef
describe('multiply test', () => {
  it('Test First TDD Cycle 1', () => {
    // use assert here
    function multiply(a, b) { return 1; }
    assert.equal(multiply(1, 1), 1);
  });

  it('Test First TDD Cycle 2', () => {
    // use assert here
    // eslint-disable-next-line no-sequences
    function multiply(a, b) { return a * b; }
    assert.equal(multiply(2, 2), 4);
  });

  it('Test First TDD Cycle 3', () => {
    // use assert here
    function multiply(a, b) { return a * b; }
    assert.equal(multiply(3, 3), 9);
  });
  it('Test First TDD Cycle 4', () => {
    // use assert here
    function multiply(a, b) { return a * b; }
    assert.equal(multiply(4, 4), 16);
  });
  it('Test First TDD Cycle 5', () => {
    // use assert here
    function multiply(a, b) { return a * b; }
    assert.equal(multiply(5, 5), 25);
  });
});
