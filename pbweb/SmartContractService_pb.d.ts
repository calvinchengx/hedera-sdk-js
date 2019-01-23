export class Query {
  constructor ();
  getGetbykey(): {};
  setGetbykey(a: {}): void;
  getGetbysolidityid(): {};
  setGetbysolidityid(a: {}): void;
  getContractcalllocal(): {};
  setContractcalllocal(a: {}): void;
  getContractgetinfo(): {};
  setContractgetinfo(a: {}): void;
  getContractgetbytecode(): {};
  setContractgetbytecode(a: {}): void;
  getContractgetrecords(): {};
  setContractgetrecords(a: {}): void;
  getCryptogetaccountbalance(): {};
  setCryptogetaccountbalance(a: {}): void;
  getCryptogetaccountrecords(): {};
  setCryptogetaccountrecords(a: {}): void;
  getCryptogetinfo(): {};
  setCryptogetinfo(a: {}): void;
  getCryptogetclaim(): {};
  setCryptogetclaim(a: {}): void;
  getCryptogetproxystakers(): {};
  setCryptogetproxystakers(a: {}): void;
  getFilegetcontents(): {};
  setFilegetcontents(a: {}): void;
  getFilegetinfo(): {};
  setFilegetinfo(a: {}): void;
  getTransactiongetreceipt(): {};
  setTransactiongetreceipt(a: {}): void;
  getTransactiongetrecord(): {};
  setTransactiongetrecord(a: {}): void;
  getTransactiongetfastrecord(): {};
  setTransactiongetfastrecord(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Query;
}

export class Response {
  constructor ();
  getGetbykey(): {};
  setGetbykey(a: {}): void;
  getGetbysolidityid(): {};
  setGetbysolidityid(a: {}): void;
  getContractcalllocal(): {};
  setContractcalllocal(a: {}): void;
  getContractgetbytecoderesponse(): {};
  setContractgetbytecoderesponse(a: {}): void;
  getContractgetinfo(): {};
  setContractgetinfo(a: {}): void;
  getContractgetrecordsresponse(): {};
  setContractgetrecordsresponse(a: {}): void;
  getCryptogetaccountbalance(): {};
  setCryptogetaccountbalance(a: {}): void;
  getCryptogetaccountrecords(): {};
  setCryptogetaccountrecords(a: {}): void;
  getCryptogetinfo(): {};
  setCryptogetinfo(a: {}): void;
  getCryptogetclaim(): {};
  setCryptogetclaim(a: {}): void;
  getCryptogetproxystakers(): {};
  setCryptogetproxystakers(a: {}): void;
  getFilegetcontents(): {};
  setFilegetcontents(a: {}): void;
  getFilegetinfo(): {};
  setFilegetinfo(a: {}): void;
  getTransactiongetreceipt(): {};
  setTransactiongetreceipt(a: {}): void;
  getTransactiongetrecord(): {};
  setTransactiongetrecord(a: {}): void;
  getTransactiongetfastrecord(): {};
  setTransactiongetfastrecord(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Response;
}

export class Transaction {
  constructor ();
  getBody(): {};
  setBody(a: {}): void;
  getSigs(): {};
  setSigs(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Transaction;
}

export class TransactionResponse {
  constructor ();
  getNodetransactionprecheckcode(): {};
  setNodetransactionprecheckcode(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TransactionResponse;
}

