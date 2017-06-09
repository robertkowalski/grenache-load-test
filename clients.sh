#!/bin/bash

INTERVAL=$1
COUNT=150
START_PORT=4000

for i in `seq 1 $COUNT`;
do
  node client.js $(($START_PORT + $i)) $INTERVAL &
done
