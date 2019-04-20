#!/usr/bin/env ts-node

import program from 'commander'
import fs from 'fs'
import path from 'path'

(async() => {

  const version = JSON.parse(fs.readFileSync(path.resolve('package.json')).toString()).version

  program.version(version)
    .option('-p, --proto <proto>', 'Use protobuf from [master] or [vNext]')
    .parse(process.argv)

  const pbnodeMaster = path.resolve(__dirname, '..', 'hedera-grpc', 'pbnode-master')
  const pbnodevNext = path.resolve(__dirname, '..', 'hedera-grpc', 'pbnode-vNext')
  const pbwebMaster = path.resolve(__dirname, '..', 'hedera-grpc', 'pbweb-master')
  const pbwebvNext = path.resolve(__dirname, '..', 'hedera-grpc', 'pbweb-vNext')

  const pbnodePath = path.resolve(__dirname, '..', 'pbnode')
  const pbwebPath = path.resolve(__dirname, '..', 'pbweb')

  const cleanLinks = (paths: string[]) => {
    paths.forEach((p) => {
      if (fs.lstatSync(p).isSymbolicLink()) {
        fs.unlinkSync(p)
      }
    })
  }

  if (program.proto !== 'master' && program.proto !== 'vNext') {
    return
  }
  
  if (program.proto === 'master') {
    cleanLinks([pbnodePath, pbwebPath])
    fs.symlinkSync(pbnodeMaster, pbnodePath)
    fs.symlinkSync(pbwebMaster, pbwebPath)
    // tslint:disable-next-line:no-console
    console.log('Using protobufs from master branch')
  }

  if (program.proto === 'vNext') {
    cleanLinks([pbnodePath, pbwebPath])
    fs.symlinkSync(pbnodevNext, pbnodePath)
    fs.symlinkSync(pbwebvNext, pbwebPath)
    // tslint:disable-next-line:no-console
    console.log('Using protobufs from vNext branch')
  }
})()

