class Block {
  constructor(timestamp, lastHash, currHash, data) {
    this.timestamp = timestamp
    this.lastHash = lastHash
    this.currHash = currHash
    this.data = data
  }
  toString() {
     return ` Block -
      timestamp :: ${this.timestamp}
      Last Hash :: ${this.lastHash} 
      Curr Hash :: ${this.currHash}
      Data      :: ${this.data}`
  }
}

module.exports = Block
