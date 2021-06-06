#!/bin/sh

# make a directory in the home directory to hold the database files
# this ensures us that even if the container is destroyed, your local data
# will not be lost by accident
mkdir -p ~/upwarddb

# start a docker container from the built image and name it upwarddb
# this uses environment variables that the container will check during start up
# in order to initialize the database

# create a new container named upwarddb
docker run --name upwardpg \
    -e POSTGRES_DB=upward \
    -e POSTGRES_USER=local \
    -e POSTGRES_PASSWORD=uPw4Rdsn0nw4rDz \
    -p 5442:5432 \
    -v ~/upwarddb:/var/lib/postgresql/data \
    -d postgres:12-alpine

# wait for the container
sleep 5

# generate and apply migrations via prisma
npx prisma migrate dev --name initialize