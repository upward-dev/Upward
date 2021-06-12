#!/bin/sh

# runs the build first
./ops/build-image.sh staging

# pushes the image to Heroku
./ops/push-image.sh staging

# releases the last pushed image
./ops/release.sh staging