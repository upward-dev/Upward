#!/bin/sh

# runs the build first
./ops/build-image.sh production

# pushes the image to Heroku
./ops/push-image.sh production

# releases the last pushed image
./ops/release.sh production