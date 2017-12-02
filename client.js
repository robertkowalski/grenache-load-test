'use strict'

const PORT = process.argv[2]
const INTERVAL = +process.argv[3]

const { PeerRPCClient } = require('grenache-nodejs-http')
const Link = require('grenache-nodejs-link')

const link = new Link({
  grape: 'http://127.0.0.1:30001'
})
link.start()

const peer = new PeerRPCClient(link, {})
peer.init()

setInterval(() => {
  const d1 = new Date()
  peer.request('rpc_test', 'hello', { timeout: 10000 }, (err, data) => {
    if (err) console.log(err)
    const d2 = new Date()
    console.log(d2 - d1)
  })
}, INTERVAL)
