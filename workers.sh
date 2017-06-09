#!/bin/bash

COUNT=35
START_PORT=3000

for i in `seq 1 $COUNT`;
do
  node worker.js $(($START_PORT + $i)) &
done
