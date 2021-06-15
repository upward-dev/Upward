#!/bin/sh

# prep files for inclusion in image using a tarball
# this makes it easy to control which items get copied
# to the daemon context and also speeds things up a bit
# when moving the files
tar -czf source.tar.gz --exclude-from=ops/excluded.txt *

# build the docker image using the Dockerfile in the ops folder

docker build -t registry.heroku.com/upward-$1/web -f ops/Dockerfile .