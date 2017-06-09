'use strict'

const PORT = +process.argv[2]

const Grenache = require('grenache-nodejs-http')
const Link = Grenache.Link
const Peer = Grenache.PeerRPCServer

const _ = require('lodash')

const link = new Link({
  grape: 'ws://127.0.0.1:30001'
})
link.start()

const peer = new Peer(link, {})
peer.init()

const service = peer.transport('server')
service.listen(PORT)

setInterval(function () {
  link.announce('rpc_test', service.port, {})
}, 300)

service.on('request', (rid, key, payload, handler) => {
  // console.log('peer', rid, key, payload)
  handler.reply(null, 'world')
  // handler.reply(new Error('something went wrong'), 'world')
})
