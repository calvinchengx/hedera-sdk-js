import KeyPair from '../keypair'

test('KeyPair', () => {
    const keyPair = new KeyPair()
    expect(keyPair).toBe(keyPair)
})
