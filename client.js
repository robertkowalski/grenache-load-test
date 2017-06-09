'use strict'

const PORT = process.argv[2]
const INTERVAL = +process.argv[3]

const Grenache = require('grenache-nodejs-http')
const Link = Grenache.Link
const Peer = Grenache.PeerRPCClient

const link = new Link({
  grape: 'ws://127.0.0.1:30001'
})
link.start()

const peer = new Peer(link, {})
peer.init()

link.on('connect', () => {
  setTimeout(() => {
    setInterval(() => {
      const d1 = new Date()
      peer.request('rpc_test', 'hello', { timeout: 10000 }, (err, data) => {
        if (err) console.log(err)
        const d2 = new Date()
        console.log(d2 - d1)
      })
    }, INTERVAL)
  }, 1000)
})
