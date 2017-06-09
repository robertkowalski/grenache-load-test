#!/bin/bash

INTERVAL=$1
COUNT=$2
START_PORT=5000

DEBUG=grenache:grenache-nodejs-base node client.js $(($START_PORT - 1)) $INTERVAL &
DEBUG=grenache:grenache-nodejs-base node client.js $(($START_PORT - 2)) $INTERVAL &

for i in `seq 1 $COUNT`;
do
  node client.js $(($START_PORT + $i)) $INTERVAL &
done
