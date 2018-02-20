// var chai = require('chai')
// var mocha = require('mocha')

// var assert = chai.assert

var Block = require("../block.js")

describe('Blockchain', () => {
  it('it should return the test block', () => {
    var testBlock = new Block('bing', 'bang', 'boom', 'buzz')
    assert.property(testBlock, 'data', 'data in block cannot be read')
    assert.property(testBlock, 'timestamp', 'Timestamp cannot be read')
    assert.property(testBlock, 'lastHash', 'last hash cannot be read' )
    assert.property(testBlock, 'hash', 'Current Hash cannot be read')
    console.log(`${testBlock.toString()}\n`);
  });
 
  it('should return the Genesis Block', () => {
    assert.property(Block.genesis(), 'data', 'data in block cannot be read')
    assert.property(Block.genesis(), 'timestamp', 'Timestamp cannot be read')
    assert.property(Block.genesis(), 'lastHash', 'last hash cannot be read' )
    assert.property(Block.genesis(), 'hash', 'Current Hash cannot be read')
    console.log(`${Block.genesis().toString()}\n`);
  });

  it('should return a adam block', () => {
    const adamBlock = Block.mineBlock(Block.genesis(), 'adam block is here to stay')
    assert.property(adamBlock, 'timestamp', 'The Block has no timestamp')
    console.log(adamBlock.toString());
  });
});