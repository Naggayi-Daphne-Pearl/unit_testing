const { assert } = require('chai');
const { multiply } = require('./multiply');

// eslint-disable-next-line no-undef
describe('multiply test', () => {
  it('Test First TDD Cycle 1', () => {
    // use assert here
    assert.equal(multiply(1, 1), 1);
  });

  it('Test First TDD Cycle 2', () => {
    // use assert here
    // eslint-disable-next-line no-sequences
    assert.equal(multiply(2, 2), 4);
  });

  it('Test First TDD Cycle 3', () => {
    // use assert here
    assert.equal(multiply(3, 3), 9);
  });
  it('Test First TDD Cycle 4', () => {
    // use assert here
    assert.equal(multiply(4, 4), 16);
  });
  it('Test First TDD Cycle 5', () => {
    // use assert here
    assert.equal(multiply(5, 5), 25);
  });
});
