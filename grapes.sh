#!/bin/bash

DEBUG=* grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002' &
DEBUG=* grape --dp 20002 --aph 30002 --bn '127.0.0.1:20001' &
