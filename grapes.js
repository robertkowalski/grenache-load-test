'use strict'

const DEBUG = 1

const env = Object.create(process.env)

if (DEBUG) {
  env.DEBUG = '*'
}

const spawn = require('child_process').spawn
const _ = require('lodash')

const boostrapNodes = {}
const count = 30

let startPort = 20001
for (let i = 0; i < 30; i++) {
  boostrapNodes[startPort] = '127.0.0.1:' + startPort
  startPort++
}

const nodes = {}
Object.keys(boostrapNodes).forEach((port) => {
  port = +port
  const others = _.without(Object.keys(boostrapNodes), '' + port)

  const bn = others.map((p2) => {
    return boostrapNodes[p2]
  }).join(',')

  nodes[port] = `--dp ${port} --aph ${port + 1000} --bn ${bn}`
})

const grapes = []
Object.keys(nodes).forEach((k) => {
  const cmd = nodes[k]

  let g = spawn('grape', cmd.split(' '), { stdio: 'inherit', env: env })

  grapes.push(g)
})

// grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002' &
// grape --dp 20002 --aph 30002 --bn '127.0.0.1:20001' &
