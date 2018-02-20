const Blockchain = require('../blockchain')
const Block = require('../block')
describe('Blockchain', () => {
  let bc, bc2

  beforeEach(() => {
    bc = new Blockchain()
    bc2 = new Blockchain()
  });

  it('starts with the genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis())
  });

  it('should add a new block', () => {
    const data = 'foo'
    bc.addBlock(data)
    expect(bc.chain.length).toEqual(2)
    expect(bc.chain[bc.chain.length-1].data).toEqual(data)
  });
  it('should validate a valid chain', () => {
    bc2.addBlock('foo')

    expect(bc.isValidChain(bc2.chain)).toBe(true)
  });
});
