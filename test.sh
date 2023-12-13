#!/bin/sh

for ((i = 0; i < 50; i++))
do 
    curl -w "@curl-format.txt" -o /dev/null -s "http://localhost:3000"
done