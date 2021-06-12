#!/bin/sh

# runs the build first
./build-image.sh staging

# pushes the image to Heroku
./push-image.sh staging

# releases the last pushed image
./release.sh staging