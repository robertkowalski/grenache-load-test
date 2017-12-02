#!/bin/bash

INTERVAL=50
COUNT=140
START_PORT=4000

for i in `seq 1 $COUNT`;
do
  node client.js $(($START_PORT + $i)) $INTERVAL &
done
