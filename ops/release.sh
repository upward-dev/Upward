#!/bin/sh

# uses heroku's container plugin to release the last pushed image
heroku container:release web -a upward-$1