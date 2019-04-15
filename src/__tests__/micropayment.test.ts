import { JSDOM } from 'jsdom'
import * as path from 'path';
import { Hedera } from '..';

test('Micropayment', async () => {
  const testFile = path.join(__dirname, 'testdata', 'test.html')
  const dom = await JSDOM.fromFile(testFile)
  const doc = dom.window.document
  Hedera.micropayment(doc)
})