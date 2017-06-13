#!/bin/bash

COUNT=50
START_PORT=3000
INTERVAL=500

for i in `seq 1 $COUNT`;
do
  node worker.js $(($START_PORT + $i)) $INTERVAL &
done
