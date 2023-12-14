#!/bin/sh

for ((i = 0; i < 50; i++))
do 
    curl -w "@curl-format.txt" -o /dev/null -s "https://load-balancer.cloud.local/"
done