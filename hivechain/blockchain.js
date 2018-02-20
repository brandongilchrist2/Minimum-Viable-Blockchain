const Block = require('./block.js')

class Blockchain {
  constructor(){
    this.chain = [Block.genesis()]
  }

    addBlock(data) {
      const lastBlock = this.chain[this.chain.length-1]
      const block = Block.mineBlock(lastBlock, data)
      this.chain.push(block)

      return block
    }

    isValidChain(chain) {
      if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false
    
      for (let index = 1; index < chain.length; index++) {
        const block = chain[index];
        const lastBlock = chain[index-1]

        if (block.lastHash !== lastBlock.hash || block.hash !== Block.blockhash(block)) return false

      }
      return true
    }
}

module.exports = Blockchain