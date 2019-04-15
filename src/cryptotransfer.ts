import { CryptoTransferTransactionBody } from "../pbweb/CryptoTransfer_pb";

function cryptoTransfer(self: any) {

  const body = new CryptoTransferTransactionBody()
  body.setTransfers()

}

export default cryptoTransfer