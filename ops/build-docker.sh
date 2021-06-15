#!/bin/sh

# build the docker image using the Dockerfile in the ops folder
# instead of using docker directly, this relies on a project
# that is able to generate a unique tag based on the package.json
# version so it's easy to differentiate images based on version

node_modules/@viperidae/shipwright/bin/shipwright.js \
    build image \
    --repo=upward-dev \
    --tags=v_c_s \
    --registry=registry.heroku.com
