var Block = require("../block.js")

describe('Block', () => {
  let data, lastBlock, block

  beforeEach(() => {
    data = 'bar'
    lastBlock = Block.genesis()
    block = Block.mineBlock(lastBlock, data)
  });

  it('sets the `data` to match the input', () => {
    expect(block.data).toEqual(data)
    console.log(`${block.toString()}\n`);
  });
  it('sets the `lastHash` to match the hash of the last block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash)
  });
 
  it('should return the Genesis Block', () => {
    expect(Block.genesis().data).toEqual("Welcome To The Genesis Block")
    console.log(`${Block.genesis().toString()}\n`);
  });
});