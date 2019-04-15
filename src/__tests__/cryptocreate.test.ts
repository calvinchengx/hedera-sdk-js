import forge from 'node-forge';
import { Key } from '../../pbweb/BasicTypes_pb';
import { Duration } from '../../pbweb/Duration_pb';
import cryptoCreate from '../cryptocreate';

const ed25519 = forge.pki.ed25519

test('CryptoCreate', () => {
  const seed = forge.random.getBytesSync(32);
  const keypair = ed25519.generateKeyPair({ seed })

  const publicKey = new Key()
  publicKey.setEd25519(keypair.publicKey)

  const duration = new Duration()

  cryptoCreate(publicKey, 10000, duration)
})