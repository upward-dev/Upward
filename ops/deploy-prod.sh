#!/bin/sh

# runs the build first
./build-image.sh production

# pushes the image to Heroku
./push-image.sh production

# releases the last pushed image
./release.sh production