class KeyPair {
  
  public publicKey: string
  public privateKey: string

  constructor(publicKey: string = "", privateKey: string = "") {
    this.publicKey = publicKey
    this.privateKey = privateKey
  }

}

export default KeyPair