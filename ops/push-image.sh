#!/bin/sh

# this pushes the most recently built local image to the container registry
# PLEASE BE SURE YOU HAVE A VALID BUILD FIRST
docker push registry.heroku.com/upward-$1/web