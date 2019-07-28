#!/bin/sh
URL="http://localhost:8888"
JSON='{"name":"john.doe","raw_password":"w33k_pa55w0rd"}'
curl -H 'Content-Type:application/json' -X POST $URL -d $JSON