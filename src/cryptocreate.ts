import { Key } from '../pbweb/BasicTypes_pb'
import { CryptoCreateTransactionBody } from '../pbweb/CryptoCreate_pb'
import { Duration } from '../pbweb/Duration_pb';

/**
 * 
 * @param publicKey 
 * @param initialBalance 
 * @param duration 
 */
function cryptoCreate(publicKey: Key, initialBalance: number, duration: Duration) {

  const body = new CryptoCreateTransactionBody()
  body.setKey(publicKey)
  body.setInitialbalance(initialBalance)
  body.setAutorenewperiod(duration)

}

export default cryptoCreate