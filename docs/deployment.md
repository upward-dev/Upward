# Deploying to Staging and Production Using Docker

## Prerequisites

You'll need to have:
    * [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
    * Heroku Container Plugin: `heroku plugins:install containers`
    * [Docker for Desktop]
        * [Installing on OS X](https://docs.docker.com/docker-for-mac/install/)
        * [Installing on Windows](https://docs.docker.com/docker-for-windows/install/)
    * Authenticated with the Heroku container registry: 
      `docker login --username=_ --password=$(heroku auth:token) registry.heroku.com`

## Deploying to Staging

```sh
npm run staging-deploy
```

## Deploying to Production

```sh
npm run prod-deploy
```

## What it's doing

The `ops` folder has a number of shell scripts used to perform a set of Docker commands in order to:
    * build and tag an image
    * push the image to Heroku's container registry
    * release the latest image (make that image live)

